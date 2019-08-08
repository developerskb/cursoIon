import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
var UtilsService = /** @class */ (function () {
    function UtilsService(alertCtl, toastCtrl) {
        this.alertCtl = alertCtl;
        this.toastCtrl = toastCtrl;
    }
    //modals and dialogs
    //exibir uma caixa de alerta
    UtilsService.prototype.showAlert = function (msg, title) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtl.create({
                            header: title,
                            //subHeader: 'Subtitle',
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UtilsService.prototype.showToast = function (msg, duracao) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: duracao ? duracao : 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //
    UtilsService.prototype.eImpar = function (numero) {
        return numero % 2 != 0;
    };
    //retorna lista com quatro estados
    UtilsService.prototype.listarEstados = function () {
        var resultado = [];
        resultado.push({ nome: null, sigla: null });
        resultado.push({ nome: 'São Paulo', sigla: 'SP' });
        resultado.push({ nome: 'Rio de Janeiro', sigla: 'RJ' });
        resultado.push({ nome: 'Minas Gerais', sigla: 'MG' });
        resultado.push({ nome: 'Mato Grosso', sigla: 'MT' });
        return resultado;
    };
    UtilsService.prototype.campoVazio = function (valor) {
        if (valor == null || valor.trim() == '') {
            return true;
        }
        else {
            return false;
        }
        //return (valor == null || valor == '') ? true : false;
        //return valor == null || valor == '';
    };
    UtilsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            ToastController])
    ], UtilsService);
    return UtilsService;
}());
export { UtilsService };
//# sourceMappingURL=utils.service.js.map