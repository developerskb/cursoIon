import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pedidos: number = 25;
  constructor() {}

  // teste 
  
  addPedido() {
    var tmp = this.pedidos;
    console.log('Valor anterior: ', { tipo: 'Pedido', quantidade: tmp });
    this.pedidos++;
  }
}
