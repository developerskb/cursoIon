import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-victor-funcionario',
  templateUrl: './victor-funcionario.page.html',
  styleUrls: ['./victor-funcionario.page.scss'],
})
export class VictorFuncionarioPage implements OnInit {
  estados: Estado[];
  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.estados = this.utils.listarEstados();    
    console.log(this.estados);
  }

}
