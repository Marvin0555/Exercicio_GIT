"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro_de_ = void 0;
const Cachorros_1 = require("./Cachorros");
// Classe de herança da Superclasse Cachorros

class Cachorro_de_ extends Cachorros_1.Cachorros {
    // Construtor da classe Cachorro_de_Poodle
    constructor(raça, comprimento, função, mordida) {
        super(raça, comprimento, função, mordida);
    }
    setfunção(novafun) {
        this.função = novafun;
    }
    getfunção() {
        return this.função;
    }
    Faz_Truque() {
        console.log("Faz truque de cachorro \n");
    }
}
exports.Cachorro_de_ = Cachorro_de_;
