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
exports.PokemonsEletrico = exports.TipoEletrico = void 0;
const TelaEscolherTime_1 = require("../telas/TelaEscolherTime");
const Pokemons_1 = require("./Pokemons");
const typeorm_1 = require("typeorm");
let TipoEletrico = class TipoEletrico extends Pokemons_1.TodosPokemons {
    constructor(nome, vida, energia, velocidade, tipo = "Életrico") {
        super(nome, tipo, vida, energia, velocidade);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TipoEletrico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TelaEscolherTime_1.EscolherTime, (escolherTime) => escolherTime.Pokemon),
    __metadata("design:type", TelaEscolherTime_1.EscolherTime)
], TipoEletrico.prototype, "escolherTime", void 0);
TipoEletrico = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Number, Number, Number, String])
], TipoEletrico);
exports.TipoEletrico = TipoEletrico;
function PokemonsEletrico(nome, vida, energia, velocidade) {
    const Pokemon_modelo_eletrico = new Pokemons_1.TodosPokemons(nome, "Életrico", vida, energia, velocidade);
    const Pokemon_Eletrcoo = Pokemon_modelo_eletrico.clone();
    return Pokemon_Eletrcoo;
}
exports.PokemonsEletrico = PokemonsEletrico;
