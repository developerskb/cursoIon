import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import { UtilsService } from 'src/app/services/utils.service';
import { Usuario, UsuarioLogado } from 'src/app/model/usuario';

@Component({
  selector: 'app-victor-funcionario',
  templateUrl: './victor-funcionario.page.html',
  styleUrls: ['./victor-funcionario.page.scss'],
})
export class VictorFuncionarioPage implements OnInit {
  estados: Estado[];

  usuario: UsuarioLogado;

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    //this.nome = 'do banco de dados';
    this.usuario = new UsuarioLogado(null, null);
    //this.usuario.nome = 'Victor';
    this.usuario.sexo = 'M';
    this.usuario.estado = 'SP';

    this.estados = this.utils.listarEstados();    
    console.log(this.estados);
  }

  validar() {
    console.log('meu usuario:', this.usuario);
    if (this.utils.campoVazio(this.usuario.nome)) {
      this.utils.showAlert('Informe o Nome');
    }
    if (this.utils.campoVazio(this.usuario.estado)) {
      this.utils.showAlert('Informe o Estado');
    }
  }
}
