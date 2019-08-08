import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneMarcelo'
})
export class TelefoneMarceloPipe implements PipeTransform {

  transform(_value: string, args?: any): any {
    if (_value != null && _value != '') {
      if (_value.length < 11) {
        _value = '(' + _value.substr(0,2) + ')' + _value.substr(2,4) + '-' + _value.substr(6);
      } 
      else {
        _value = '(' + _value.substr(0,2) + ')' + _value.substr(2,5) + '-' + _value.substr(7);
      }
      return _value;
    }
    return '';
  }
}
