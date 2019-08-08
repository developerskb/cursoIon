import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
var MarceloFuncionarioPage = /** @class */ (function () {
    function MarceloFuncionarioPage(utils) {
        this.utils = utils;
        this.funcionario = {
            id: null, nome: null, dataNascimento: null, sexo: null, email: null, gerente: null,
            salario: null, observacao: null, telefone: null, estado: null
        };
    }
    MarceloFuncionarioPage.prototype.ngOnInit = function () {
        this.estados = this.utils.listarEstados();
    };
    MarceloFuncionarioPage.prototype.EstadoNomeSigla = function (_nome, _sigla) {
        if (_nome != null && _nome != '' && _sigla != null && _sigla != '') {
            return _nome + ' - ' + _sigla;
        }
        return '';
    };
    MarceloFuncionarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-marcelo-funcionario',
            templateUrl: './marcelo-funcionario.page.html',
            styleUrls: ['./marcelo-funcionario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UtilsService])
    ], MarceloFuncionarioPage);
    return MarceloFuncionarioPage;
}());
export { MarceloFuncionarioPage };
//# sourceMappingURL=marcelo-funcionario.page.js.map