export interface UsuarioPaginaMarcelo {
    id: number;
    nome: string;
    email: string;
    adm: boolean;
    cpf : string;
    celular?: string; // ? = Opcional
    foto?: string;
}

export class UsuarioLogadoPagMarcelo implements UsuarioPaginaMarcelo{
    id: number;
    nome: string;
    email: string;
    adm: boolean;
    cpf: string;
    celular?: string; // ? = Opcional
    foto?: string;

    horaLogin: string;
    token: string;
    statusLogin: string;

    constructor(_horaLogin: string, _token: string) {
        this.horaLogin = _horaLogin;
        this.token = _token;
        this.statusLogin = this.horaLogin ? 'ON' : 'OFF'; 
    }
}

