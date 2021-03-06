import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { Estado } from 'src/app/model/estado';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-marcelo-funcionario',
  templateUrl: './marcelo-funcionario.page.html',
  styleUrls: ['./marcelo-funcionario.page.scss'],
})
export class MarceloFuncionarioPage implements OnInit {

  funcionario: Funcionario = {
    id: null, nome: null, dataNascimento: null, sexo: null, email: null, gerente: null,
    salario: null, observacao: null, telefone: null, estado: null
  };
  estados: Estado[];

  constructor(private utils: UtilsService) {
  }

  ngOnInit() {
    this.estados = this.utils.listarEstados();
    /* Inicializando valores para testes:*/
    /*
    this.funcionario.nome = "Marcelo";
    this.funcionario.email = "marcelo@keybest.com.br";
    this.funcionario.telefone = "11985750650";
    */
  }

  EstadoNomeSigla(_nome: string, _sigla: string): string {
    if (_nome != null && _nome != '' && _sigla != null && _sigla != '') {
      return _nome + ' - ' + _sigla;
    }
    return ''
  }

  validarCampos(): boolean {
    this.eMaior(this.funcionario.dataNascimento);

    let condicao: boolean; // true or false
    let valor1 = 1;
    let valor2 = 2;
    condicao = valor1 == valor2; //false

    //operadores logicos
    //! negação ex. !true = false; !false = true;
    // == é igual
    // != é diferente
    // > é maior
    // < é menor
    // >= é maior ou igual
    // <= é menor ou igual
    let idade = 15; //anos
    //verificar se é maior de idade
    if (idade < 18) {
      //vc não pode ser menor de idade
    }
    else {
      //vc é maior de idade
    }

    let mensagem = idade < 18 ? "vc não pode ser menor de idade" : "vc é maior de idade";

    if (valor1 == valor2) {
      //verdadeiro ;
      //linha1;
      //linha2;
    }
    if (!(valor1 != valor2)) { //true
      //falso
      //outra linha1
    }

    //proxima

    if (this.utils.campoVazio(this.funcionario.nome)) { //true or false
      this.utils.showAlert("Preencher o Nome", "Erro!");
      return false;
    } else
      if (this.utils.campoVazio(this.funcionario.dataNascimento)) {
        this.utils.showAlert("Preencher o Data de Nascimento", "Erro!");
        return false;
      } else
        if (this.funcionario.gerente && !this.eMaior(this.funcionario.dataNascimento)) {
          this.utils.showAlert("Somente maiores de 18 Anos podem ser Gerentes", "Erro!");
          return false;
        } else
          if (this.utils.campoVazio(this.funcionario.email)) {
            this.utils.showAlert("Preencher o E-mail", "Erro!");
            return false;
          } else
            if (this.emailInvalido(this.funcionario.email)) {
              this.utils.showAlert("E-mail Inválido", "Erro!");
              return false;
            } else
              if (this.utils.campoVazio(this.funcionario.telefone)) {
                this.utils.showAlert("Preencher o Telefone", "Erro!");
                return false;
              } else
                if (this.funcionario.estado == null || this.utils.campoVazio(this.funcionario.estado.sigla)) {
                  this.utils.showAlert("Preencher o Estado", "Erro!");
                  return false;
                }
    return true;
  }

  emailInvalido(_email: string): boolean {
    let indexAux: number = _email.indexOf("@");
    if (indexAux < 0) {
      return true;
    } else
      if (_email.indexOf("@", indexAux + 1) > 0) {
        return true;
      }
    return false;
  }

  eMaior(_dtnasc: string): boolean {
    let anoAtual: number = new Date().getFullYear();
    let anoNasc: number = new Date(_dtnasc).getFullYear();
    return ((anoAtual - anoNasc) > 18);
  }

  salvarDados() {
    if (this.validarCampos()) {
      this.utils.showAlert('Gravação Concluída');
      console.log(this.funcionario);

    }
  }

}
