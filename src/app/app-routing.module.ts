import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'propos', loadChildren: './propos/propos.module#ProposPageModule' },
  { path: 'newevent', loadChildren: './newevent/newevent.module#NeweventPageModule' },
  { path: 'detail-place', loadChildren: './detail-place/detail-place.module#DetailPlacePageModule' },
  { path: 'cinema', loadChildren: './cinema/cinema.module#CinemaPageModule' },
  { path: 'culture', loadChildren: './culture/culture.module#CulturePageModule' },
  { path: 'vie-publique', loadChildren: './vie-publique/vie-publique.module#ViePubliquePageModule' },
  { path: 'brocantes', loadChildren: './brocantes/brocantes.module#BrocantesPageModule' },
  { path: 'commerces', loadChildren: './commerces/commerces.module#CommercesPageModule' },
  { path: 'concerts', loadChildren: './concerts/concerts.module#ConcertsPageModule' },
  { path: 'expositions', loadChildren: './expositions/expositions.module#ExpositionsPageModule' },
  { path: 'jeunesse', loadChildren: './jeunesse/jeunesse.module#JeunessePageModule' },
  { path: 'vide-grenier', loadChildren: './vide-grenier/vide-grenier.module#VideGrenierPageModule' },
   { path: 'vide-theatre', loadChildren: './vide-theatre/vide-theatre.module#VideTheatrePageModule' },
  { path: 'theatre', loadChildren: './theatre/theatre.module#TheatrePageModule' },
  { path: 'sports', loadChildren: './sports/sports.module#SportsPageModule' },
  { path: 'solidarites', loadChildren: './solidarites/solidarites.module#SolidaritesPageModule' },
  { path: 'running', loadChildren: './running/running.module#RunningPageModule' },
  { path: 'a', loadChildren: './a/a.module#APageModule' },
  { path: 'b', loadChildren: './b/b.module#BPageModule' },
  { path: 'c', loadChildren: './c/c.module#CPageModule' },
  { path: 'd', loadChildren: './d/d.module#DPageModule' },
  { path: 'e', loadChildren: './e/e.module#EPageModule' },
  { path: 'f', loadChildren: './f/f.module#FPageModule' },
  { path: 'g', loadChildren: './g/g.module#GPageModule' },
  { path: 'h', loadChildren: './h/h.module#HPageModule' },
  { path: 'i', loadChildren: './i/i.module#IPageModule' },
  { path: 'j', loadChildren: './j/j.module#JPageModule' },
  { path: 'k', loadChildren: './k/k.module#KPageModule' },
  { path: 'l', loadChildren: './l/l.module#LPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
