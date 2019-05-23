import { Component } from '@angular/core';
import{ AngularFireList} from 'angularfire2/database';
import{ AngularFireDatabase} from 'angularfire2/database';
import { NavController, ModalController } from '@ionic/angular';
import { Suggi } from "../list.seriveo";
import { Event } from "../list.model";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Pipe, PipeTransform } from '@angular/core';
import{ Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-brocantes',
  templateUrl: './brocantes.page.html',
  styleUrls: ['./brocantes.page.scss'],
})
export class BrocantesPage {

 evenement: Observable<any[]>;
  
  
  constructor(
    public navCtrl: NavController,
    public sugg: Suggi,
    private db: AngularFireDatabase,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController
    
  ) {
    this.evenement = db.list('brocante').valueChanges();
    this.initializeApp();
  }

initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
onNewEvent(){
  this.navCtrl.navigateRoot('/vide-theatre');
}
onDetailPlace(){
  this.navCtrl.navigateRoot('/detail-place');

}

}
