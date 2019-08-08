import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MarceloFuncionarioPage } from './marcelo-funcionario.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
var routes = [
    {
        path: '',
        component: MarceloFuncionarioPage
    }
];
var MarceloFuncionarioPageModule = /** @class */ (function () {
    function MarceloFuncionarioPageModule() {
    }
    MarceloFuncionarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MarceloFuncionarioPage]
        })
    ], MarceloFuncionarioPageModule);
    return MarceloFuncionarioPageModule;
}());
export { MarceloFuncionarioPageModule };
//# sourceMappingURL=marcelo-funcionario.module.js.map