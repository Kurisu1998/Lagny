import { Component} from '@angular/core';
import { Suggd } from "../list.servi";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-g',
  templateUrl: './g.page.html',
  styleUrls: ['./g.page.scss'],
})
export class GPage {

      event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Suggd,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }
}
