import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogadoPagMarcelo } from 'src/app/model/usuario-pagina-marcelo';
import { UsuarioSuperLogado } from 'src/app/model/usuario';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-marcelo-home',
  templateUrl: './marcelo-home.page.html',
  styleUrls: ['./marcelo-home.page.scss'],
})
export class MarceloHomePage implements OnInit {
  // Declaração dos atributos para a classe MarceloHomePage
  usuarioLogado1 : UsuarioLogadoPagMarcelo;
  usuarios : UsuarioLogadoPagMarcelo[] = [];
  imagem1 : string = 'assets/usuarios/Celo1_3x4.jpg';
  imagem2 : string = 'assets/usuarios/Celo2_3x4.jpg';
  imagem3 : string = 'assets/usuarios/Celo3_3x4.jpg';
  imagem4 : string = 'assets/usuarios/Celo4_3x4.jpg';
  // Construtor 
  constructor(
    private router: Router, 
    private util: UtilsService) {
  }
  //ngOnInit corresponde +- ao onShow ... 
  ngOnInit() {
    this.usuarioLogado1 = new UsuarioLogadoPagMarcelo((new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),'R13');
    this.usuarioLogado1.id = 1;
    this.usuarioLogado1.email = 'marcelo@keybest.com.br';
    this.usuarioLogado1.nome = 'Marcelo de Oliveira';
    this.usuarioLogado1.foto = this.imagem1;

    let usuarioLogado2 = new UsuarioLogadoPagMarcelo(null,"R19");
    usuarioLogado2.id = 2;
    usuarioLogado2.email = "raimo@keybest.com.br";
    usuarioLogado2.nome = "Raimo Lima";
    usuarioLogado2.foto = 'assets/usuarios/GABIGOL.JPG';

    let usuarioLogado3 = new UsuarioLogadoPagMarcelo(null,"R20");
    usuarioLogado3.id = 3;
    usuarioLogado3.email = "robson@keybest.com.br";
    usuarioLogado3.nome = "Robson Brito";
    usuarioLogado3.foto = 'assets/usuarios/robson.jpg';

    let usuarioLogado4 = new UsuarioLogadoPagMarcelo(null,"R18");
    usuarioLogado4.id = 4;
    usuarioLogado4.email = "hrodrigo@keybest.com.br";
    usuarioLogado4.nome = "Rodrigo Regaz";
    usuarioLogado4.foto = 'assets/bola.jpg';


    let usuarioLogado5 = new UsuarioLogadoPagMarcelo(null,"R15");
    usuarioLogado5.id = 5;
    usuarioLogado5.email = "victor@keybest.com.br";
    usuarioLogado5.nome = "Victor Hugo";
    usuarioLogado5.foto = 'assets/usuarios/victor.png';

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
    this.util.showToast('O resultado foi enviado ao log. Verifique o Console do Navegador. (Toast de 10 segundos)',10000);
  }

  logoffUsuario(_idUsuario: number) {
    this.usuarios[_idUsuario-1].horaLogin = null;
    console.log( "Saindo: " + this.usuarios[_idUsuario-1].token);
    this.util.showToast('Usuario Deslogado: ' + this.usuarios[_idUsuario-1].nome + ' - ' + this.usuarios[_idUsuario-1].email);
  }

  loginUsuario(_idUsuario: number) {
    this.usuarios[_idUsuario-1].horaLogin = (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds();
    console.log( "Entrando: " + this.usuarios[_idUsuario-1].token);
    this.util.showToast('Login: ' + this.usuarios[_idUsuario-1].nome + ' - ' + this.usuarios[_idUsuario-1].email);
  }

  logoffTodos() {
    for (var _i = 0; _i < this.usuarios.length; _i++) {
      this.usuarios[_i].horaLogin = null;
    };
    this.util.showAlert('Todos os usuários foram Deslogados.','Logoff All');
  }

  detalheUusario(_idUsuario : number) {
    this.util.showAlert(this.usuarios[_idUsuario-1].nome);
  }
    
}