import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPipe } from './titulo.pipe';
import { CpfRobsonPipe } from './cpf-robson.pipe';
import { CpfRaimoPipe } from './cpf-raimo.pipe';
import { CpfRodrigoPipe } from './cpf-rodrigo.pipe';
import { CpfMarceloPipe } from './pipesMarcelo/cpf-marcelo.pipe';
import { TelefoneMarceloPipe } from './pipesMarcelo/telefone-marcelo.pipe';

@NgModule({
  declarations: [
    TituloPipe,
    CpfRobsonPipe,
    CpfRaimoPipe,
    CpfRodrigoPipe,
    CpfMarceloPipe,
    TelefoneMarceloPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TituloPipe,
    CpfRobsonPipe,
    CpfRodrigoPipe,
    CpfRaimoPipe,
    CpfMarceloPipe,
    TelefoneMarceloPipe]
})
export class PipesModule { }
