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
exports.imprimirDadosDoPokemon = exports.GetMeuPokemon = exports.RemoveMeuPokemon = exports.AddMeuPokemon = exports.VerificarPokemon = exports.MeusPokemons_Dicionario = void 0;
const readlineSync = __importStar(require("readline-sync"));
// Criando um dicionário com os meus pokemons
exports.MeusPokemons_Dicionario = {};
function VerificarPokemon() {
    // Obtendo os IDs dos Pokémons
    const idsDosPokemons = Object.keys(exports.MeusPokemons_Dicionario).map(Number);
    // Verificando quantos IDs existem
    //console.log(`Total de Pokémons: ${idsDosPokemons.length}`);
    //console.log(`IDs dos Pokémons: ${idsDosPokemons.join(', ')}`);
    // Encontrando o menor número ausente
    const intervaloEsperado = Array.from({ length: 6 }, (_, index) => index + 1);
    const idsAusentes = intervaloEsperado.filter(id => !idsDosPokemons.includes(id));
    if (idsAusentes.length > 0) {
        const menorNumeroAusente = Math.min(...idsAusentes);
        //console.log(`Menor número ausente: ${menorNumeroAusente}`);
        return menorNumeroAusente;
    }
    else {
        //console.log("Todos os IDs estão presentes no intervalo.");
        return 0;
    }
}
exports.VerificarPokemon = VerificarPokemon;
function AddMeuPokemon(ID, Pokemon) {
    exports.MeusPokemons_Dicionario[ID] = Pokemon;
}
exports.AddMeuPokemon = AddMeuPokemon;
function RemoveMeuPokemon(ID) {
    delete exports.MeusPokemons_Dicionario[ID];
}
exports.RemoveMeuPokemon = RemoveMeuPokemon;
function GetMeuPokemon() {
    console.clear();
    Object.keys(exports.MeusPokemons_Dicionario).forEach(id => imprimirDadosDoPokemon(Number(id)));
    readlineSync.question("Pressione Enter para continuar...");
}
exports.GetMeuPokemon = GetMeuPokemon;
function imprimirDadosDoPokemon(ID) {
    console.log(`
    ++++++++++++++++++++++++++++++++++++++++++++++++
     Pokemon ${ID}: ${exports.MeusPokemons_Dicionario[ID].nome}
     Tipo: ${exports.MeusPokemons_Dicionario[ID].tipo}
     Vida: ${exports.MeusPokemons_Dicionario[ID].vida.toString()}
     Energia: ${exports.MeusPokemons_Dicionario[ID].energia.toString()}
     Velocidade: ${exports.MeusPokemons_Dicionario[ID].velocidade.toString()}
    ++++++++++++++++++++++++++++++++++++++++++++++++
    `);
    exports.MeusPokemons_Dicionario[ID].Habilidade1();
    exports.MeusPokemons_Dicionario[ID].Habilidade2();
}
exports.imprimirDadosDoPokemon = imprimirDadosDoPokemon;
