import { v4 as uuidv4 } from 'uuid';

class Categoria {
    id: string;
    nome: string;
    status: string;
    criacao: string;
}

export class Produto {
    id: string;
    nome: string;
    url: string;
    descricao: string;
    preco: number;
    quantidade_estoque: number;
    categoria: string;
    criacao: string;
}

class Endereco {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento: string;
}

class Cliente {
    id: string;
    nome: string;
    sobrenome: string;
    cpf: string;
    telefone: string;
    endereco: Endereco;
    email: string;
}

export function criaCategoria(nome: string, status: string, criacao: string): Categoria {
    return {
        id: uuidv4(),
        nome: nome,
        status: status,
        criacao: criacao
    };
}

export function criaProduto(nome: string, url: string, descricao: string, preco: number, quantidade_estoque: number, categoria: string): Produto {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return {
        id: uuidv4(),
        nome: nome,
        url: url,
        descricao: descricao,
        preco: preco,
        quantidade_estoque: quantidade_estoque,
        categoria: categoria,
        criacao: date
    };
}

export function criaCliente(nome: string, sobrenome: string, cpf: string, telefone: string, endereco: Endereco, email: string): Cliente {
    return {
        id: uuidv4(),
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        telefone: telefone,
        endereco: {
            rua: endereco.rua,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            complemento: endereco.complemento
        },
        email: email
    };
}
