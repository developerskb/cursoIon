import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VictorHomePage } from './victor-home.page';
var routes = [
    {
        path: '',
        component: VictorHomePage
    }
];
var VictorHomePageModule = /** @class */ (function () {
    function VictorHomePageModule() {
    }
    VictorHomePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [VictorHomePage]
        })
    ], VictorHomePageModule);
    return VictorHomePageModule;
}());
export { VictorHomePageModule };
//# sourceMappingURL=victor-home.module.js.map