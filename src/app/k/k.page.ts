import { Component } from '@angular/core';
import { Suggh } from "../list.vi";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-k',
  templateUrl: './k.page.html',
  styleUrls: ['./k.page.scss'],
})
export class KPage {

   
        event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Suggh,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }

}
