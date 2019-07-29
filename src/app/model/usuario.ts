export interface Usuario {
    id: number; //1,2,3,4,5,...2^32
    nome: string; //qualquer caracter alphanumerico ou especial
    email: string; //
    administrador: boolean; //true ou false. sim ou não
    celular?: string; //? atributo opcional
}

export class UsuarioLogado implements Usuario {
    id: number; //1,2,3,4,5,...2^32
    nome: string; //qualquer caracter alphanumerico ou especial
    email: string; //
    administrador: boolean; //true ou false. sim ou não
    celular?: string; //? atributo opcional

    horaLogin: string;
    token: string;


    constructor(_horaLogin: string, _token: string) {
        this.horaLogin = _horaLogin;
        this.token = _token;
    }
}

export class UsuarioSuperLogado implements UsuarioLogado {
    id: number; //1,2,3,4,5,...2^32
    nome: string; //qualquer caracter alphanumerico ou especial
    email: string; //
    administrador: boolean; //true ou false. sim ou não
    celular?: string; //? atributo opcional

    horaLogin: string;
    token: string;

    celularFormatado: string;
    constructor()  {

    }

}