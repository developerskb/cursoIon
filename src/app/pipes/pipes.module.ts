import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPipe } from './titulo.pipe';
import { CpfRobsonPipe } from './cpf-robson.pipe';

@NgModule({
  declarations: [
    TituloPipe,
    CpfRobsonPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TituloPipe,
    CpfRobsonPipe
  ]
})
export class PipesModule { }
