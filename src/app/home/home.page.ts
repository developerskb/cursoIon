import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, UsuarioLogado } from '../model/usuario';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //nome_variavel: tipo;
  pedidos: number = 25;
  //usuario logado
  usuarioLogado: Usuario;
  usuarioLogadoNaClasse: UsuarioLogado;
  usuarios: UsuarioLogado[] = []; //[usuario1,usuario2.....]
  constructor(private router: Router, private utils: UtilsService) {

  }

  // teste 

  ngOnInit(): void {
    this.usuarioLogadoNaClasse = new UsuarioLogado('11:39', 'xyz');
    this.usuarioLogadoNaClasse.email = 'victor@keybest';

    
    let usuarioLogadoNaClasse2 = new UsuarioLogado('11:40', 'xyz');
    usuarioLogadoNaClasse2.email = 'marcelo@keybest';

    let usuarioLogadoNaClasse3 = new UsuarioLogado('11:00', 'xyz');
    usuarioLogadoNaClasse3.email = 'raimo@keybest';

    this.usuarios.push(this.usuarioLogadoNaClasse);
    this.usuarios.push(usuarioLogadoNaClasse2);
    this.usuarios.push(usuarioLogadoNaClasse3);
    /*
    this.usuarioLogado = { 
      id: 1, 
      nome: 'Victor', 
      email: 'victor@keybest.com.br',   
      administrador: true      
    };
*/
    this.utils.tipos();
  }
  
  
  addPedido() {
    var tmp = this.pedidos;
    console.log('Valor anterior: ', { tipo: 'Pedido', quantidade: tmp });
    this.pedidos++;
  }

  paginaRodrigo() {
    console.log('ir para a pagina do rodrigo');
    this.router.navigateByUrl('rodrigohome');
  }
}
