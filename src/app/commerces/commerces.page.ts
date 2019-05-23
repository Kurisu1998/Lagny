import { Component } from '@angular/core';
import{ AngularFireList} from 'angularfire2/database';
import{ AngularFireDatabase} from 'angularfire2/database';
import { NavController, ModalController } from '@ionic/angular';
import { Sugge } from "../list.servicie";
import { Event } from "../list.model";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Pipe, PipeTransform } from '@angular/core';
import{ Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-commerces',
  templateUrl: './commerces.page.html',
  styleUrls: ['./commerces.page.scss'],
})
export class CommercesPage {

   evenement: Observable<any[]>;
  
  
  constructor(
    public navCtrl: NavController,
    public sugg: Sugge,
    private db: AngularFireDatabase,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController
    
  ) {
    this.evenement = db.list('commerce').valueChanges();
    this.initializeApp();
  }

initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
onNewEvent(){
  this.navCtrl.navigateRoot('/b');
}
onDetailPlace(){
  this.navCtrl.navigateRoot('/detail-place');

}

}
