import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcelo-home',
  templateUrl: './marcelo-home.page.html',
  styleUrls: ['./marcelo-home.page.scss'],
})
export class MarceloHomePage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  paginaRodrigo() {
    console.log('Ir para a página do Rodrigo');
    this.router.navigateByUrl('rodrigohome');
  }  
  paginaRaimo(){
    console.log('Ira para a página do Raimo');
    this.router.navigateByUrl('raimo-home');
  }
}
  