"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo_de_FPS = void 0;
const Jogos_1 = require("./Jogos");

// Classe de herança da Superclasse Jogos
class Jogo_de_FPS extends Jogos_1.Jogos {
    // Construtor da classe Jogo_de_FPS
    constructor(nome, distribuido, lançamento, genero = "FPS") {
        super(nome, genero, distribuido, lançamento);
    }
    //Faz um Polimorfismo da classe Jogo_de_FPS
    Jogando() {
        console.log("Jogando um FPS");
    }
}
exports.Jogo_de_FPS = Jogo_de_FPS;
