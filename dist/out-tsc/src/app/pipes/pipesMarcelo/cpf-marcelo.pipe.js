import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var CpfMarceloPipe = /** @class */ (function () {
    function CpfMarceloPipe() {
    }
    CpfMarceloPipe.prototype.transform = function (value, args) {
        if (value != null && value != '') {
            if (value.length == 11) {
                return value.substr(0, 3) + '.' + value.substr(3, 3) + '.' + value.substr(6, 3) + '-' + value.substr(9, 2);
            }
            else if (value.length == 14) {
                return value.substr(0, 2) + '.' + value.substr(2, 3) + '.' + value.substr(5, 3) + '/' + value.substr(8, 4) + '-' + value.substr(9, 2);
            }
            else
                return 'CPF/CNPJ inválido';
        }
        else
            return 'Informar um número para formatação';
    };
    CpfMarceloPipe = tslib_1.__decorate([
        Pipe({
            name: 'cpfMarcelo'
        })
    ], CpfMarceloPipe);
    return CpfMarceloPipe;
}());
export { CpfMarceloPipe };
//# sourceMappingURL=cpf-marcelo.pipe.js.map