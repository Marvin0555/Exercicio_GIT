"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorros = void 0;

// Classe dos Cachorros
class Cachorros {
    constructor(raça, comprimento, função, mordida) {
        this.raça = raça;
        this.comprimento = comprimento;
        this.função = função;
        this.mordida = mordida;
    }
    Mordida() {
        console.log("Mordendo");
    }
    Latir() {
        console.log("Latindo\n");
    }
}
exports.Cachorros = Cachorros;
