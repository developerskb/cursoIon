import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-robson-home',
  templateUrl: './robson-home.page.html',
  styleUrls: ['./robson-home.page.scss'],
})
export class RobsonHomePage implements OnInit {
  router: any;

  constructor(private funcoes: UtilsService) { }

  ngOnInit() {
  }

Robson_Alerta()
{
this.funcoes.showAlert('Alerta total!!!', 'Perigo');
}  

Robson_Toast(_mensagem: string, _segundos?: number){
  this.funcoes.showToast(_mensagem,_segundos ? _segundos*1000 : 5000);
}
}
