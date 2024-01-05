"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosPokemons = void 0;
class TodosPokemons {
    constructor(nome, tipo, vida, energia, velocidade) {
        this.nome = nome;
        this.tipo = tipo;
        this.vida = vida;
        this.energia = energia;
        this.velocidade = velocidade;
    }
    Habilidade1(nome, dano, testo, prioridade) {
        console.log("Habilidade 1");
    }
    Habilidade2(nome, dano, testo, prioridade) {
        console.log("Habilidade 2");
    }
    Habilidade3(nome, dano, testo, prioridade) {
        console.log("Habilidade 3");
    }
    Habilidade4(nome, dano, testo, prioridade) {
        console.log("Habilidade 4");
    }
}
exports.TodosPokemons = TodosPokemons;
