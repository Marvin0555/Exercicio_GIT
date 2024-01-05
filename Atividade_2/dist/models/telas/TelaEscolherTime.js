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
const PokemonsFogo_1 = require("../PokemonsFogo");
const HabilidadesPokemon_1 = require("../HabilidadesPokemon");
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
                const habilidade_1 = CriarPokemons_1.DicionarioPokemon[numeroPokemon].habilidade_1;
                const habilidade_2 = CriarPokemons_1.DicionarioPokemon[numeroPokemon].habilidade_2;
                console.log(`\nVocê escolheu o Pokémon: `, CriarPokemons_1.DicionarioPokemon[numeroPokemon].nome, "\n");
                console.log("Habilidade 1:", habilidade_1[0], " // ", "Dano da Habilidade:", habilidade_1[1], " // ", "Prioridade da Habilidade:", habilidade_1[2]);
                console.log("\n");
                console.log("Habilidade 2:", habilidade_2[0], " // ", "Dano da Habilidade:", habilidade_2[1], " // ", "Prioridade da Habilidade:", habilidade_2[2]);
                console.log("\n");
                while (escolha) {
                    const confirmar = readlineSync.question("Digite s para confirmar ou n para cancelar a escolha: ");
                    switch (confirmar) {
                        case "s":
                            console.log("Escolha confirmada");
                            if (CriarPokemons_1.DicionarioPokemon[numeroPokemon].tipo == "Fogo") {
                                const pokemonFogo = new PokemonsFogo_1.TipoFogo(CriarPokemons_1.DicionarioPokemon[numeroPokemon].nome, CriarPokemons_1.DicionarioPokemon[numeroPokemon].vida, CriarPokemons_1.DicionarioPokemon[numeroPokemon].energia, CriarPokemons_1.DicionarioPokemon[numeroPokemon].velocidade);
                                pokemonFogo.GetHabilidade_1(...HabilidadesPokemon_1.HabilidadesPokemon.Ember());
                                pokemonFogo.GetHabilidade_2(...HabilidadesPokemon_1.HabilidadesPokemon.Flamethrower());
                                const id_pokemon = (0, MeusPokemons_1.VerificarPokemon)();
                                if (id_pokemon == 0) {
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else {
                                    (0, MeusPokemons_1.AddMeuPokemon)(id_pokemon, pokemonFogo);
                                }
                                readlineSync.question("Pressione Enter para continuar...");
                            }
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
