import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import { UtilsService } from 'src/app/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raimo-funcionario',
  templateUrl: './raimo-funcionario.page.html',
  styleUrls: ['./raimo-funcionario.page.scss'],
})
export class RaimoFuncionarioPage implements OnInit {
  estados: Estado[];
  router: any[];
  raimoCpf: any[]
  usuariosRaimo: any[];




  constructor(private funcoes: UtilsService,
    private routerService: Router) { }

  ngOnInit() {
    this.estados = this.funcoes.listarEstados();
    this.raimoCpf = [{ nome: 'Raimo', cpf: '07980984145' }, { nome: 'Eduardo', cpf: '44101906874' }, {nome:'Victor', cpf: null}];


    //usario raimo
    console.log(this.funcoes.eImpar(99));
    console.log(this.estados);
    console.log(this.raimoCpf[1].nome.length);


  }

}
