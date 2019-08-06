import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPipe } from './titulo.pipe';
import { CpfRobsonPipe } from './cpf-robson.pipe';
import { CpfRaimoPipe } from './cpf-raimo.pipe';

@NgModule({
  declarations: [
    TituloPipe,
    CpfRobsonPipe,
    CpfRaimoPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TituloPipe,
    CpfRobsonPipe
  ]
})
export class PipesModule { }
