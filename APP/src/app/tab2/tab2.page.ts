import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  userId: any;
  records: any;

  constructor(private router: Router, private route: ActivatedRoute, 
    private storage: Storage, public http: HttpClient, public alertController: AlertController, ) {
  }

  ngOnInit() {
    this.storage.get('userId').then((val) => {
      console.log('Your userId is', val);
      this.userId = val;
      console.log(this.userId);
      this.queryOrbitRecordNo();
    });
    
    
  }

  //////////////////////////登出
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
            console.log('Confirm Okay');
            this.router.navigate([''])
          }
        }
      ]
    });

    await alert.present();
  }

  //////////////////////////查詢orbit record
  queryOrbitRecordNo(){
    var i;
    console.log("queryOrbitRecord: " + this.userId);

    // 傳給主機的參數
    this.http.post("http://192.168.114.102:3000/mobile_query", {"userId":  this.userId})
    .subscribe(data  => {
      console.log("Query Orbit Record successful: ", data);
      this.records = data;

      for(i=0; i<this.records.length; i++){
        console.log(this.records[i].otype);

        //傳回值sport start time只取日期
        console.log(new Date(this.records[i].sportstarttime).toDateString())
        this.records[i].sportstarttime = new Date(this.records[i].sportstarttime).toDateString().slice(4);

        //傳回值time.seconds修改成以mins為單位
        if(this.records[i].time.seconds < 60){
          this.records[i].time = this.records[i].time.seconds;
          this.records[i].unit = 'sec.';
        }else{
          this.records[i].time = Math.round(this.records[i].time.seconds/60*100)/100;
          this.records[i].unit = 'min.'
        }
        

        // 判斷單筆資料的sportType, 設定該筆icon name
        if(this.records[i].otype === '健走'){
          this.records[i].icon = 'man';
          console.log(1);
        }else if(this.records[i].otype === '跑步'){
          this.records[i].icon = 'walk';
          console.log(2);
        }else if(this.records[i].otype === '單車'){
          this.records[i].icon = 'bicycle';
          console.log(3);
        }
        console.log(this.records[i].icon);
      }
      
    },
    error  => {
      console.log("Error", error);
      }
    );
  }

}
