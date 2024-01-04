"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabilidadesPokemon = void 0;
class HabilidadesPokemon {
    static Ember() {
        const nome_habilidade = "Ember";
        const dano = 40;
        const texto = "Lança brasas no inimigo";
        const prioridade = 1;
        return [nome_habilidade, dano, texto, prioridade];
    }
    static Flamethrower() {
        const nome_habilidade = "Flamethrower";
        const dano = 90;
        const texto = "O pokemon realiza um tornado de fogo no oponente chamado Flamethrower";
        const prioridade = 2;
        return [nome_habilidade, dano, texto, prioridade];
    }
    static Bubble() {
        const nome_habilidade = "Bubble";
        const dano = 40;
        const texto = "O pokemon atira uma rajada de bolhas no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, texto, prioridade];
    }
    static Water_Gun() {
        const nome_habilidade = "Water Gun";
        const dano = 40;
        const texto = "O pokemon canaliza uma forte rajada de água no oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, texto, prioridade];
    }
}
exports.HabilidadesPokemon = HabilidadesPokemon;
