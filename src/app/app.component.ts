import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: "Page d'accueil",
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Animations',
      url: '/list',
      icon: 'flame'
    },{
      title: 'Cinéma',
      url: '/cinema',
      icon: 'film'
    },
    {
      title: 'Culture',
      url: '/culture',
      icon: 'bookmarks'
    },
    {
      title: 'Vie publique',
      url: '/vie-publique',
      icon: 'body'
    },
    {
      title: 'Brocantes',
      url: '/brocantes',
      icon: 'bug'
    },
    {
      title: 'Commerces',
      url: '/commerces',
      icon: 'pricetags'
    },
    {
      title: 'Concerts',
      url: '/concerts',
      icon: 'musical-notes'
    },
    {
      title: 'Expositions',
      url: '/expositions',
      icon: 'easel'
    },
    {
      title: 'Jeunesse',
      url: '/jeunesse',
      icon: 'hand'
    },
    {
      title: 'Running',
      url: '/running',
      icon: 'walk'
    },
    {
      title: 'Solidarités',
      url: '/solidarites',
      icon: 'thumbs-up'
    },
    {
      title: 'Sports',
      url: '/sports',
      icon: 'american-football'
    },
    {
      title: 'Théâtre',
      url: '/theatre',
      icon: 'star-outline'
    },
    {
      title: 'Vide greniers',
      url: '/vide-grenier',
      icon: 'shirt'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
