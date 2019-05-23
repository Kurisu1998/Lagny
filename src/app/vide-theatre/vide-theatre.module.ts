import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideTheatrePage } from './vide-theatre.page';

const routes: Routes = [
  {
    path: '',
    component: VideTheatrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideTheatrePage]
})
export class VideTheatrePageModule {}
