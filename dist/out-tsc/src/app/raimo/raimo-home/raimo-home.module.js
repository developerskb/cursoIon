import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RaimoHomePage } from './raimo-home.page';
var routes = [
    {
        path: '',
        component: RaimoHomePage
    }
];
var RaimoHomePageModule = /** @class */ (function () {
    function RaimoHomePageModule() {
    }
    RaimoHomePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RaimoHomePage]
        })
    ], RaimoHomePageModule);
    return RaimoHomePageModule;
}());
export { RaimoHomePageModule };
//# sourceMappingURL=raimo-home.module.js.map