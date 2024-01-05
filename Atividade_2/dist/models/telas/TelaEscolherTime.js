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
const PokemonsFogo_1 = require("../classes_Pokemon/PokemonsFogo");
const HabilidadesPokemon_1 = require("../HabilidadesPokemon");
const PokemonsAgua_1 = require("../classes_Pokemon/PokemonsAgua");
const PokemonsGrama_1 = require("../classes_Pokemon/PokemonsGrama");
class EscolherTime {
    static getMeuTime() {
        let continuar = true;
        while (continuar) {
            let escolha = true;
            console.clear();
            console.log("///////////////////////Pokemons///////////////////////////");
            console.log("ID - (1)", " Nome:", CriarPokemons_1.DicionarioPokemon[1].nome, "   Tipo:", CriarPokemons_1.DicionarioPokemon[1].tipo, "      Vida:", CriarPokemons_1.DicionarioPokemon[1].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[1].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[1].energia);
            console.log("ID - (2)", " Nome:", CriarPokemons_1.DicionarioPokemon[2].nome, "   Tipo:", CriarPokemons_1.DicionarioPokemon[2].tipo, "      Vida:", CriarPokemons_1.DicionarioPokemon[2].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[2].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[2].energia);
            console.log("ID - (3)", " Nome:", CriarPokemons_1.DicionarioPokemon[3].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[3].tipo, "     Vida:", CriarPokemons_1.DicionarioPokemon[3].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[3].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[3].energia);
            console.log("ID - (4)", " Nome:", CriarPokemons_1.DicionarioPokemon[4].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[4].tipo, "      Vida:", CriarPokemons_1.DicionarioPokemon[4].vida, "     Velocidade:", CriarPokemons_1.DicionarioPokemon[4].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[4].energia);
            console.log("ID - (5)", " Nome:", CriarPokemons_1.DicionarioPokemon[5].nome, "     Tipo:", CriarPokemons_1.DicionarioPokemon[5].tipo, "  Vida:", CriarPokemons_1.DicionarioPokemon[5].vida, "     Velocidade:", CriarPokemons_1.DicionarioPokemon[5].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[5].energia);
            console.log("ID - (6)", " Nome:", CriarPokemons_1.DicionarioPokemon[6].nome, "     Tipo:", CriarPokemons_1.DicionarioPokemon[6].tipo, "    Vida:", CriarPokemons_1.DicionarioPokemon[6].vida, "     Velocidade:", CriarPokemons_1.DicionarioPokemon[6].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[6].energia);
            console.log("ID - (7)", " Nome:", CriarPokemons_1.DicionarioPokemon[7].nome, "   Tipo:", CriarPokemons_1.DicionarioPokemon[7].tipo, "      Vida:", CriarPokemons_1.DicionarioPokemon[7].vida, "     Velocidade:", CriarPokemons_1.DicionarioPokemon[7].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[7].energia);
            console.log("ID - (8)", " Nome:", CriarPokemons_1.DicionarioPokemon[8].nome, "      Tipo:", CriarPokemons_1.DicionarioPokemon[8].tipo, "      Vida:", CriarPokemons_1.DicionarioPokemon[8].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[8].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[8].energia);
            console.log("ID - (9)", " Nome:", CriarPokemons_1.DicionarioPokemon[9].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[9].tipo, "      Vida:", CriarPokemons_1.DicionarioPokemon[9].vida, "     Velocidade:", CriarPokemons_1.DicionarioPokemon[9].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[9].energia);
            console.log("ID - (10)", "Nome:", CriarPokemons_1.DicionarioPokemon[10].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[10].tipo, "      Vida:", CriarPokemons_1.DicionarioPokemon[10].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[10].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[10].energia);
            console.log("ID - (11)", "Nome:", CriarPokemons_1.DicionarioPokemon[11].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[11].tipo, "      Vida:", CriarPokemons_1.DicionarioPokemon[11].vida, "     Velocidade:", CriarPokemons_1.DicionarioPokemon[11].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[11].energia);
            console.log("ID - (12)", "Nome:", CriarPokemons_1.DicionarioPokemon[12].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[12].tipo, "     Vida:", CriarPokemons_1.DicionarioPokemon[12].vida, "     Velocidade:", CriarPokemons_1.DicionarioPokemon[12].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[12].energia);
            console.log("ID - (13)", "Nome:", CriarPokemons_1.DicionarioPokemon[13].nome, "   Tipo:", CriarPokemons_1.DicionarioPokemon[13].tipo, "     Vida:", CriarPokemons_1.DicionarioPokemon[13].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[13].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[13].energia);
            console.log("ID - (14)", "Nome:", CriarPokemons_1.DicionarioPokemon[14].nome, "  Tipo:", CriarPokemons_1.DicionarioPokemon[14].tipo, "     Vida:", CriarPokemons_1.DicionarioPokemon[14].vida, "     Velocidade:", CriarPokemons_1.DicionarioPokemon[14].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[14].energia);
            console.log("ID - (15)", "Nome:", CriarPokemons_1.DicionarioPokemon[15].nome, "   Tipo:", CriarPokemons_1.DicionarioPokemon[15].tipo, "  Vida:", CriarPokemons_1.DicionarioPokemon[15].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[15].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[15].energia);
            console.log("ID - (16)", "Nome:", CriarPokemons_1.DicionarioPokemon[16].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[16].tipo, "  Vida:", CriarPokemons_1.DicionarioPokemon[16].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[16].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[16].energia);
            console.log("ID - (17)", "Nome:", CriarPokemons_1.DicionarioPokemon[17].nome, "    Tipo:", CriarPokemons_1.DicionarioPokemon[17].tipo, "  Vida:", CriarPokemons_1.DicionarioPokemon[17].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[17].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[17].energia);
            console.log("ID - (18)", "Nome:", CriarPokemons_1.DicionarioPokemon[18].nome, "      Tipo:", CriarPokemons_1.DicionarioPokemon[18].tipo, "    Vida:", CriarPokemons_1.DicionarioPokemon[18].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[18].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[18].energia);
            console.log("ID - (19)", "Nome:", CriarPokemons_1.DicionarioPokemon[19].nome, "   Tipo:", CriarPokemons_1.DicionarioPokemon[19].tipo, "    Vida:", CriarPokemons_1.DicionarioPokemon[19].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[19].velocidade, "     Energia:", CriarPokemons_1.DicionarioPokemon[19].energia);
            console.log("ID - (20)", "Nome:", CriarPokemons_1.DicionarioPokemon[20].nome, "     Tipo:", CriarPokemons_1.DicionarioPokemon[20].tipo, "    Vida:", CriarPokemons_1.DicionarioPokemon[20].vida, "    Velocidade:", CriarPokemons_1.DicionarioPokemon[20].velocidade, "    Energia:", CriarPokemons_1.DicionarioPokemon[20].energia);
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
                                //Instanciando o Pokemon
                                const pokemonFogo = new PokemonsFogo_1.TipoFogo(CriarPokemons_1.DicionarioPokemon[numeroPokemon].nome, CriarPokemons_1.DicionarioPokemon[numeroPokemon].vida, CriarPokemons_1.DicionarioPokemon[numeroPokemon].energia, CriarPokemons_1.DicionarioPokemon[numeroPokemon].velocidade);
                                //Habilidades
                                pokemonFogo.GetHabilidade_1(...HabilidadesPokemon_1.HabilidadesPokemon.Ember());
                                pokemonFogo.GetHabilidade_2(...HabilidadesPokemon_1.HabilidadesPokemon.Flamethrower());
                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = (0, MeusPokemons_1.VerificarPokemon)();
                                if (id_pokemon == 0) {
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else {
                                    (0, MeusPokemons_1.AddMeuPokemon)(id_pokemon, pokemonFogo);
                                }
                            }
                            else if (CriarPokemons_1.DicionarioPokemon[numeroPokemon].tipo == "Água") {
                                //Instanciando o Pokemon
                                const PokemonsAgua = new PokemonsAgua_1.TipoAgua(CriarPokemons_1.DicionarioPokemon[numeroPokemon].nome, CriarPokemons_1.DicionarioPokemon[numeroPokemon].vida, CriarPokemons_1.DicionarioPokemon[numeroPokemon].energia, CriarPokemons_1.DicionarioPokemon[numeroPokemon].velocidade);
                                //Habilidades
                                PokemonsAgua.GetHabilidade_1(...HabilidadesPokemon_1.HabilidadesPokemon.Ember());
                                PokemonsAgua.GetHabilidade_2(...HabilidadesPokemon_1.HabilidadesPokemon.Flamethrower());
                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = (0, MeusPokemons_1.VerificarPokemon)();
                                if (id_pokemon == 0) {
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else {
                                    (0, MeusPokemons_1.AddMeuPokemon)(id_pokemon, PokemonsAgua);
                                }
                            }
                            else if (CriarPokemons_1.DicionarioPokemon[numeroPokemon].tipo == "Grama") {
                                //Instanciando o Pokemon
                                const PokemonsGrama = new PokemonsGrama_1.TipoGrama(CriarPokemons_1.DicionarioPokemon[numeroPokemon].nome, CriarPokemons_1.DicionarioPokemon[numeroPokemon].vida, CriarPokemons_1.DicionarioPokemon[numeroPokemon].energia, CriarPokemons_1.DicionarioPokemon[numeroPokemon].velocidade);
                                //Habilidades
                                PokemonsGrama.GetHabilidade_1(...HabilidadesPokemon_1.HabilidadesPokemon.Ember());
                                PokemonsGrama.GetHabilidade_2(...HabilidadesPokemon_1.HabilidadesPokemon.Flamethrower());
                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = (0, MeusPokemons_1.VerificarPokemon)();
                                if (id_pokemon == 0) {
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else {
                                    (0, MeusPokemons_1.AddMeuPokemon)(id_pokemon, PokemonsGrama);
                                }
                            }
                            else if (CriarPokemons_1.DicionarioPokemon[numeroPokemon].tipo == "Eletrico") {
                                //Instanciando o Pokemon
                                const PokemonsEletrico = new PokemonsGrama_1.TipoGrama(CriarPokemons_1.DicionarioPokemon[numeroPokemon].nome, CriarPokemons_1.DicionarioPokemon[numeroPokemon].vida, CriarPokemons_1.DicionarioPokemon[numeroPokemon].energia, CriarPokemons_1.DicionarioPokemon[numeroPokemon].velocidade);
                                //Habilidades
                                PokemonsEletrico.GetHabilidade_1(...HabilidadesPokemon_1.HabilidadesPokemon.Ember());
                                PokemonsEletrico.GetHabilidade_2(...HabilidadesPokemon_1.HabilidadesPokemon.Flamethrower());
                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = (0, MeusPokemons_1.VerificarPokemon)();
                                if (id_pokemon == 0) {
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else {
                                    (0, MeusPokemons_1.AddMeuPokemon)(id_pokemon, PokemonsEletrico);
                                }
                            }
                            else if (CriarPokemons_1.DicionarioPokemon[numeroPokemon].tipo == "Voador") {
                                //Instanciando o Pokemon
                                const PokemonsVoador = new PokemonsGrama_1.TipoGrama(CriarPokemons_1.DicionarioPokemon[numeroPokemon].nome, CriarPokemons_1.DicionarioPokemon[numeroPokemon].vida, CriarPokemons_1.DicionarioPokemon[numeroPokemon].energia, CriarPokemons_1.DicionarioPokemon[numeroPokemon].velocidade);
                                //Habilidades
                                PokemonsVoador.GetHabilidade_1(...HabilidadesPokemon_1.HabilidadesPokemon.Ember());
                                PokemonsVoador.GetHabilidade_2(...HabilidadesPokemon_1.HabilidadesPokemon.Flamethrower());
                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = (0, MeusPokemons_1.VerificarPokemon)();
                                if (id_pokemon == 0) {
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else {
                                    (0, MeusPokemons_1.AddMeuPokemon)(id_pokemon, PokemonsVoador);
                                }
                            }
                            readlineSync.question("Pressione Enter para continuar...");
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
            }
        }
    }
}
exports.EscolherTime = EscolherTime;
