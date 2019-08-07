import { Estado } from '../model/estado';

export interface Funcionario {
    id: number;
    nome: string;
    dataNascimento: string;
    sexo: string;
    email: string;
    gerente: boolean;
    salario: number;
    observacao: string;
    telefone: string;
    estado: Estado;
}
