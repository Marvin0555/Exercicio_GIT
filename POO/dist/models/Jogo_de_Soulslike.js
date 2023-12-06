"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo_de_Soulslike = void 0;
const Jogos_1 = require("./Jogos");

// Classe de herança da Superclasse Jogos
class Jogo_de_Soulslike extends Jogos_1.Jogos {
    // Construtor da classe Jogo_de_Soulslike
    constructor(nome, distribuido, lancamento, genero = "Soulslike") {
        super(nome, genero, distribuido, lancamento);
    }
    Jogando() {
        console.log("Jogando um Soulslike");
    }
}
exports.Jogo_de_Soulslike = Jogo_de_Soulslike;
