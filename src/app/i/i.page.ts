import { Component } from '@angular/core';
import { Suggf } from "../list.ser";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-i',
  templateUrl: './i.page.html',
  styleUrls: ['./i.page.scss'],
})
export class IPage {

        event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Suggf,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }

}
