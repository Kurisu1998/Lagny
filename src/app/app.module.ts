import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import{ AngularFireModule} from 'angularfire2';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import{ AngularFireDatabase} from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import{FIREBASE_CONFIG} from './firebase.credentials';

import{Sugg} from "./list.service";
import{Suggi} from "./list.seriveo";
import{Sugga} from "./list.servicia";
import{Sugge} from "./list.servicie";
import{Suggo} from "./list.serviciu";
import{Suggu} from "./list.servicio";
import{Suggb} from "./list.servici";
import{Suggc} from "./list.servic";
import{Suggd} from "./list.servi";
import{Suggee} from "./list.serv";
import{Suggf} from "./list.ser";
import{Suggg} from "./list.se";
import{Suggh} from "./list.vi";
import{Suggz} from "./list.pu";

import { AsyncPipe } from './async.pipe';

import {DetailPlacePageModule} from './detail-place/detail-place.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Geolocation } from '@ionic-native/geolocation';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
 imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
     DetailPlacePageModule,
     

    

    
    

    
  ],
  providers: [
    StatusBar,
    SplashScreen,Sugg,Suggi,Sugga,Sugge,Suggo,Suggu,Suggb,Suggc,Suggd,Suggee,Suggf,Suggg,Suggh,Suggz,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
