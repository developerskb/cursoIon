export interface UsuarioPaginaMarcelo {
    id: number;
    nome: string;
    email: string;
    adm: boolean;
    celular?: string; // ? = Opcional
}

export class UsuarioLogadoPagMarcelo implements UsuarioPaginaMarcelo{
    id: number;
    nome: string;
    email: string;
    adm: boolean;
    celular?: string; // ? = Opcional

    horaLogin: string;
    token: string;

    constructor(_horaLogin: string, _token: string) {
        this.horaLogin = _horaLogin;
        this.token = _token;
    }
}

