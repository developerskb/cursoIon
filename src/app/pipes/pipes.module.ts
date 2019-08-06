import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPipe } from './titulo.pipe';
import { CpfRobsonPipe } from './cpf-robson.pipe';
import { CpfRodrigoPipe } from './cpf-rodrigo.pipe';

@NgModule({
  declarations: [
    TituloPipe,
    CpfRobsonPipe,
    CpfRodrigoPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TituloPipe,
    CpfRobsonPipe,
    CpfRodrigoPipe
  ]
})
export class PipesModule { }
