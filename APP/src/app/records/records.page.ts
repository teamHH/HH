import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {
  public searchControl: FormControl;
  userId: any;
  records:any= [];
  items: any; //備份records的全部資料
  months = ['全部月份'];
  result = [];
  types = ['全部類別', '健走', '跑步', '單車'];

  monthType: string='';
  sportType: string='';
  sportDistance= 0;

  searchTerm: string = "";
  month_req: any;
  type_req: any;
  searching: any = true;

  constructor(private storage: Storage, public http: HttpClient, public alertController: AlertController, private datePipe: DatePipe, private appComponent: AppComponent) {
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      this.queryOrbitRecord();
      event.target.complete();
    }, 2000);
  }
  ngOnInit(){
    this.storage.get('userId').then((val) => {
      console.log('Your userId is', val);
      this.userId = val;
      this.queryOrbitRecord();
    }); 
    
    this.initializeItems();
    this.month_req= '全部月份';
    this.type_req= '全部類別';
  }
  ionViewWillEnter() {
    this.ngOnInit();
    this.appComponent.updateUser();
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
      this.records = this.records.filter((record) => {
        this.searching = false;
        return ((record.sportstarttime.toLowerCase().indexOf(month.toLowerCase()) > -1) && (record.otype.toLowerCase().indexOf(type.toLowerCase()) > -1));
      })
    }
    /*
    if(this.records == false){
      console.log("查無資料!");
    }
    */
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

  //////////////////////////查詢orbit record
  queryOrbitRecord(){
    console.log("queryOrbitRecord: " + this.userId);

    // 傳給主機的參數
    this.http.post("http://140.131.115.88:80/mobile_query", {"userId":  this.userId})
    .subscribe(data  => {
      console.log("Query Orbit Record successful: ", data);
      if(data != 1){
        this.searching = false;
        this.records = data;
        this.items = this.records; //備份

        for(var i=0; i<this.records.length; i++){
          //傳回值records.sportstarttime修改成以 yyyy/MM/dd hh:mm:ss aaa 表示
          this.records[i].sportstarttime = this.datePipe.transform(this.records[i].sportstarttime, 'yyyy/MM/dd hh:mm:ss aaa');

          //傳回值records.sportdistance、record.avgminkm修改成以 四捨五入小數點後4位 表示
          this.records[i].sportdistance = Math.round(this.records[i].sportdistance*10000)/10000;
          this.records[i].avgminkm = Math.round(this.records[i].avgminkm*10000)/10000;
          
          //傳回值records.sportstarttime取年、月新增至months分類
          this.months.push(this.records[i].sportstarttime.slice(0,7));
          this.result = this.months.filter(function(element, index, arr){
            return arr.indexOf(element) === index;
          });
          this.months = this.result;
          
          //傳回值records.time修改成以 hh:mm'ss" 表示
          var hours = '';
          var mins = '';
          var secs = '00"';
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
          this.records[i].sectime = hours + mins + secs;

          // 判斷單筆資料的sportType, 設定該筆icon name
          if(this.records[i].otype === '健走'){
            this.records[i].icon = 'man';
          }else if(this.records[i].otype === '跑步'){
            this.records[i].icon = 'walk';
          }else if(this.records[i].otype === '單車'){
            this.records[i].icon = 'bicycle';
          }
        }
      }else{
        this.searching = false;
      }
    },
    error  => {
      console.log("Error", error);
      }
    );
  }
}
