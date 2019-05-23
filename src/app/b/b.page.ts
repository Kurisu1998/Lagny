import { Component} from '@angular/core';
import { Sugge } from "../list.servicie";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-b',
  templateUrl: './b.page.html',
  styleUrls: ['./b.page.scss'],
})
export class BPage  {

    event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Sugge,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }

}
