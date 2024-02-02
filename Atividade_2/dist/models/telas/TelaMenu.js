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
exports.MenuMain = void 0;
const readlineSync = __importStar(require("readline-sync"));
const TelaEscolherTime_1 = require("./TelaEscolherTime");
const TelaMeuPokemons_1 = require("./TelaMeuPokemons");
const TelaBatalha_1 = require("./TelaBatalha");
const typeorm_1 = require("typeorm");
let MenuMain = class MenuMain {
    static Tela() {
        let continuar = true;
        while (continuar) {
            // Limpa a tela (pode não funcionar em todos os terminais/sistemas operacionais)
            console.clear();
            console.log("/////////////////////////////////////Menu do jogo////////////////////////////////////");
            console.log("1 - Meu time");
            console.log("2 - Escolher Pokemons");
            console.log("3 - Batalhar");
            console.log("4 - Sair");
            const userInput = readlineSync.question("Digite alguma coisa: ");
            switch (userInput) {
                case "1":
                    TelaMeuPokemons_1.TelaMeuPokemons.Tela();
                    break;
                case "2":
                    TelaEscolherTime_1.EscolherTime.getMeuTime();
                    // Tela de escolha de pokemons
                    break;
                case "3":
                    TelaBatalha_1.TelaBatalha.Tela();
                    break;
                case "4":
                    console.log("Sair");
                    continuar = false; // Sair do loop
                    break;
                default:
                    console.log("Opção inválida");
                    readlineSync.question("Pressione Enter para continuar...");
                    break;
            }
            // Aguarda que o usuário pressione Enter
            //readlineSync.keyInPause({ prompt: `Pressione Enter para continuar...`, mask: '', hideEchoBack: true });
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, typeorm_1.OneToOne)(() => TelaBatalha_1.TelaBatalha),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", TelaBatalha_1.TelaBatalha)
], MenuMain.prototype, "batalha", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => TelaMeuPokemons_1.TelaMeuPokemons),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", TelaMeuPokemons_1.TelaMeuPokemons)
], MenuMain.prototype, "meutime", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => TelaEscolherTime_1.EscolherTime),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", TelaEscolherTime_1.EscolherTime)
], MenuMain.prototype, "escolherTime", void 0);
MenuMain = __decorate([
    (0, typeorm_1.Entity)()
], MenuMain);
exports.MenuMain = MenuMain;
