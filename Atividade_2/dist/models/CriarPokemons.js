"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charizard = exports.DicionarioPokemon = void 0;
const PokemonsFogo_1 = require("./PokemonsFogo");
const HabilidadesPokemon_1 = require("./HabilidadesPokemon");
// Dicionário simples fora de uma classe
exports.DicionarioPokemon = {};
exports.Charizard = new PokemonsFogo_1.TipoFogo("Charizard", 80, 100, 90);
exports.Charizard.GetHabilidade_1(...HabilidadesPokemon_1.HabilidadesPokemon.Ember());
exports.Charizard.GetHabilidade_2(...HabilidadesPokemon_1.HabilidadesPokemon.Flamethrower());
const Arcanine = new PokemonsFogo_1.TipoFogo("Arcanine", 90, 95, 100);
Arcanine.GetHabilidade_1(...HabilidadesPokemon_1.HabilidadesPokemon.Ember());
Arcanine.GetHabilidade_2(...HabilidadesPokemon_1.HabilidadesPokemon.Flamethrower());
exports.DicionarioPokemon[1] = exports.Charizard;
exports.DicionarioPokemon[4] = Arcanine;
console.log(exports.DicionarioPokemon[1].nome, exports.DicionarioPokemon[1].tipo, exports.DicionarioPokemon[1].vida, exports.DicionarioPokemon[1].velocidade, exports.DicionarioPokemon[1].energia);
console.log(exports.DicionarioPokemon[4].nome, exports.DicionarioPokemon[4].tipo, exports.DicionarioPokemon[4].vida, exports.DicionarioPokemon[4].velocidade, exports.DicionarioPokemon[4].energia);
//1: { nome: "Charizard", tipo: "Fogo", vida: 80, energia: 100, velocidade: 90,  },
//2: { nome: "Blastoise", tipo: "Água", vida: 85, energia: 95, velocidade: 78 },
//3: { nome: "Venusaur", tipo: "Grama", vida: 92, energia: 88, velocidade: 82 },
//4: { nome: "Arcanine", tipo: "Fogo", vida: 90, energia: 95, velocidade: 100 }
