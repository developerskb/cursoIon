import { Pipe, PipeTransform } from '@angular/core';
import { UsuarioLogado } from '../model/usuario';
import { UtilsService } from '../services/utils.service';

@Pipe({
  name: 'titulo'
})
export class TituloPipe implements PipeTransform {

  //Necessário para fazer a injeção de dependencia e usar funções de outros services
  constructor(private utils: UtilsService) {}

  transform(value: UsuarioLogado, args?: any): any {
    if (value != null) {      
      return (value.sexo == 'M' ? 'Sr. ' : 'Sra. ') + value.nome;
    }
    else {
      return '';
    }
  }
  /*
  transform(value: string, args?: any): any {
    if (value != null) {

      return 'Sr. ' + value;
    }
    else {
      return '';
    }
  }
  */

}
