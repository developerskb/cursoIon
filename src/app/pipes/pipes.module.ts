import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPipe } from './titulo.pipe';
import { CpfRobsonPipe } from './cpf-robson.pipe';
import { CpfMarceloPipe } from './cpf-marcelo.pipe';

@NgModule({
  declarations: [
    TituloPipe,
    CpfRobsonPipe,
    CpfMarceloPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TituloPipe,
    CpfRobsonPipe,
    CpfMarceloPipe
  ]
})
export class PipesModule { }
