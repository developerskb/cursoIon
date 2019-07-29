import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var RaimoHomePage = /** @class */ (function () {
    function RaimoHomePage(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    RaimoHomePage.prototype.ngOnInit = function () {
        //ler o valor passado na url. ex raimo-home/flamengo
        //o valor do meuTime será 'flamengo'
        var meuTime = this.activatedRoute.snapshot.paramMap.get('time');
        console.log('Meu time é: ', meuTime);
    };
    RaimoHomePage = tslib_1.__decorate([
        Component({
            selector: 'app-raimo-home',
            templateUrl: './raimo-home.page.html',
            styleUrls: ['./raimo-home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], RaimoHomePage);
    return RaimoHomePage;
}());
export { RaimoHomePage };
//# sourceMappingURL=raimo-home.page.js.map