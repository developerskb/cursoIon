import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RodrigohomePage } from './rodrigohome.page';
var routes = [
    {
        path: '',
        component: RodrigohomePage
    }
];
var RodrigohomePageModule = /** @class */ (function () {
    function RodrigohomePageModule() {
    }
    RodrigohomePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RodrigohomePage]
        })
    ], RodrigohomePageModule);
    return RodrigohomePageModule;
}());
export { RodrigohomePageModule };
//# sourceMappingURL=rodrigohome.module.js.map