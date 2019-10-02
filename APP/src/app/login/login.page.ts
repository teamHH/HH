import { Component, OnInit, Input } from '@angular/core';
//import { Http, URLSearchParams } from '@angular/http';
import { AlertController } from '@ionic/angular';
import { Observable, BehaviorSubject, of } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, filter, catchError, mergeMap, tap } from 'rxjs/operators';
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

  constructor(public http: HttpClient, public alertController: AlertController, private router: Router, private storage: Storage) {
  }

  ngOnInit() {
  }

  

  //----------------------------------
  // 讀取主機資料
  //---------------------------------- 
  loadData(){
    // 傳給主機的參數
    console.log(this.userId, this.password);

    this.http.post("http://140.131.115.88:80/mobile_login", {"userId":  this.userId, "password":  this.password})
    .subscribe((data)  => {
      console.log("Login successful ", data);
      if(data == "0"){
        this.showConfirm();
        this.storage.set('userId', this.userId);
        this.storage.set('password', this.password);
      }else{
        this.showNotFound();
      }
    },
    (err)  => {
      console.log("Error", err);
      this.showAlert(err);
    }
    );
  }

  async showConfirm(){
    let alert = await this.alertController.create({
      header: '登入成功!',
      subHeader: '歡迎使用How Heathly',
      buttons: [
        {
          text: 'OK', 
          handler: () => {
            this.router.navigate(['/start/:id'])
        }}
      ]
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
