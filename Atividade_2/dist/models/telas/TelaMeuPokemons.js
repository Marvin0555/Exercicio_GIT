"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelaMeuPokemons = void 0;
const MeusPokemons_1 = require("../MeusPokemons");
const readlineSync = __importStar(require("readline-sync"));
const MeusPokemons_2 = require("../MeusPokemons");
const typeorm_1 = require("typeorm");
let TelaMeuPokemons = class TelaMeuPokemons {
    static Tela() {
        let continuar = true;
        while (continuar) {
            console.clear();
            console.log("/////////////////////////////////////Meu time////////////////////////////////////////");
            (0, MeusPokemons_1.GetMeuPokemon)();
            console.log("1- Remover Pokemon");
            console.log("2 - Habilidades do Pokemon");
            console.log("3 - Sair");
            const userInput = readlineSync.question("Escolha uma opção: ");
            console.clear();
            switch (userInput) {
                case "1":
                    (0, MeusPokemons_2.RemoveMeuPokemon)();
                    break;
                case "2":
                    (0, MeusPokemons_2.HabilidadePokemon)();
                    readlineSync.question("Pressione Enter para continuar...");
                    break;
                case "3":
                    continuar = false; // Sair do loop
                    break;
                default:
                    console.log("Opção inválida");
                    readlineSync.question("Pressione Enter para continuar...");
                    break;
            }
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TelaMeuPokemons.prototype, "id", void 0);
TelaMeuPokemons = __decorate([
    (0, typeorm_1.Entity)()
], TelaMeuPokemons);
exports.TelaMeuPokemons = TelaMeuPokemons;
