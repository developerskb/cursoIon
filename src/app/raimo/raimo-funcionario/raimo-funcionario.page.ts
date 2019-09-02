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
    private routerService: Router){ }
    
    ngOnInit() {
      this.estados = this.funcoes.listarEstados();
      this.raimoCpf = [{ nome: 'Robson', cpf: '25604669881' }, { nome: 'Adriano', cpf: '26235378791' },
      { nome: 'Pereira', cpf: '1234567890' }, { nome: 'Brito', cpf: null }];


      //usario raimo
      console.log(this.funcoes.eImpar(99));
      console.log(this.estados);
      console.log(this.raimoCpf[1].nome.length);


    }

}
