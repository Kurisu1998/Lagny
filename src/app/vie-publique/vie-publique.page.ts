import { Component } from '@angular/core';
import{ AngularFireList} from 'angularfire2/database';
import{ AngularFireDatabase} from 'angularfire2/database';
import { NavController, ModalController } from '@ionic/angular';
import { Suggz } from "../list.pu";
import { Event } from "../list.model";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Pipe, PipeTransform } from '@angular/core';
import{ Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vie-publique',
  templateUrl: './vie-publique.page.html',
  styleUrls: ['./vie-publique.page.scss'],
})
export class ViePubliquePage  {

 
       evenement: Observable<any[]>;
  
  
  constructor(
    public navCtrl: NavController,
    public sugg: Suggz,
    private db: AngularFireDatabase,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController
    
  ) {
    this.evenement = db.list('publique').valueChanges();
    this.initializeApp();
  }

initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
onNewEvent(){
  this.navCtrl.navigateRoot('/l');
}
onDetailPlace(){
  this.navCtrl.navigateRoot('/detail-place');

}
}


