import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';

import{ AngularFireList} from '@angular/fire/database';
import{ AngularFireDatabase} from '@angular/fire/database';
import { Sugg } from "../list.service";
import { Event } from "../list.model";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Pipe, PipeTransform } from '@angular/core';
import{ Observable } from 'rxjs/Observable';


declare var google: any;
@Component({
  selector: 'app-detail-place',
  templateUrl: './detail-place.page.html',
  styleUrls: ['./detail-place.page.scss'],
})
export class DetailPlacePage {
	map: any;

  constructor(
  	public navCtrl: NavController,
    public sugg: Sugg,
    private db: AngularFireDatabase,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
 
    ) {

     }

  

 
initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


   
   loadMap(lat, lng){
     let latLng = new google.map.latLng(lat, lng);

     let mapOption = {
       center: latLng,
       zoom: 14,
       mapTypeId: google.maps.mapTypeId.ROADMAP,
       disableDefaultUI: true
     }

     let element = document.getElementById('map');

     this.map = new google.maps.Map(element, mapOption);
   }

}
