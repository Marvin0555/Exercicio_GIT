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
exports.ImprimirDadosDoPokemonInimigo = exports.AddInimigoPokemon = exports.GetInimigoPokemon = exports.TimeInimigo = exports.gerarNumerosAleatorios = exports.InimigoPokemons_Dicionario = void 0;
const CriarPokemons_1 = require("./CriarPokemons");
const Pokemons_1 = require("./classes_Pokemon/Pokemons");
const readlineSync = __importStar(require("readline-sync"));
exports.InimigoPokemons_Dicionario = {};
function gerarNumerosAleatorios() {
    const numerosAleatorios = [];
    for (let i = 0; i < 3; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
        numerosAleatorios.push(numeroAleatorio);
    }
    return numerosAleatorios;
}
exports.gerarNumerosAleatorios = gerarNumerosAleatorios;
function TimeInimigo() {
    const PokemonsAleatorios = gerarNumerosAleatorios();
    console.log(PokemonsAleatorios);
    //const Pokemons1 = new TodosPokemons(DicionarioPokemon[PokemonsAleatorios[0]].nome,DicionarioPokemon[PokemonsAleatorios[0]].tipo, DicionarioPokemon[PokemonsAleatorios[0]].vida, DicionarioPokemon[PokemonsAleatorios[0]].energia, DicionarioPokemon[PokemonsAleatorios[0]].velocidade);
    const Pokemon1 = new Pokemons_1.TodosPokemons(CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[0]].nome, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[0]].tipo, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[0]].vida, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[0]].energia, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[0]].velocidade);
    const Pokemon2 = new Pokemons_1.TodosPokemons(CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[1]].nome, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[1]].tipo, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[1]].vida, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[1]].energia, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[1]].velocidade);
    const Pokemon3 = new Pokemons_1.TodosPokemons(CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[2]].nome, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[2]].tipo, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[2]].vida, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[2]].energia, CriarPokemons_1.DicionarioPokemon[PokemonsAleatorios[2]].velocidade);
    AddInimigoPokemon(1, Pokemon1);
    AddInimigoPokemon(2, Pokemon2);
    AddInimigoPokemon(3, Pokemon3);
    console.clear();
    console.log("////////////////////////////////////////Time Inimigo///////////////////////////////////////");
    console.log(PokemonsAleatorios);
    GetInimigoPokemon();
    readlineSync.question("Pressione Enter para continuar...");
}
exports.TimeInimigo = TimeInimigo;
function GetInimigoPokemon() {
    Object.keys(exports.InimigoPokemons_Dicionario).forEach(id => ImprimirDadosDoPokemonInimigo(Number(id)));
}
exports.GetInimigoPokemon = GetInimigoPokemon;
function AddInimigoPokemon(ID, Pokemon) {
    exports.InimigoPokemons_Dicionario[ID] = Pokemon;
}
exports.AddInimigoPokemon = AddInimigoPokemon;
function ImprimirDadosDoPokemonInimigo(ID) {
    console.log(`
    ++++++++++++++++++++++++++++++++++++++++++++++++
     Pokemon ${ID}: ${exports.InimigoPokemons_Dicionario[ID].nome}
     Tipo: ${exports.InimigoPokemons_Dicionario[ID].tipo}
     Vida: ${exports.InimigoPokemons_Dicionario[ID].vida.toString()}
     Energia: ${exports.InimigoPokemons_Dicionario[ID].energia.toString()}
     Velocidade: ${exports.InimigoPokemons_Dicionario[ID].velocidade.toString()}
    ++++++++++++++++++++++++++++++++++++++++++++++++
    `);
}
exports.ImprimirDadosDoPokemonInimigo = ImprimirDadosDoPokemonInimigo;
