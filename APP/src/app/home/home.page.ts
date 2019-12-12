import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //---------------------------------------------------
  // 成員  
  //---------------------------------------------------
  map: any;
  userId: any;
  lat= [];
  long= [];
  time= [];
  record= [];
  sportRecord= [];
  orbitRecordNo: any;
  
  start_time: number = 0;
  start_markPoint: any;
  end_markPoint: any;
  isStartEnabled: boolean = true;
  isStopEnabled: boolean = false;

  get_duration_interval: any;
  
  sports = [
    {id: 4, type: '健走'},
    {id: 5, type: '跑步'},
    {id: 6, type: '單車'}
  ];

  myIcon = icon({
    iconUrl: 'assets/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -40],
    shadowUrl: 'assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });
  
  //--------------------------------------------------- 
  // 建構元
  //---------------------------------------------------  
  constructor(private geolocation: Geolocation, 
    public alertController: AlertController, 
    private storage: Storage, 
    public http: HttpClient, private datePipe: DatePipe, private appComponent: AppComponent) {
  }

  ionViewDidEnter() {
    this.leafletMap();
    this.locate('forWeather');
    this.ngOnInit();
  }

  ngOnInit() {
    this.storage.get('userId').then((val) => {
      console.log('Your userId is', val);
      this.userId = val;
    });
  }

  ionViewWillEnter(){
    this.appComponent.updateUser();
  }

  //////////////////////////計時器
  selectSportType: any = 4;
  ngSportType(event){
    this.selectSportType = event['id'];
  }
  
  startInterval(){
    //清空record, sportRecord
    console.log(this.userId);
    this.record=[];
    this.sportRecord=[];
    this.sportDistance = 0;
    this.orbitRecordNo = new Date().getTime().toString();
    this.orbitRecordNo = this.datePipe.transform(new Date(), 'yydd') + this.orbitRecordNo.slice(this.orbitRecordNo.length-6, this.orbitRecordNo.length);
    console.log(typeof this.orbitRecordNo);

    //按下去的當下即新增一筆紀錄
    this.locate('sportRecord');
    if(this.start_time == 0){
      this.locate('sportFirstRecord');
      this.start_time +=1;
    }else{
      this.map.removeLayer(this.start_markPoint);
      this.map.removeLayer(this.end_markPoint);
      this.locate('sportFirstRecord');
      this.start_time +=1;
    }
    
    this.addOrbitRecord();
    this.isStartEnabled = false;
    this.isStopEnabled = true;
    console.log("****" + this.selectSportType);

    //判斷sportType, 以設定計時器
    if(this.selectSportType==null){
      this.showNotChose();
    }else if(this.selectSportType===4){
      console.log('走');
      this.get_duration_interval= setInterval(()=> { this.locate('sportRecord') }, 1000*8);
    }else if(this.selectSportType===5){
      console.log('跑');
      this.get_duration_interval= setInterval(()=> { this.locate('sportRecord') }, 1000*5);
    }else if(this.selectSportType===6){
      console.log('騎');
      this.get_duration_interval= setInterval(()=> { this.locate('sportRecord') }, 1000*2);
    }
  }

  endInterval(){
    this.locate('sportEndRecord');
    clearInterval(this.get_duration_interval);
    this.sportRecord.push(this.selectSportType, this.userId, this.record);
    console.log(this.sportRecord);
    console.log(this.record);
    console.log('start time: ' + this.record[0]);
    console.log('end time: ' + this.record[this.record.length-1]);

    this.orbitTransfer();
    this.recordCalculate();
    this.updateOrbitRecord();
    
  }

  locate(event):any{
    console.log(event);
    this.geolocation.getCurrentPosition().then((resp) => {
      if(event == 'forWeather'){
        this.storage.set('latitude', resp.coords.latitude);
        this.storage.set('longitude', resp.coords.longitude);
      }
      if(event == 'sportFirstRecord'){
        this.map.setView([resp.coords.latitude, resp.coords.longitude], 17);
        this.start_markPoint = marker([resp.coords.latitude, resp.coords.longitude], {icon: this.myIcon})
        .addTo(this.map).bindPopup('<p>從這開始!</p>').openPopup();
      }
      if(event == 'sportRecord'){
        this.record.push([new Date(), resp.coords.latitude, resp.coords.longitude]);
        console.log(this.record);
      }
      if(event == 'sportEndRecord'){
        this.map.setView([resp.coords.latitude, resp.coords.longitude], 17);
        this.end_markPoint = marker([resp.coords.latitude, resp.coords.longitude], {icon: this.myIcon})
        .addTo(this.map).bindPopup('<p>到這結束!</p>').openPopup();
      }
    }).catch((error) => {
      console.log('Error getting location', error);
      this.showAlertNoGeo();
    });
  }

  //////////////////////////新增orbit_record
  addOrbitRecord(){
    // 傳給主機的參數
    console.log("addOrbitRecord: " + this.userId, this.selectSportType, Date());
    console.log(this.orbitRecordNo);
    this.http.post("http://140.131.115.88:80/mobile_orbitrecord_add", {"orbitRecordNo": this.orbitRecordNo, "userId":  this.userId, "sportType": this.selectSportType, "sportStartTime": new Date()})
    .subscribe(data  => {
      console.log("Add Orbit Record successful :", data);
      if(data == "0"){
        this.showOrbitNo();
      }else{
        this.showNotConfirm();
        clearInterval(this.get_duration_interval);
        this.isStartEnabled = true;
        this.isStopEnabled = false;
      }
    },
    error  => {
      console.log("Error", error);
      this.isStartEnabled = true;
      this.isStopEnabled = false;
      }
    );
  }

  //////////////////////////新增orbit
  orbitTransfer(){
    for(var i=0; i<=this.record.length-1; i++){
      console.log("orbit: " + this.orbitRecordNo + " " + this.record[i][0], this.record[i][1], this.record[i][2]);
      this.http.post("http://140.131.115.88:80/mobile_orbit_add", 
        {"orbitRecordNo":  this.orbitRecordNo, "orbitDatetime": this.record[i][0], "lat": this.record[i][1], "lng": this.record[i][2]})
      .subscribe(data  => {
        console.log("Add orbit successful :", data);
      },
      error  => {
        console.log("Error", error);
        }
      );
    }
  }

  //////////////////////////計算距離
  sportDistance: number =0;
  recordCalculate(){
    for(var x=1; x<this.record.length; x++){
      this.sportDistance += this.distance(this.record[x][1], this.record[x][2], this.record[x-1][1], this.record[x-1][2]);
      console.log(this.sportDistance);
    }
    this.sportRecord.push(this.sportDistance);
  }
  
  distance(lat1, lon1, lat2, lon2) {
    var miles=0;
    var theta = lon1 - lon2;
    var dist = Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2))
                + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2))
                * Math.cos(this.deg2rad(theta));
    dist = Math.acos(dist);
    dist = this.rad2deg(dist);
    var miles = dist * 60 * 1.1515;
    return miles*1.609344;
    //英里轉成公里
  }
  //將角度轉換為弧度
  deg2rad(degree) {
    return degree / 180 * Math.PI;
  }
  //將弧度轉換為角度
  rad2deg(radian) {
    return radian * 180 / Math.PI;
  }
  //////////////////////////////////

  avgMinKm: any;
  updateOrbitRecord(){
    console.log(this.sportDistance);
    var totalMin = (((this.record[this.record.length-1][0]).getTime() - (this.record[0][0]).getTime())/1000/60);
    console.log(totalMin);
    if(totalMin == 0){
      this.avgMinKm = 0;
      console.log('1')
    }else{
      console.log('2')
      this.avgMinKm = totalMin/this.sportDistance;
    }

    // 傳給主機的參數
    this.http.post("http://140.131.115.88:80/mobile_update", 
    {"orbitRecordNo":  this.orbitRecordNo, 
     "sportEndTime": this.record[this.record.length-1][0], 
     "sportDistance": this.sportDistance, "avgMinKm": this.avgMinKm})
    .subscribe(data  => {
      console.log("Update Orbit Record successful :", data);
      if(data == 0){
        this.showConfirm();
        this.isStartEnabled = true;
        this.isStopEnabled = false;
      }else{
        this.showNotChose();
        this.isStartEnabled = false;
      }
    },
    error  => {
      console.log("Error", error);
      this.isStartEnabled = false;
      }
    );
    
  }


  //----------------------------------
  // 顯示成功訊息
  //----------------------------------
  async showConfirm(){
    let alert = await this.alertController.create({
      header: '新增成功!',
      subHeader: '快去紀錄區查看你的運動紀錄吧!',
      buttons: ['OK']
    });
    await alert.present();
  }

  //----------------------------------
  // 顯示讀取失敗訊息
  //----------------------------------
  async showAlert(){
    const  alert = await this.alertController.create({
      header: '資料取得失敗!',
      subHeader: '請查看網路連線是否正常，或程式正在檢修中.',
      buttons: ['OK']
    });
    await alert.present();
  }

  //----------------------------------
  // 顯示讀取失敗訊息
  //----------------------------------
  async showAlertNoGeo(){
    const  alert = await this.alertController.create({
      header: '位置取得失敗!',
      subHeader: '請確認同意存取您的目前位置',
      buttons: ['OK']
    });
    await alert.present();
  }

  //----------------------------------
  // 顯示無符合資料訊息
  //----------------------------------
  async showNotConfirm() {
    const  alert = await this.alertController.create({
      header: '新增失敗!',
      subHeader: '請重新確認帳號密碼',
      buttons: ['OK']
    });
    await alert.present();
  }
  //----------------------------------    

  //----------------------------------
  // 顯示新增成功訊息
  //----------------------------------
  async showOrbitNo(){
    let alert = await this.alertController.create({
      header: '開始記錄囉!',
      subHeader: '趕緊出發吧!',
      buttons: ['OK']
    });
    await alert.present();
  }
  //----------------------------------
  // 顯示新增失敗訊息
  //----------------------------------
  async showNotChose() {
    const  alert = await this.alertController.create({
      header: '新增失敗!',
      subHeader: '請選擇運動項目',
      buttons: ['OK']
    });
    await alert.present();
  }
  //----------------------------------    

  
  //////////////////////////MAP
  leafletMap() {
    this.map = new Map('mapId').setView([23.583234, 120.5825975], 5.5);
    
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
      foo: 'bar'
    }).addTo(this.map);

  }

  ionViewWillLeave() {
    this.map.remove();
  }
}
