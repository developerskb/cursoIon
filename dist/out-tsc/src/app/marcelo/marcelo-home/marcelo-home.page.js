import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogadoPagMarcelo } from 'src/app/model/usuario-pagina-marcelo';
import { UtilsService } from 'src/app/services/utils.service';
var MarceloHomePage = /** @class */ (function () {
    // Construtor 
    function MarceloHomePage(router, util) {
        this.router = router;
        this.util = util;
        this.usuarios = [];
        this.imagem1 = 'assets/usuarios/Celo1_3x4.jpg';
        this.imagem2 = 'assets/usuarios/Celo2_3x4.jpg';
        this.imagem3 = 'assets/usuarios/Celo3_3x4.jpg';
        this.imagem4 = 'assets/usuarios/Celo4_3x4.jpg';
    }
    //ngOnInit corresponde +- ao onShow ... 
    MarceloHomePage.prototype.ngOnInit = function () {
        // Iniciar usuário logado:
        //this.usuarioLogado1 = new UsuarioLogadoPagMarcelo((new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),'R13');
        this.usuarioLogado1 = new UsuarioLogadoPagMarcelo(null, 'R13');
        this.usuarioLogado1.id = 1;
        this.usuarioLogado1.email = 'marcelo@keybest.com.br';
        this.usuarioLogado1.nome = 'Celo de Oliveira';
        this.usuarioLogado1.foto = this.imagem1;
        this.usuarioLogado1.cpf = '21667181831';
        var usuarioLogado2 = new UsuarioLogadoPagMarcelo(null, "R19");
        usuarioLogado2.id = 2;
        usuarioLogado2.email = "raimo@keybest.com.br";
        usuarioLogado2.nome = "Raimo Lima";
        usuarioLogado2.foto = 'assets/usuarios/GABIGOL.JPG';
        usuarioLogado2.cpf = '1234';
        var usuarioLogado3 = new UsuarioLogadoPagMarcelo(null, "R20");
        usuarioLogado3.id = 3;
        usuarioLogado3.email = "robson@keybest.com.br";
        usuarioLogado3.nome = "Robson Brito";
        usuarioLogado3.foto = 'assets/usuarios/robson.jpg';
        usuarioLogado3.cpf = '05255130000199';
        var usuarioLogado4 = new UsuarioLogadoPagMarcelo(null, "R18");
        usuarioLogado4.id = 4;
        usuarioLogado4.email = "hrodrigo@keybest.com.br";
        usuarioLogado4.nome = "Rodrigo Regaz";
        usuarioLogado4.foto = 'assets/bola.jpg';
        usuarioLogado4.cpf = '216.671.818-31';
        var usuarioLogado5 = new UsuarioLogadoPagMarcelo(null, "R15");
        usuarioLogado5.id = 5;
        usuarioLogado5.email = "victor@keybest.com.br";
        usuarioLogado5.nome = "Victor Hugo";
        usuarioLogado5.foto = 'assets/usuarios/victor.png';
        usuarioLogado2.cpf = null;
        this.usuarios.push(this.usuarioLogado1);
        this.usuarios.push(usuarioLogado2);
        this.usuarios.push(usuarioLogado3);
        this.usuarios.push(usuarioLogado4);
        this.usuarios.push(usuarioLogado5);
    };
    MarceloHomePage.prototype.paginaRodrigo = function () {
        console.log('Ir para a página do Rodrigo');
        this.router.navigateByUrl('rodrigohome');
    };
    MarceloHomePage.prototype.paginaRaimo = function () {
        console.log('Ira para a página do Raimo');
        this.router.navigateByUrl('raimo-home');
    };
    MarceloHomePage.prototype.verificaUsuario = function () {
        console.log("Usuário: " + this.usuarioLogado1.token + " - " + this.usuarioLogado1.nome);
        console.log("E-mail: " + this.usuarioLogado1.email);
        if (this.usuarioLogado1.horaLogin != null) {
            console.log("Login: " + this.usuarioLogado1.horaLogin);
        }
        else {
            console.log("Login: Usuário Deslogado ");
        }
        this.util.showToast('O resultado foi enviado ao log. Verifique o Console do Navegador. (Toast de 10 segundos)', 10000);
    };
    MarceloHomePage.prototype.logoffUsuario = function (_idUsuario) {
        this.usuarios[_idUsuario - 1].horaLogin = null;
        console.log("Saindo: " + this.usuarios[_idUsuario - 1].token);
        this.util.showToast('Usuario Deslogado: ' + this.usuarios[_idUsuario - 1].nome + ' - ' + this.usuarios[_idUsuario - 1].email);
        this.usuarios[_idUsuario - 1].statusLogin = 'OFF';
    };
    MarceloHomePage.prototype.loginUsuario = function (_idUsuario) {
        this.usuarios[_idUsuario - 1].horaLogin = (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds();
        console.log("Entrando: " + this.usuarios[_idUsuario - 1].token);
        this.util.showToast('Login: ' + this.usuarios[_idUsuario - 1].nome + ' - ' + this.usuarios[_idUsuario - 1].email);
        this.usuarios[_idUsuario - 1].statusLogin = 'ON';
    };
    MarceloHomePage.prototype.logoffTodos = function () {
        for (var _i = 0; _i < this.usuarios.length; _i++) {
            this.usuarios[_i].horaLogin = null;
        }
        ;
        this.exibeAlerta('Todos os usuários foram Deslogados.', 'Logoff All');
    };
    MarceloHomePage.prototype.detalheUsario = function (_idUsuario) {
        this.exibeAlerta(this.usuarios[_idUsuario - 1].nome);
    };
    MarceloHomePage.prototype.exibeAlerta = function (_msg, _titulo) {
        this.util.showAlert(_msg, _titulo);
    };
    MarceloHomePage = tslib_1.__decorate([
        Component({
            selector: 'app-marcelo-home',
            templateUrl: './marcelo-home.page.html',
            styleUrls: ['./marcelo-home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            UtilsService])
    ], MarceloHomePage);
    return MarceloHomePage;
}());
export { MarceloHomePage };
//# sourceMappingURL=marcelo-home.page.js.map