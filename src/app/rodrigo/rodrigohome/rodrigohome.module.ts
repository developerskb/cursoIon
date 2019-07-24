import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RodrigohomePage } from './rodrigohome.page';

const routes: Routes = [
  {
    path: '',
    component: RodrigohomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RodrigohomePage]
})
export class RodrigohomePageModule {}
