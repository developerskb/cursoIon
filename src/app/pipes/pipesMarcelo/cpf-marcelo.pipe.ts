import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfMarcelo'
})
export class CpfMarceloPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value != null && value != '') {
      if (value.length == 11){
        return value.substr(0,3) + '.' + value.substr(3,3) + '.' + value.substr(6,3) + '-' + value.substr(9,2);
      }
      else if (value.length == 14){
        return value.substr(0,2) + '.' + value.substr(2,3) + '.' + value.substr(5,3) + '/' + value.substr(8,4) + '-' + value.substr(9,2);
      }
      else return 'CPF/CNPJ inválido';
    }
    else return 'Informar um número para formatação';
  }
}
