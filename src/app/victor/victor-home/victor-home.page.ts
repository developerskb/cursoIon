import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { UsuarioLogado } from 'src/app/model/usuario';

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

  dataNasc: Date = new Date(1980, 10, 23);

  usuario: UsuarioLogado = new UsuarioLogado(null, null);
  
  constructor(private util: UtilsService) { }

  ngOnInit() {
    this.toast('olá');
    this.usuario.nome = 'Roberta';
    this.usuario.sexo = 'F';
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
