"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabilidadesPokemon = void 0;
const typeorm_1 = require("typeorm");
const Pokemons_1 = require("./classes_Pokemon/Pokemons");
let HabilidadesPokemon = class HabilidadesPokemon {
    static Ember() {
        const nome_habilidade = "Ember";
        const dano = 40;
        const energia = 20;
        const texto = "Lança brasas no inimigo";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Flamethrower() {
        const nome_habilidade = "Flamethrower";
        const dano = 90;
        const energia = 50;
        const texto = "O pokemon realiza um tornado de fogo no oponente chamado Flamethrower";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Bubble() {
        const nome_habilidade = "Bubble";
        const dano = 40;
        const energia = 20;
        const texto = "O pokemon atira uma rajada de bolhas no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Water_Gun() {
        const nome_habilidade = "Water Gun";
        const dano = 100;
        const energia = 60;
        const texto = "O pokemon canaliza uma forte rajada de água no oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Thunderbolt() {
        const nome_habilidade = "Thunderbolt";
        const dano = 80;
        const energia = 40;
        const texto = "O pokemon canaliza uma rajada de eletricidade no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Thunder() {
        const nome_habilidade = "Thunder";
        const dano = 100;
        const energia = 60;
        const texto = "O pokemon canaliza um trovão no oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Leaf_Tornado() {
        const nome_habilidade = "Leaf Tornado";
        const dano = 35;
        const energia = 10;
        const texto = "O pokemon atira um tornado de folhas no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Energy_Ball() {
        const nome_habilidade = "Energy Ball";
        const dano = 60;
        const energia = 40;
        const texto = "O pokemon atira uma bola de energia no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Solar_Beam() {
        const nome_habilidade = "Solar Beam";
        const dano = 110;
        const energia = 70;
        const texto = "O pokemon atira uma rajada solar no oponente";
        const prioridade = 3;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Air_Cutter() {
        const nome_habilidade = "Air Cutter";
        const dano = 45;
        const energia = 30;
        const texto = "O pokemon atira uma rajada de vento no oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Sky_Attack() {
        const nome_habilidade = "Sky Attack";
        const dano = 55;
        const energia = 40;
        const texto = "O pokemon realiza um ataque de neblina no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Brave_Bird() {
        const nome_habilidade = "Brave Bird";
        const dano = 120;
        const energia = 80;
        const texto = "O pokemon realiza um ataque bruto no oponente";
        const prioridade = 3;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Bite() {
        const nome_habilidade = "bite";
        const dano = 30;
        const energia = 10;
        const texto = "O pokemon morde o oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Cut() {
        const nome_habilidade = "Cut";
        const dano = 50;
        const energia = 30;
        const texto = "O pokemon consegue cortar o oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Aqua_Tail() {
        const nome_habilidade = "Aqua Tail";
        const dano = 30;
        const energia = 10;
        const texto = "O pokemon atira um tiro no oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Fire_Fang() {
        const nome_habilidade = "Fire Fang";
        const dano = 20;
        const energia = 10;
        const texto = "O pokemon morde o oponente com chamas";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Quick_Attack() {
        const nome_habilidade = "Quick Attack";
        const dano = 20;
        const energia = 20;
        const texto = "O pokemon ataca com um ataque raído";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Focus_Blast() {
        const nome_habilidade = "Focus Blast";
        const dano = 60;
        const energia = 30;
        const texto = "O pokemon ataca com um ataque raído";
        const prioridade = 3;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HabilidadesPokemon.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Pokemons_1.TodosPokemons, (pokemon) => pokemon.habilidadesPokemon),
    __metadata("design:type", Pokemons_1.TodosPokemons)
], HabilidadesPokemon.prototype, "pokemon", void 0);
HabilidadesPokemon = __decorate([
    (0, typeorm_1.Entity)()
], HabilidadesPokemon);
exports.HabilidadesPokemon = HabilidadesPokemon;
