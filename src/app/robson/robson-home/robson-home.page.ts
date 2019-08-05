import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robson-home',
  templateUrl: './robson-home.page.html',
  styleUrls: ['./robson-home.page.scss'],
})
export class RobsonHomePage implements OnInit {
  router: any;
  cidades: any[];
  usuariosCpfs: any[];



  constructor(private funcoes: UtilsService,
    private routerService: Router) { }

  //https://ionicframework.com/docs/angular/lifecycle
  ngOnInit() {

    this.cidades = [{ id: 11, cidade: 'sp' }, { id: 21, cidade: 'rg' }];
    this.usuariosCpfs = [{ nome: 'Robson', cpf: '25604669881'},{nome:'Adriano', cpf: '26235378791'}];
    //meu usuario
    console.log(this.funcoes.eImpar(99));
    console.log(this.usuariosCpfs[1].nome.length);
    console.log('teste');
  }

  ionViewWillEnter() {
    console.log('will enter');

  }

  robsonAlerta() {
    this.funcoes.showAlert('Alerta total!!!', 'Perigo');
  }

  RobsonToast(_mensagem: string, _segundos?: number) {
    this.funcoes.showToast(_mensagem, _segundos ? _segundos * 1000 : 5000);
  }

}
