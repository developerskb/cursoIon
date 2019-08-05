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

  constructor(private funcoes: UtilsService,
    private routerService: Router) { }

  //https://ionicframework.com/docs/angular/lifecycle
  ngOnInit() {
    this.cidades = [{ id: 11, cidade: 'sp'}, { id: 21, cidade: 'rg'}];
    //meu usuario
    console.log(this.funcoes.eImpar(99));
  }

  ionViewWillEnter() {
    console.log('will enter');

  }

  //formato de declaracao camelCase
  robsonAlerta() {
    
  }

  Robson_Alerta() {
    this.funcoes.showAlert('Alerta total!!!', 'Perigo');
  }

  Robson_Toast(_mensagem: string, _segundos?: number) {
    this.funcoes.showToast(_mensagem, _segundos ? _segundos * 1000 : 5000);
  }
}
