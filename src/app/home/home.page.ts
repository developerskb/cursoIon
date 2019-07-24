import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //nome_variavel: tipo;
  pedidos: number = 25;
  constructor(private router: Router) {

  }

  // teste 
  
  addPedido() {
    var tmp = this.pedidos;
    console.log('Valor anterior: ', { tipo: 'Pedido', quantidade: tmp });
    this.pedidos++;
  }

  paginaRodrigo() {
    console.log('ir para a pagina do rodrigo');
    this.router.navigateByUrl('rodrigohome');
  }
}
