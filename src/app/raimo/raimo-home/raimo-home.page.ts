import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { UsuarioLogado } from 'src/app/model/usuario';
@Component({
  selector: 'app-raimo-home',
  templateUrl: './raimo-home.page.html',
  styleUrls: ['./raimo-home.page.scss'],
})
export class RaimoHomePage implements OnInit {
  //variavel que armazena o nome do usuario
  nome: string = 'Gabriel Barbosa';
  //variavel que armazena o caminho da imagem
  imagem: string = 'assets/usuarios/GABIGOL.JPG';

  //escopo global. de classe
  total: number = 0;
  incremento: string = '0';

  dataNasc: Date = new Date(1980, 10, 23);

  usuario: UsuarioLogado = new UsuarioLogado(null, null);

  constructor(private router: Router,
    private util: UtilsService) {
  }


  ngOnInit() {
    this.toast('SEJA BEM VINDO A PÁGINA RUBRO NEGRA');
  }


  //parametros num1, num2
  //escopo local, de função
  somar(num1: number, num2: number): number {
    let totalF: number;
    totalF = num1 + num2;
    return totalF;
  }
  paginaRodrigo() {
    console.log('ir para a pagina do rodrigo');
    this.router.navigateByUrl('rodrigohome');
  }

  paginaMarcelo() {

    console.log('Ir para a página do Marcelo');
    this.router.navigateByUrl('marcelo-home');
  }
  paginaVictor() {
    console.log('Ira para a página do Victor');
    this.router.navigateByUrl('victor-home');
  }
  paginaRobson() {
    console.log('Ir para página do Robson');
    this.router.navigateByUrl('robson-home');
  }
  /*
  comentarios
  de muitas linhas  
  */

  alerta() {
    this.util.showAlert('SOU CAMPEÃO MUNDIAL', 'SOU FLAMENGO ');
  }

  toast(mensagem: string, duracao?: number) {
    this.util.showToast(mensagem, duracao);
  }


}
