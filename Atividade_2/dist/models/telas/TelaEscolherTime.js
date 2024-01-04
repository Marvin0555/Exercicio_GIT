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
exports.EscolherTime = void 0;
const readlineSync = __importStar(require("readline-sync"));
const CriarPokemons_1 = require("../CriarPokemons");
const MeusPokemons_1 = require("../MeusPokemons");
class EscolherTime {
    static getMeuTime() {
        let continuar = true;
        while (continuar) {
            let escolha = true;
            console.clear();
            console.log("///////////////////////Pokemons///////////////////////////");
            console.log("ID - (1)", "Nome:", CriarPokemons_1.DicionarioPokemon[1].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[1].tipo, "    Vida:", CriarPokemons_1.DicionarioPokemon[1].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[1].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[1].energia);
            //console.log("ID - (2)" ,"Nome:",DicionarioPokemon[2].nome, "    Tipo:", DicionarioPokemon[2].tipo, "    Vida:", DicionarioPokemon[2].vida, "    Velocidade:", DicionarioPokemon[2].velocidade, "    Energia:", DicionarioPokemon[2].energia);
            //console.log("ID - (3)" ,"Nome:",DicionarioPokemon[3].nome, "    Tipo:", DicionarioPokemon[3].tipo, "    Vida:", DicionarioPokemon[3].vida, "    Velocidade:", DicionarioPokemon[3].velocidade, "    Energia:", DicionarioPokemon[3].energia);
            console.log("ID - (4)", "Nome:", CriarPokemons_1.DicionarioPokemon[4].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[4].tipo, "    Vida:", CriarPokemons_1.DicionarioPokemon[4].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[4].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[4].energia);
            const pokemon = readlineSync.question("\nEscolha o Pokemon que deseja usar selecionando o ID dele ou digite 21 para sair: ");
            const numeroPokemon = parseInt(pokemon);
            if (isNaN(numeroPokemon) || numeroPokemon < 1 || numeroPokemon > 21) {
                console.log("\nPor favor, escolha um número de ID valido \n");
                readlineSync.question("Pressione Enter para continuar...");
            }
            else if (numeroPokemon === 21) {
                console.log("Sair");
                continuar = false;
            }
            else {
                console.clear();
                console.log(`\nVocê escolheu o Pokémon: `, CriarPokemons_1.DicionarioPokemon[numeroPokemon].nome, "Suas Habilidades são:", "\n");
                CriarPokemons_1.DicionarioPokemon[numeroPokemon].Habilidade1();
                console.log("\n");
                CriarPokemons_1.DicionarioPokemon[numeroPokemon].Habilidade2();
                console.log("\n");
                while (escolha) {
                    const confirmar = readlineSync.question("Digite s para confirmar ou n para cancelar a escolha: ");
                    switch (confirmar) {
                        case "s":
                            console.log("Escolha confirmada");
                            readlineSync.question("Pressione Enter para continuar...");
                            (0, MeusPokemons_1.AddMeuPokemon)(CriarPokemons_1.DicionarioPokemon[numeroPokemon].nome);
                            escolha = false;
                            break;
                        case "n":
                            console.log("Escolha cancelada");
                            readlineSync.question("Pressione Enter para continuar...");
                            escolha = false;
                            break;
                        default:
                            console.log("Opção inválida");
                    }
                }
                // Restante do seu código para lidar com a escolha válida do usuário.
            }
        }
    }
}
exports.EscolherTime = EscolherTime;
