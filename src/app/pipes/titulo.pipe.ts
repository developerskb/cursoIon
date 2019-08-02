import { Pipe, PipeTransform } from '@angular/core';
import { UsuarioLogado } from '../model/usuario';

@Pipe({
  name: 'titulo'
})
export class TituloPipe implements PipeTransform {

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
