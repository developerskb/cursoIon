import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rodrigohome',
  templateUrl: './rodrigohome.page.html',
  styleUrls: ['./rodrigohome.page.scss'],
})
export class RodrigohomePage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  paginaMarcelo() {
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
