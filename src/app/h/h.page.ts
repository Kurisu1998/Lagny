import { Component } from '@angular/core';
import { Suggee } from "../list.serv";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-h',
  templateUrl: './h.page.html',
  styleUrls: ['./h.page.scss'],
})
export class HPage  {

 
      event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Suggee,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }

}
