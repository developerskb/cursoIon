import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rodrigohome',
  templateUrl: './rodrigohome.page.html',
  styleUrls: ['./rodrigohome.page.scss'],
})
export class RodrigohomePage implements OnInit {

  //escopo global. de classe
  total: number = 0;
  incremento: string = '0';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }  

  somarClick(): void {
    this.total = this.total + this.somar(10, parseInt(this.incremento));
  }

  //parametros num1, num2
  //escopo local, de função
  somar(num1: number, num2: number): number {
    let totalF: number;
    totalF = num1 + num2;
    return totalF;
  }

  paginaMarcelo() {
    this.total = 0;

    console.log('Ir para a página do Marcelo');
    this.router.navigateByUrl('marcelo-home');
  }  

  paginaRaimo(){
    console.log('Ira para a página do Raimo');
    this.router.navigateByUrl('raimo-home');
  }
  paginaVictor(){
    console.log('Ira para a página do Victor');
    this.router.navigateByUrl('victor-home');
  }
  paginaRobson(){
    console.log('Ir para página do Robson');
    this.router.navigateByUrl('robsonHome');
  }
}
