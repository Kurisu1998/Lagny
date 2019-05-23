import { Component } from '@angular/core';
import { Suggb } from "../list.servici";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-e',
  templateUrl: './e.page.html',
  styleUrls: ['./e.page.scss'],
})
export class EPage {

      event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Suggb,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }

}
