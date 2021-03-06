import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfRaimo'
})
export class CpfRaimoPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value != null) {
      if (value.length == 11) {
        return (value.substr(0,3) + '.' + value.substr(3,3) + '.'+ value.substr(6,3) + '-'+ value.substr(9,2))  ;
      }
      else{
        return 'C.P.F. inválido!';
      }

    }
    else{
      return 'Informe o C.P.F.';
    }

    return null;
  }
}
