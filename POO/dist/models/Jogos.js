"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogos = void 0;

// Classe dos Jogos
class Jogos {
    constructor(nome, genero, distribuido, lançamento) {
        this.nome = nome;
        this.genero = genero;
        this.distribuido = distribuido;
        this.lançamento = lançamento;
    }
    Jogando() {
        console.log("Jogando jogo aleatorio");
        ;
    }
}
exports.Jogos = Jogos;
