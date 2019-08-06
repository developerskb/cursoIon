import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RaimoFuncionarioPage } from './raimo-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: RaimoFuncionarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RaimoFuncionarioPage]
})
export class RaimoFuncionarioPageModule {}
