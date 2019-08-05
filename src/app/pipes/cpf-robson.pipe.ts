import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfRobson'
})
export class CpfRobsonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value != null) {
      if (value.length = 11) {
        return (value.substr(0,3) + '.' + value.substr(3,6)) +'.';
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
