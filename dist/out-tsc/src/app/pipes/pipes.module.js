import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPipe } from './titulo.pipe';
import { CpfRobsonPipe } from './cpf-robson.pipe';
import { CpfMarceloPipe } from './pipesMarcelo/cpf-marcelo.pipe';
import { CpfRaimoPipe } from './cpf-raimo.pipe';
import { CpfRodrigoPipe } from './cpf-rodrigo.pipe';
import { TelefoneMarceloPipe } from './pipesMarcelo/telefone-marcelo.pipe';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                TituloPipe,
                CpfRobsonPipe,
                CpfMarceloPipe,
                CpfRaimoPipe,
                CpfRodrigoPipe,
                TelefoneMarceloPipe
            ],
            imports: [
                CommonModule
            ],
            exports: [
                TituloPipe,
                CpfRobsonPipe,
                CpfMarceloPipe,
                CpfRodrigoPipe,
                CpfRaimoPipe,
                TelefoneMarceloPipe
            ]
        })
    ], PipesModule);
    return PipesModule;
}());
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map