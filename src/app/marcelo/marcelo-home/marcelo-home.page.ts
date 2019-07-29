import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogadoPagMarcelo } from 'src/app/model/usuario-pagina-marcelo';
import { UsuarioSuperLogado } from 'src/app/model/usuario';

@Component({
  selector: 'app-marcelo-home',
  templateUrl: './marcelo-home.page.html',
  styleUrls: ['./marcelo-home.page.scss'],
})
export class MarceloHomePage implements OnInit {
  // Declaração dos atributos para a classe MarceloHomePage
  usuarioLogado1 : UsuarioLogadoPagMarcelo;
  usuarios : UsuarioLogadoPagMarcelo[] = [];
  // Construtor 
  constructor(private router: Router) {
  }
  //ngOnInit corresponde +- ao onShow ... 
  ngOnInit() {
    this.usuarioLogado1 = new UsuarioLogadoPagMarcelo((new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),'R13');
    this.usuarioLogado1.id = 1;
    this.usuarioLogado1.email = 'marcelo@keybest.com.br'
    this.usuarioLogado1.nome = 'Marcelo de Oliveira'

    let usuarioLogado2 = new UsuarioLogadoPagMarcelo(null,"R19");
    usuarioLogado2.id = 2;
    usuarioLogado2.email = "raimo@keybest.com.br";
    usuarioLogado2.nome = "Raimo Lima"

    let usuarioLogado3 = new UsuarioLogadoPagMarcelo(null,"R20");
    usuarioLogado3.id = 3;
    usuarioLogado3.email = "robson@keybest.com.br";
    usuarioLogado3.nome = "Robson Brito"

    let usuarioLogado4 = new UsuarioLogadoPagMarcelo(null,"R18");
    usuarioLogado4.id = 4;
    usuarioLogado4.email = "hrodrigo@keybest.com.br";
    usuarioLogado4.nome = "Rodrigo Regaz"

    let usuarioLogado5 = new UsuarioLogadoPagMarcelo(null,"R15");
    usuarioLogado5.id = 5;
    usuarioLogado5.email = "victor@keybest.com.br";
    usuarioLogado5.nome = "Victor Hugo"

    this.usuarios.push(this.usuarioLogado1);
    this.usuarios.push(usuarioLogado2);
    this.usuarios.push(usuarioLogado3);
    this.usuarios.push(usuarioLogado4);
    this.usuarios.push(usuarioLogado5);

  }

  paginaRodrigo() {
    console.log('Ir para a página do Rodrigo');
    this.router.navigateByUrl('rodrigohome');
  }  
  paginaRaimo(){
    console.log('Ira para a página do Raimo');
    this.router.navigateByUrl('raimo-home');
  }
  verificaUsuario(){
    console.log( "Usuário: " + this.usuarioLogado1.token + " - "+  this.usuarioLogado1.nome);
    console.log( "E-mail: " + this.usuarioLogado1.email);
    if (this.usuarioLogado1.horaLogin != null) {
      console.log( "Login: " + this.usuarioLogado1.horaLogin);
    }
    else {
      console.log( "Login: Usuário Deslogado ");
    }
  }

  logoffUsuario(_idUsuario: number) {
    this.usuarios[_idUsuario-1].horaLogin = null;
    console.log( "Saindo: " + this.usuarios[_idUsuario-1].token);
  }

  loginUsuario(_idUsuario: number) {
    this.usuarios[_idUsuario-1].horaLogin = (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds();
    console.log( "Entrando: " + this.usuarios[_idUsuario-1].token);
  }

  logoffTodos() {
    for (var _i = 0; _i < this.usuarios.length; _i++) {
      this.usuarios[_i].horaLogin = null;
    };
      
    
  }
}