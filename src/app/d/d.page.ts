import { Component } from '@angular/core';
import { Suggu } from "../list.servicio";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-d',
  templateUrl: './d.page.html',
  styleUrls: ['./d.page.scss'],
})
export class DPage  {

    event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Suggu,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }

}
