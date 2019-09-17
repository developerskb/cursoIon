import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Estado } from '../model/estado';
import { UsuarioLogado } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private alertCtl: AlertController,
    private toastCtrl: ToastController) { }

  //modals and dialogs
  //exibir uma caixa de alerta
  async showAlert(msg: string, title?: string) {
    const alert = await this.alertCtl.create({
      header: title,
      //subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showToast(msg: string, duracao?: number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duracao ? duracao : 3000
    });
    await toast.present();
  }

  //
  eImpar(numero: number): boolean {
    return numero % 2 == 0;
  }

  //retorna lista com quatro estados
  listarEstados(): Estado[] {
    let resultado: Estado[] = [];
    resultado.push({ nome: null, sigla: null });
    resultado.push({ nome: 'São Paulo', sigla: 'SP' });
    resultado.push({ nome: 'Rio de Janeiro', sigla: 'RJ' });
    resultado.push({ nome: 'Minas Gerais', sigla: 'MG' });
    resultado.push({ nome: 'Mato Grosso', sigla: 'MT' });
    return resultado;
  }

  campoVazio(valor: string): boolean {        
    //console.log('victor@email.com'.toUpperCase().trim().substring(0,5).concat('...')); //= string
    //console.log('valido', 'victoremail'.indexOf('@'));

    if (valor == null || valor.trim() == '') { 
      return true;
    } else {
      return false;
    }

    //return (valor == null || valor == '') ? true : false;

    //return valor == null || valor == '';
  }

  //tipos
  //tipos
  tipos() {
    let soma1: number;
    let x: number = 10;
    let y: string = 'abc';
    let a = x; //a = 10
    let b = y;

    
    console.log(x, y, a, b); // -> 10, 'abc', 10, 'abc'
    x = 30;
    console.log(x, y, a, b); // -> 30, 'abc', 10, 'abc'

    //referencia
    let arr: number[] = [1,2,3];
    console.log(arr); //[1,2,3]
    let copiaArr = arr;
    copiaArr[0] = 10;
    console.log(arr); //[10,2,3]
    
    let funcionario = new UsuarioLogado();
    funcionario.nome = 'Usuario';
    funcionario.sexo = 'M';
    funcionario.email = null;

    let funcionarioJson:string = JSON.stringify(funcionario);

    console.log('funcionario json:', funcionarioJson);
    let funcionarioCopia = JSON.parse(funcionarioJson);
    funcionarioCopia.nome = 'Outro';
    console.log('funcionario: ', funcionario.nome, 'copia: ', funcionarioCopia.nome);

    let pessoa = {
      nome: 'Max',
      email: 'max@gmail.com',
      telefones: [
        { ddd: 11, numero: 985454111 },
        { ddd: 21, numero: 985466111 },
        { ddd: 11, numero: 85450000 },
      ]
    }

    //mostrarTelefone(pessoa.telefones[1]);

    console.log("Todos os telefones: ");
    //for (let i=0; i < pessoa.telefones.length; i++){
    //  mostrarTelefone(pessoa.telefones[i]);
    //}

    //let i = 0;
    //while (i < pessoa.telefones.length) {
    //  mostrarTelefone(pessoa.telefones[i]);
    //  i = i + 1; // i++;
    //}

    pessoa.telefones.forEach((tel) => {      
      if (tel.ddd == 11) {
        console.log("TEL:", tel.numero);
      }
    });

    let sp = pessoa.telefones.filter(t => {
      return t.ddd == 11 && t.numero.toString().startsWith('9')
    });
    console.log(sp);

  }
}

function mostrarTelefone(telefone: any) {
  console.log("TEL:", telefone.ddd + " " + telefone.numero);
}
