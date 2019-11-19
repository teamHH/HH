import { Component } from '@angular/core';

import { Platform, AlertController, MenuController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userName: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public alertController: AlertController,
    private menu: MenuController,
    private storage: Storage,
    private emailComposer: EmailComposer,
    public events: Events
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  updateUser(){
    this.storage.get('userName').then((val) => {
      this.userName = val.displayname;
      console.log(this.userName);
    });
  }

  closeMenu(){
    this.menu.close();
  }

  home(){
    this.router.navigate(['home']);
    this.closeMenu();
  }

  record(){
    this.router.navigate(['records']);
    this.closeMenu();
  }

  weather(){
    this.router.navigate(['weather']);
    this.closeMenu();
  }

  async logout() {
    const alert = await this.alertController.create({
      header: '登出',
      message: '確定要登出嗎？',
      buttons: [
        {
          text: 'Cancel'
        }, {
          text: 'Okay',
          handler: () => {
            this.storage.clear();
            console.log('Confirm Okay');
            this.router.navigate(['']);
            this.closeMenu();
          }
        }
      ]
    });

    await alert.present();
    
  }
  
  openEmailComposer(){
    this.emailComposer.open({
      to: '10456022@ntub.edu.tw'
    })
  }
}
