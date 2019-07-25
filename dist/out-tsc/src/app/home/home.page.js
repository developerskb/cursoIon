import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
        //nome_variavel: tipo;
        this.pedidos = 25;
    }
    // teste 
    HomePage.prototype.addPedido = function () {
        var tmp = this.pedidos;
        console.log('Valor anterior: ', { tipo: 'Pedido', quantidade: tmp });
        this.pedidos++;
    };
    HomePage.prototype.paginaRodrigo = function () {
        console.log('ir para a pagina do rodrigo');
        this.router.navigateByUrl('rodrigohome');
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map