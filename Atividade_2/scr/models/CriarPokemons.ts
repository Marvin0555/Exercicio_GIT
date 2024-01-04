import { TipoFogo } from "./PokemonsFogo";
import {HabilidadesPokemon} from "./HabilidadesPokemon";

// Dicionário simples fora de uma classe
export const DicionarioPokemon: { [ID: number]: any } = {};

export const Charizard = new TipoFogo("Charizard", 80, 100, 90);
Charizard.GetHabilidade_1(...HabilidadesPokemon.Ember());
Charizard.GetHabilidade_2(...HabilidadesPokemon.Flamethrower());

const Arcanine = new TipoFogo("Arcanine", 90, 95, 100);
Arcanine.GetHabilidade_1(...HabilidadesPokemon.Ember());
Arcanine.GetHabilidade_2(...HabilidadesPokemon.Flamethrower());

DicionarioPokemon[1] = Charizard;
DicionarioPokemon[4] = Arcanine

console.log(DicionarioPokemon[1].nome, DicionarioPokemon[1].tipo, DicionarioPokemon[1].vida, DicionarioPokemon[1].velocidade, DicionarioPokemon[1].energia);
console.log(DicionarioPokemon[4].nome, DicionarioPokemon[4].tipo, DicionarioPokemon[4].vida, DicionarioPokemon[4].velocidade, DicionarioPokemon[4].energia);


//1: { nome: "Charizard", tipo: "Fogo", vida: 80, energia: 100, velocidade: 90,  },
//2: { nome: "Blastoise", tipo: "Água", vida: 85, energia: 95, velocidade: 78 },
//3: { nome: "Venusaur", tipo: "Grama", vida: 92, energia: 88, velocidade: 82 },
//4: { nome: "Arcanine", tipo: "Fogo", vida: 90, energia: 95, velocidade: 100 }