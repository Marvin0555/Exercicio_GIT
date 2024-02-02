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
exports.TodosPokemons = void 0;
const typeorm_1 = require("typeorm");
const HabilidadesPokemon_1 = require("../HabilidadesPokemon");
let TodosPokemons = class TodosPokemons {
    //@OneToOne(() => TipoAgua)
    //@JoinColumn()
    //tipoAgua: TipoAgua
    //@OneToOne(() => TipoEletrico)
    //@JoinColumn()
    //tipoEletrico: TipoEletrico
    //@OneToOne(() => TipoFogo)
    //@JoinColumn()
    //tipoFogo: TipoFogo
    //@OneToOne(() => TipoGrama)
    //@JoinColumn()
    //tipoGrama: TipoGrama
    //@OneToOne(() => TipoVoador)
    //@JoinColumn()
    //tipoVoador: TipoVoador
    constructor(nome, tipo, vida, energia, velocidade) {
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
        this.nome = nome;
        this.tipo = tipo;
        this.vida = vida;
        this.energia = energia;
        this.velocidade = velocidade;
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
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "vida", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "energia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "velocidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "Habilidade1_nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade1_dano", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade1_energia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "Habilidade1_testo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade1_prioridade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "Habilidade2_nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade2_dano", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade2_energia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "Habilidade2_testo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade2_prioridade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "Habilidade3_nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade3_dano", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade3_energia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "Habilidade3_testo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade3_prioridade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "Habilidade4_nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade4_dano", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade4_energia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodosPokemons.prototype, "Habilidade4_testo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TodosPokemons.prototype, "Habilidade4_prioridade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HabilidadesPokemon_1.HabilidadesPokemon, (habilidadesPokemon) => habilidadesPokemon.pokemon),
    __metadata("design:type", Array)
], TodosPokemons.prototype, "habilidadesPokemon", void 0);
TodosPokemons = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, Number, Number, Number])
], TodosPokemons);
exports.TodosPokemons = TodosPokemons;
