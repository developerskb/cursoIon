var UsuarioLogado = /** @class */ (function () {
    function UsuarioLogado(_horaLogin, _token) {
        this.horaLogin = _horaLogin;
        this.token = _token;
    }
    return UsuarioLogado;
}());
export { UsuarioLogado };
/*
export class UsuarioSuperLogado implements UsuarioLogado {
    id: number; //1,2,3,4,5,...2^32
    nome: string; //qualquer caracter alphanumerico ou especial
    email: string; //
    administrador: boolean; //true ou false. sim ou não
    celular?: string; //? atributo opcional

    horaLogin: string;
    token: string;

    sexo:string;
    celularFormatado: string;
    constructor()  {

    }

}
*/ 
//# sourceMappingURL=usuario.js.map