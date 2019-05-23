import { Component } from '@angular/core';
import { Suggi } from "../list.seriveo";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vide-theatre',
  templateUrl: './vide-theatre.page.html',
  styleUrls: ['./vide-theatre.page.scss'],
})
export class VideTheatrePage  {

   event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Suggi,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }
}
