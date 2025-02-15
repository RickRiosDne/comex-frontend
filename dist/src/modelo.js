import { v4 as uuidv4 } from 'uuid';
class Pessoa {
    id;
    nome;
    criacao;
    constructor(nome) {
        this.id = uuidv4();
        this.nome = nome;
        const today = new Date();
        this.criacao = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    }
}
export class CriaCategoria extends Pessoa {
    _status;
    constructor(nome, status) {
        super(nome);
        this._status = status;
    }
}
export class Produto extends Pessoa {
    url;
    descricao;
    preco;
    quantidade_estoque;
    categoria;
    constructor(nome, url, descricao, preco, quantidade_estoque, categoria) {
        super(nome);
        this.url = url;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade_estoque = quantidade_estoque;
        this.categoria = categoria;
    }
}
class Endereco {
    rua;
    numero;
    bairro;
    cidade;
    estado;
    cep;
    complemento;
}
class Cliente extends Pessoa {
    sobrenome;
    cpf;
    telefone;
    endereco;
    email;
    constructor(nome, sobrenome, cpf, telefone, endereco, email) {
        super(nome);
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
    }
}
