import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

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
}
