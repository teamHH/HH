import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { setClassMetadata } from '@angular/core/src/render3';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public searchControl: FormControl;
  userId: any;
  records: any;
  items: any; //備份records的全部資料

  months = [
    '全部月份'
  ];

  result = [];

  types = [
    '全部類別', '健走', '跑步', '單車'
  ];

  monthType:string='';
  sportType:string='';

  searchTerm: string = "";
  month_req: any;
  type_req: any;
  searching: any = true;

  constructor(private router: Router, private route: ActivatedRoute, 
    private storage: Storage, public http: HttpClient, public alertController: AlertController,
    private datePipe: DatePipe) {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.queryOrbitRecordNo();
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.storage.get('userId').then((val) => {
      console.log('Your userId is', val);
      this.userId = val;
      console.log(this.userId);
      this.queryOrbitRecordNo();
    });

    this.initializeItems();
    this.month_req= '全部月份';
    this.type_req= '全部類別';
  }

  //////////////////////////Filter
  filterAllCondition(month, type){
    console.log("month: " + month + ", type: " + type);
    if(month == '全部月份' && type == '全部類別'){
      this.searching = false;
      this.initializeItems();
    }else if(month == '全部月份'){
      if(type && type.trim() != '') {
        this.records = this.records.filter((record) => {
          this.searching = false;
          console.log(record.otype.toLowerCase().indexOf(type.toLowerCase()) > -1)
          return (record.otype.toLowerCase().indexOf(type.toLowerCase()) > -1);
        })
      }
    }else if(type == '全部類別'){ 
      if(month && month.trim() != '') {
        this.records = this.records.filter((record) => {
          this.searching = false;
          console.log(record.sportstarttime.toLowerCase().indexOf(month.toLowerCase()) > -1)
          return (record.sportstarttime.toLowerCase().indexOf(month.toLowerCase()) > -1);
        })
      }
    }else{
      console.log("***");
      this.records = this.records.filter((record) => {
        this.searching = false;
        console.log(record.sportstarttime.toLowerCase().indexOf(month.toLowerCase()) > -1)
        return ((record.sportstarttime.toLowerCase().indexOf(month.toLowerCase()) > -1) && (record.otype.toLowerCase().indexOf(type.toLowerCase()) > -1));
      })
    }
    if(this.records == false){
      console.log("查無資料!");
    }
  }

  ngMonth(event){
    this.initializeItems();
    this.searching = true;
    console.log(event);
    this.month_req= event;
    this.filterAllCondition(this.month_req, this.type_req);
    console.log(this.month_req, this.type_req)
  }

  ngSportType(event){
    this.initializeItems();
    this.searching = true;
    console.log(event);
    this.type_req= event;
    this.filterAllCondition(this.month_req, this.type_req);
    console.log(this.month_req, this.type_req)
  }

  initializeItems(){ 
    this.records = this.items;
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
    this.http.post("http://140.131.115.88:80/mobile_query", {"userId":  this.userId})
    .subscribe(data  => {
      console.log("Query Orbit Record successful: ", data);
      this.searching = false;
      this.items = data; //備份
      this.records = data;

      for(i=0; i<this.records.length; i++){
        //console.log(this.records[i].otype);
        //console.log((this.records[i].sportstarttime).slice(0,7));

        //傳回值sport start time只取日期
        //console.log(new Date(this.records[i].sportstarttime).toDateString());
        this.records[i].sportstarttime = this.datePipe.transform(this.records[i].sportstarttime, 'yyyy/MM/dd hh:mm:ss aaa');
        
        //console.log("***" + new Date(this.records[i].sportstarttime).toDateString().slice(4,7), new Date(this.records[i].sportstarttime).toDateString().slice(11,15))
        this.months.push(this.records[i].sportstarttime.slice(0,7));
        this.result = this.months.filter(function(element, index, arr){
          return arr.indexOf(element) === index;
        });
        this.months = this.result;
        //console.log(this.result);
        var hours = '';
        var mins = '';
        var secs = '00"';
        //傳回值time.seconds修改成以mins為單位
        if(this.records[i].time.hours >= 1){
          hours = this.records[i].time.hours + ':';
          mins = '00' + '\'';
          secs = '00' + '\"';
        }
        if(this.records[i].time.minutes >= 1){
          mins = this.records[i].time.minutes + '\'';
          secs = '00' + '\"';
        }
        if(this.records[i].time.seconds >= 1){
          secs = this.records[i].time.seconds + '\"';
        }
        this.records[i].time = hours + mins + secs;
        

        // 判斷單筆資料的sportType, 設定該筆icon name
        if(this.records[i].otype === '健走'){
          this.records[i].icon = 'man';
          //console.log(1);
        }else if(this.records[i].otype === '跑步'){
          this.records[i].icon = 'walk';
          //console.log(2);
        }else if(this.records[i].otype === '單車'){
          this.records[i].icon = 'bicycle';
          //console.log(3);
        }
        //console.log(this.records[i].icon);
      }
      
    },
    error  => {
      console.log("Error", error);
      }
    );
  }

}
