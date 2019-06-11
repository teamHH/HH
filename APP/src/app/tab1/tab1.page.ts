import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //---------------------------------------------------
  // 成員  
  //---------------------------------------------------
  @ViewChild('mapContainer') mapContainer: ElementRef;
  map: any;

  center:any={
    'lat':25.042375,
    'lng':121.525383,
    'name':'北商大'
  };  


  //--------------------------------------------------- 
  // 建構元
  //---------------------------------------------------  
  constructor() {}
  
  
  //---------------------------------------------------  
  // 畫面完成後執行
  //---------------------------------------------------  
  ionViewWillEnter() {
    this.displayGoogleMap();
    this.addMarkersToMap();
  }


  //--------------------------------------------------- 
  displayGoogleMap() {
    let latLng = new google.maps.LatLng(this.center.lat, this.center.lng);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }


  //--------------------------------------------------- 
  // 顯示Google地圖
  //--------------------------------------------------- 
  addMarkersToMap() {
    var position = new google.maps.LatLng(this.center.lat, this.center.lng);
    var myMarker = new google.maps.Marker({position:position, title:this.center.name});
    
    myMarker.setMap(this.map);    
  }

  doTap(){
     
  }
}