import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var TelefoneMarceloPipe = /** @class */ (function () {
    function TelefoneMarceloPipe() {
    }
    TelefoneMarceloPipe.prototype.transform = function (_value, args) {
        if (_value != null && _value != '') {
            if (_value.length < 11) {
                _value = '(' + _value.substr(0, 2) + ')' + _value.substr(2, 4) + '-' + _value.substr(6);
            }
            else {
                _value = '(' + _value.substr(0, 2) + ')' + _value.substr(2, 5) + '-' + _value.substr(7);
            }
            return _value;
        }
        return '';
    };
    TelefoneMarceloPipe = tslib_1.__decorate([
        Pipe({
            name: 'telefoneMarcelo'
        })
    ], TelefoneMarceloPipe);
    return TelefoneMarceloPipe;
}());
export { TelefoneMarceloPipe };
//# sourceMappingURL=telefone-marcelo.pipe.js.map