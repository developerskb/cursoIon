import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPipe } from './titulo.pipe';

@NgModule({
  declarations: [
    TituloPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TituloPipe
  ]
})
export class PipesModule { }
