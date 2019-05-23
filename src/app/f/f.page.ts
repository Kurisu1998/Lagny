import { Component } from '@angular/core';
import { Suggc } from "../list.servic";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-f',
  templateUrl: './f.page.html',
  styleUrls: ['./f.page.scss'],
})
export class FPage {

     event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Suggc,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }
}
