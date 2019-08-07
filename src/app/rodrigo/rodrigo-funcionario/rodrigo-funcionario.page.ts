import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodrigo-funcionario',
  templateUrl: './rodrigo-funcionario.page.html',
  styleUrls: ['./rodrigo-funcionario.page.scss'],
})
export class RodrigoFuncionarioPage implements OnInit {
  cpfsro: any[];
  constructor() { }

  ngOnInit() {
  this.cpfsro = [{nome: "Rodrigo", cpf: "40037187805"}, {nome: "Robson", cpf: "25604669881"}];
  }

}
