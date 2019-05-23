import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideGrenierPage } from './vide-grenier.page';

const routes: Routes = [
  {
    path: '',
    component: VideGrenierPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideGrenierPage]
})
export class VideGrenierPageModule {}
