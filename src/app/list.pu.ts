import{Injectable} from "@angular/core";
import{ AngularFireDatabase} from 'angularfire2/database';
import{Event} from "./list.model";



@Injectable()
export class Suggz{
    
    
    private evenement = this.db.list<Event>('publique');
    
    constructor(private db: AngularFireDatabase){

    }

    addEvent(evenements:Event){
     return this.evenement.push(evenements);

    

    }

    getAllEvent(){

     
       return this.evenement;
    
     
   }


    }