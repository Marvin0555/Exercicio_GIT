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
exports.HabilidadePokemon = exports.ImprimirDadosDoPokemon = exports.GetMeuPokemon = exports.RemoveMeuPokemon = exports.AddMeuPokemon = exports.VerificarPokemon = exports.MeusPokemons_Dicionario = void 0;
const readlineSync = __importStar(require("readline-sync"));
// Criando um dicionário com os meus pokemons
exports.MeusPokemons_Dicionario = {};
function VerificarPokemon() {
    // Obtendo os IDs dos Pokémons
    const idsDosPokemons = Object.keys(exports.MeusPokemons_Dicionario).map(Number);
    // Encontrando o menor número ausente
    const intervaloEsperado = Array.from({ length: 6 }, (_, index) => index + 1);
    const idsAusentes = intervaloEsperado.filter(id => !idsDosPokemons.includes(id));
    if (idsAusentes.length > 0) {
        const menorNumeroAusente = Math.min(...idsAusentes);
        return menorNumeroAusente;
    }
    else {
        return 0;
    }
}
exports.VerificarPokemon = VerificarPokemon;
function AddMeuPokemon(ID, Pokemon) {
    exports.MeusPokemons_Dicionario[ID] = Pokemon;
}
exports.AddMeuPokemon = AddMeuPokemon;
function RemoveMeuPokemon() {
    while (true) {
        const ID = readlineSync.question("Digite o numero do Pokemon que deseja remover: ");
        const existe = exports.MeusPokemons_Dicionario.hasOwnProperty(Number(ID));
        if (!existe) {
            console.log("O ID informado não existe");
            readlineSync.question("Pressione Enter para continuar...");
            break;
        }
        else {
            delete exports.MeusPokemons_Dicionario[Number(ID)];
            break;
        }
    }
}
exports.RemoveMeuPokemon = RemoveMeuPokemon;
function GetMeuPokemon() {
    Object.keys(exports.MeusPokemons_Dicionario).forEach(id => ImprimirDadosDoPokemon(Number(id)));
}
exports.GetMeuPokemon = GetMeuPokemon;
function ImprimirDadosDoPokemon(ID) {
    console.log(`
    ++++++++++++++++++++++++++++++++++++++++++++++++
     Pokemon ${ID}: ${exports.MeusPokemons_Dicionario[ID].nome}
     Tipo: ${exports.MeusPokemons_Dicionario[ID].tipo}
     Vida: ${exports.MeusPokemons_Dicionario[ID].vida.toString()}
     Energia: ${exports.MeusPokemons_Dicionario[ID].energia.toString()}
     Velocidade: ${exports.MeusPokemons_Dicionario[ID].velocidade.toString()}
    ++++++++++++++++++++++++++++++++++++++++++++++++
    `);
}
exports.ImprimirDadosDoPokemon = ImprimirDadosDoPokemon;
function HabilidadePokemon() {
    while (true) {
        const ID = readlineSync.question("Digite o numero do Pokemon: ");
        const existe = exports.MeusPokemons_Dicionario.hasOwnProperty(Number(ID));
        if (!existe) {
            console.log("O ID informado não existe");
            break;
        }
        else {
            exports.MeusPokemons_Dicionario[Number(ID)].Habilidade1();
            exports.MeusPokemons_Dicionario[Number(ID)].Habilidade2();
            exports.MeusPokemons_Dicionario[Number(ID)].Habilidade3();
            exports.MeusPokemons_Dicionario[Number(ID)].Habilidade4();
            break;
        }
    }
}
exports.HabilidadePokemon = HabilidadePokemon;
