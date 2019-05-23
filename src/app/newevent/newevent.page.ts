import { Component} from '@angular/core';
import { Sugg } from "../list.service";
import { Event } from "../list.model";
import { NavController } from '@ionic/angular';





@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.page.html',
  styleUrls: ['./newevent.page.scss'],
})
export class NeweventPage {
  event: Event = {
    nom:'',
    ville: '',
    adresse: '',
    lng: 0,
    lat: 0,

  }
  constructor(  public navCtrl: NavController,
                public sugg: Sugg,
             ) { }

  onAddEvent(evenements:Event){
    this.sugg.addEvent(evenements).then(ref =>{
     console.log(ref.key);

    });
   
  }

  


}
