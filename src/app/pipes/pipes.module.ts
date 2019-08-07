import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPipe } from './titulo.pipe';
import { CpfRobsonPipe } from './cpf-robson.pipe';
import { CpfMarceloPipe } from './cpf-marcelo.pipe';
import { CpfRaimoPipe } from './cpf-raimo.pipe';
import { CpfRodrigoPipe } from './cpf-rodrigo.pipe';

@NgModule({
  declarations: [
    TituloPipe,
    CpfRobsonPipe,
    CpfMarceloPipe,
    CpfRaimoPipe,
    CpfRodrigoPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TituloPipe,
    CpfRobsonPipe,
    CpfMarceloPipe,
    CpfRodrigoPipe,
    CpfRaimoPipe,
  ]
})
export class PipesModule { }
