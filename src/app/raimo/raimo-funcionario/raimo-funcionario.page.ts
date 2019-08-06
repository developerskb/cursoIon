import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-raimo-funcionario',
  templateUrl: './raimo-funcionario.page.html',
  styleUrls: ['./raimo-funcionario.page.scss'],
})
export class RaimoFuncionarioPage implements OnInit {
  estados: Estado[];
  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.estados = this.utils.listarEstados();
    console.log(this.estados);
  }

}
