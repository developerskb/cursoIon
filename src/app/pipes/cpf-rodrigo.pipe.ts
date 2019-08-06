import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfRodrigo'
})
export class CpfRodrigoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length == 11) {
      return (value.substr(0,3)+"."+value.substr(3,3)+"."+value.substr(6,3)+"-"+value.substr(9,2));
      
    }
    return null;
  }

}
