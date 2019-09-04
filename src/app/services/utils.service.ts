import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Estado } from '../model/estado';

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
    return numero % 2 != 0;
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
}
