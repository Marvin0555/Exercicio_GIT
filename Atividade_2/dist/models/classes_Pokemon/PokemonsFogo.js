"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoFogo = void 0;
const Pokemons_1 = require("./Pokemons");
class TipoFogo extends Pokemons_1.TodosPokemons {
    constructor(nome, vida, energia, velocidade, tipo = "Fogo") {
        super(nome, tipo, vida, energia, velocidade);
        this.Habilidade1_nome = "";
        this.Habilidade1_dano = 0;
        this.Habilidade1_energia = 0;
        this.Habilidade1_testo = "";
        this.Habilidade1_prioridade = 0;
        this.Habilidade2_nome = "";
        this.Habilidade2_dano = 0;
        this.Habilidade2_energia = 0;
        this.Habilidade2_testo = "";
        this.Habilidade2_prioridade = 0;
        this.Habilidade3_nome = "";
        this.Habilidade3_dano = 0;
        this.Habilidade3_energia = 0;
        this.Habilidade3_testo = "";
        this.Habilidade3_prioridade = 0;
        this.Habilidade4_nome = "";
        this.Habilidade4_dano = 0;
        this.Habilidade4_energia = 0;
        this.Habilidade4_testo = "";
        this.Habilidade4_prioridade = 0;
    }
    GetHabilidade_1(nome, dano, energia, testo, prioridade) {
        this.Habilidade1_nome = nome;
        this.Habilidade1_dano = dano;
        this.Habilidade1_energia = energia;
        this.Habilidade1_testo = testo;
        this.Habilidade1_prioridade = prioridade;
    }
    GetHabilidade_2(nome, dano, energia, testo, prioridade) {
        this.Habilidade2_nome = nome;
        this.Habilidade2_dano = dano;
        this.Habilidade2_energia = energia;
        this.Habilidade2_testo = testo;
        this.Habilidade2_prioridade = prioridade;
    }
    GetHabilidade_3(nome, dano, energia, testo, prioridade) {
        this.Habilidade3_nome = nome;
        this.Habilidade3_dano = dano;
        this.Habilidade3_energia = energia;
        this.Habilidade3_testo = testo;
        this.Habilidade3_prioridade = prioridade;
    }
    GetHabilidade_4(nome, dano, energia, testo, prioridade) {
        this.Habilidade4_nome = nome;
        this.Habilidade4_dano = dano;
        this.Habilidade4_energia = energia;
        this.Habilidade4_testo = testo;
        this.Habilidade4_prioridade = prioridade;
    }
    Habilidade1() {
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade1_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade1_dano}
    ║   Energia da Habilidade: ${this.Habilidade1_energia} 
    ║   Prioridade: ${this.Habilidade1_prioridade}   
    ║   ${this.Habilidade1_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }
    Habilidade2() {
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade2_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade2_dano} 
    ║   Energia da Habilidade: ${this.Habilidade2_energia}
    ║   Prioridade: ${this.Habilidade2_prioridade}   
    ║   ${this.Habilidade2_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }
    Habilidade3() {
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade3_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade3_dano} 
    ║   Energia da Habilidade: ${this.Habilidade3_energia}
    ║   Prioridade: ${this.Habilidade3_prioridade}   
    ║   ${this.Habilidade3_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }
    Habilidade4() {
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade4_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade4_dano} 
    ║   Energia da Habilidade: ${this.Habilidade4_energia}
    ║   Prioridade: ${this.Habilidade4_prioridade}   
    ║   ${this.Habilidade4_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }
}
exports.TipoFogo = TipoFogo;
