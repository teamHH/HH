import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
  currentWeather: any;
  todayWeathers: any;
  weekWeathers: any;
  weatherData: any;
  iconPath: string;
  temperature: any;
  apparentTemperature: any;
  humidity: any;
  precipProbability: any;
  windSpeed: any;
  dateTime: any;
  weatherResult = false;
  loading: any;
  lat: any;
  lng: any;
  el: any; el_h3: any; el_h3_2: any; el_p: any;

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private storage: Storage,
    private datePipe: DatePipe, public alertController: AlertController, private appComponent: AppComponent) { }

  doRefresh(event) {
    setTimeout(() => {
      this.loadData();
      event.target.complete();
    }, 2000);
  }

  async ionViewWillEnter() {
    this.appComponent.updateUser();
    this.storage.get('latitude').then((lat) => {
      console.log('Your latitude is', lat);
      this.lat = lat;
    });
    this.storage.get('longitude').then((lng) =>{
      console.log('Your longitude is', lng);
      this.lng = lng;
    })
    this.dateTime = this.datePipe.transform(new Date, 'yyyy/MM/dd hh:mm:ss aaa');
    setTimeout(()=>this.loadData(), 1000);
    this.loading = await this.loadingController.create({
      message: 'Loading...',
    });
    this.loading.present();
  }

  loadData(){
    this.http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1763662487eee873e193c539271298a7/' + this.lat + ',' + this.lng + '?lang=zh-tw')
      .subscribe((weatherData: any) => {
        console.log(weatherData);
        this.el = document.getElementById('content');
        this.weatherResult = true;
        this.weatherData = weatherData;
        this.currentWeather = weatherData.currently;
        this.iconPath = this.summaryIcon(weatherData.currently.icon);
        this.background(weatherData.currently.icon);
        this.temperature = this.tempConvert(weatherData.currently.temperature);
        this.apparentTemperature = this.tempConvert(weatherData.currently.apparentTemperature);
        this.humidity = Math.round(weatherData.currently.humidity*100);
        this.precipProbability = Math.round(weatherData.currently.precipProbability*100);
        this.windSpeed = Math.round(weatherData.currently.windSpeed*1.6);
        this.loading.dismiss();
        this.addTodayWeathers();
        this.addWeekWeathers();
      },
      (err)  => {
        console.log("Error", err);
        this.showAlert();
        this.loading.dismiss();
      }
    );
  }

  summaryIcon(icon){
    if (icon === "wind") {
      return "https://image.ibb.co/dK7R2v/windy.png";
    } else if (icon === "clear-day") {
      return "https://image.ibb.co/k5uCaF/sun_1.png";
    } else if (icon === "cloudy") {
      return "https://image.ibb.co/g4579a/cloudy.png";
    } else if (icon === "clear-night") {
      return "https://image.ibb.co/htT5vF/moon_2.png";
    } else if (icon === "rain") {
      return "https://image.ibb.co/k2p0Ua/rain_4.png";
    } else if (icon === "snow") {
      return "https://image.ibb.co/nEXyFF/snowing.png";
    } else if (icon === "sleet") {
      return "https://image.ibb.co/mid5vF/frozen_rain.png";
    } else if (icon === "fog") {
      return "https://image.ibb.co/eFHLUa/fogg.png";
    } else if (icon === "partly-cloudy-day") {
      return "https://image.ibb.co/iwy5vF/partly_cloudy_day.png";
    } else if (icon === "partly-cloudy-night") {
      return "https://image.ibb.co/dgEpNv/partly_cloudy_night.png";
    }  
  }

  background(icon){
    if (icon === "wind" || icon === "clear-day") {
      this.el.style.setProperty('--background', 'linear-gradient(79deg, #2261a4 20%,#8fb6dd 100%)');
    } else if (icon === "cloudy" || icon === "partly-cloudy-day") {
      this.el.style.setProperty('--background', "url('../../assets/images/cloudy.jpg') 80% 80% no-repeat");
    } else if (icon === "clear-night" || icon === "partly-cloudy-night") {
      this.el.style.setProperty('--background', "url('../../assets/images/clear-night.png')  0/100% 100% no-repeat");
    } else if (icon === "rain") {
      this.el.style.setProperty('--background', "url('../../assets/images/rain.png') 100% 100% no-repeat");
    } else if (icon === "snow" || icon === "sleet") {
      this.el.style.setProperty('--background', "url('../../assets/images/snow.jpg') 100% 100% no-repeat");
    } else if (icon === "fog") {
      this.el.style.setProperty('--background', "url('../../assets/images/fog.jpg') 100% 100% no-repeat");
    }
  }

  tempConvert(temp) {
    return Math.round((temp - 32) * 5/9);
  }

  addTodayWeathers(){
    this.todayWeathers = [];
    for(var i=0; i<10; i++){
      this.todayWeathers.push(this.weatherData.hourly.data[i]);
      this.todayWeathers[i].temperature = this.tempConvert(this.todayWeathers[i].temperature);
      this.todayWeathers[i].iconPath = this.summaryIcon(this.todayWeathers[i].icon);
      this.todayWeathers[i].dateTime = this.datePipe.transform(new Date(this.todayWeathers[i].time *1000), 'hh:mm');
    }
  }

  addWeekWeathers(){
    this.weekWeathers = [];
    for(var i=0; i<this.weatherData.daily.data.length; i++){
      this.weekWeathers.push(this.weatherData.daily.data[i]);
      this.weekWeathers[i].temperatureHigh = this.tempConvert(this.weekWeathers[i].temperatureHigh);
      this.weekWeathers[i].temperatureLow = this.tempConvert(this.weekWeathers[i].temperatureLow);
      this.weekWeathers[i].iconPath = this.summaryIcon(this.weekWeathers[i].icon);
      this.weekWeathers[i].dateTime = this.datePipe.transform(new Date(this.weekWeathers[i].time *1000), 'EEE');
    
    }
  }

  //----------------------------------
  // 顯示讀取失敗訊息
  //----------------------------------
  async showAlert(){
    const alert = await this.alertController.create({
      header: '資料取得失敗!',
      subHeader: '請確定網路狀態, 或是主機是否提供服務中.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
