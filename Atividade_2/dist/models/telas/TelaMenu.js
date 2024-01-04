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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMain = void 0;
const readlineSync = __importStar(require("readline-sync"));
const TelaEscolherTime_1 = require("./TelaEscolherTime");
const MeusPokemons_1 = require("../MeusPokemons");
class MenuMain {
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
                    console.log("Meu time");
                    (0, MeusPokemons_1.GetMeuPokemon)();
                    break;
                case "2":
                    console.log("Escolher Pokemons");
                    TelaEscolherTime_1.EscolherTime.getMeuTime();
                    // Tela de escolha de pokemons
                    break;
                case "3":
                    console.log("Batalhar");
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
}
exports.MenuMain = MenuMain;
