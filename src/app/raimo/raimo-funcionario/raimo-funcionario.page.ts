import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import { UtilsService } from 'src/app/services/utils.service';
import { Usuario, UsuarioLogado } from 'src/app/model/usuario';

@Component({
  selector: 'app-raimo-funcionario',
  templateUrl: './raimo-funcionario.page.html',
  styleUrls: ['./raimo-funcionario.page.scss'],
})
export class RaimoFuncionarioPage implements OnInit {
  estados: Estado[];

  usuario: UsuarioLogado;


  constructor(private utils: UtilsService) { }

  ngOnInit() {
    //this.nome = 'do banco de dados';
    this.usuario = new UsuarioLogado(null, null);
    //this.usuario.nome = 'teste'
    this.usuario.sexo = 'M';
    this.estados = this.utils.listarEstados();


    //usuario raimo
    console.log(this.utils.eImpar(99));
    console.log(this.estados);
  }
  validar() {
    console.log('meu usuario:', this.usuario);
    if (this.utils.campoVazio(this.usuario.nome)) {
      this.utils.showAlert('Informe o Nome', "Campo Vazio!");
    }  
    if (this.utils.campoVazio(this.usuario.dataNascimento)) {
      this.utils.showAlert("Informe a Data de Nascimento", "Campo Vazio!");
    }
    if (this.utils.campoVazio(this.usuario.email)) {
      this.utils.showAlert('Informe o Email', "Campo Vazio!");
    }
    if (this.utils.campoVazio(this.usuario.estado)) {
      this.utils.showAlert('Informe o Estado', "Campo Vazio!");
    } 
  }
}
