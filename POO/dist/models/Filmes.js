"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filmes = void 0;

// Classe dos Filmes, tem a implementação do Encapsulamento
class Filmes {
    constructor(nome, diretor, lançamento) {
        this.genero = "Terror";
        this.nome = nome;
        this.diretor = diretor;
        this.lançamento = lançamento;
    }
    getGenero() {
        return this.genero;
    }
    setGenero(genero) {
        this.genero = genero;
    }
}
exports.Filmes = Filmes;
