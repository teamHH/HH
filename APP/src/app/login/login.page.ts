import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userId: string;
  password: string;
  returnCode: any;
  theTodo: any;
  isLoginEnabled: boolean= true;

  constructor(public http: HttpClient, 
    public alertController: AlertController, 
    private router: Router, 
    private storage: Storage) {
  }

  ngOnInit() {
    this.storage.get('userId').then((val) => {
      this.userId = val;
      if(this.userId != null){
        this.router.navigate(['home']);
      }else{
        console.log(456);
      }
    });
  }

  animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }

  //----------------------------------
  // 跟主機確認帳號密碼
  //---------------------------------- 
  loadData(){
    //禁止點擊登入Button
    this.isLoginEnabled = false;
    this.storage.clear();
    setTimeout(async ()=>{
      await this.http.post("http://140.131.115.88:80/mobile_login", {"userId":  this.userId, "password":  this.password})
      .subscribe((data)  => {
        console.log("Login successful ", data);
        if(data != '1'){
          this.showConfirm();
          this.router.navigate(['/home']);
          this.isLoginEnabled = true;
          this.storage.set('userId', this.userId);
          this.storage.set('password', this.password);
          this.storage.set('userName', data);
          console.log(this.storage);
        }else{
          this.showNotFound();
          this.isLoginEnabled = true;
        }
      },
      (err)  => {
        console.log("Error", err);
        this.showAlert(err);
        this.isLoginEnabled = true;
      }
      );
    },1000);
  }

  async showConfirm(){
    let alert = await this.alertController.create({
      header: '登入成功!',
      subHeader: '歡迎使用How Heathly',
      buttons: ['OK']
    });
    await alert.present();
  }

  //----------------------------------
  // 顯示讀取失敗訊息
  //----------------------------------
  async showAlert(er){
    console.log(er);
    const  alert = await this.alertController.create({
      header: '資料取得失敗!',
      subHeader: '請確定網路狀態, 或是主機是否提供服務中.',
      buttons: ['OK']
    });
    await alert.present();
  }

  //----------------------------------
  // 顯示無符合資料訊息
  //----------------------------------
  async showNotFound() {
    const  alert = await this.alertController.create({
      header: '登入失敗!',
      subHeader: '請重新確認帳號密碼',
      buttons: ['OK']
    });
    await alert.present();
  }
  //----------------------------------  
}
