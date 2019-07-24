import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-raimo-home',
  templateUrl: './raimo-home.page.html',
  styleUrls: ['./raimo-home.page.scss'],
})
export class RaimoHomePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {    
    //ler o valor passado na url. ex raimo-home/flamengo
    //o valor do meuTime será 'flamengo'
    const meuTime = this.activatedRoute.snapshot.paramMap.get('time');    
    console.log('Meu time é: ', meuTime);
  }

}
