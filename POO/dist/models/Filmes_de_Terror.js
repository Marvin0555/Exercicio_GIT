"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filmes_de_Terror = void 0;
const Filmes_1 = require("./Filmes");

// Classe de herança da Superclasse Filmes
class Filmes_de_Terror extends Filmes_1.Filmes {
    // Construtor da classe Filmes_de_Terror
    constructor(nome, diretor, lancamento) {
        super(nome, diretor, lancamento);
    }
}
exports.Filmes_de_Terror = Filmes_de_Terror;
