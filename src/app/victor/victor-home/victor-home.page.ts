import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-victor-home',
  templateUrl: './victor-home.page.html',
  styleUrls: ['./victor-home.page.scss'],
})
export class VictorHomePage implements OnInit {
  //variavel que armazena o nome do usuario
  nome: string = 'Victor Hugo';
  //variavel que armazena o caminho da imagem
  imagem: string = 'assets/usuarios/victor.png';
  constructor(private util: UtilsService) { }

  ngOnInit() {
    this.toast('olá');
  }

  /*
  comentarios
  de muitas linhas  
  */

  alerta(){
    this.util.showAlert('Alerta!!!', 'Curso App');
  }

  toast(mensagem: string, duracao?: number) {
    this.util.showToast(mensagem, duracao);    
  }
}
