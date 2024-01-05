import {HabilidadesPokemon} from "./HabilidadesPokemon";

// Dicionário simples fora de uma classe
export const DicionarioPokemon: { [ID: number]: { nome: string, tipo: string, vida: number, energia: number, velocidade: number, habilidade_1: any, habilidade_2: any } } = {};
DicionarioPokemon[1] = { nome: "Charizard", tipo: "Fogo", vida: 100, energia: 100, velocidade: 90,habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[2] = { nome: "Blastoise", tipo: "Água", vida: 110, energia: 85, velocidade: 82, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[3] = { nome: "Venusaur", tipo: "Grama", vida: 120, energia: 95, velocidade: 75, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[4] = { nome: "Arcanine", tipo: "Fogo", vida: 90, energia: 95, velocidade: 100, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[5] = { nome: "Pikachu", tipo: "Eletrico", vida: 80, energia: 120, velocidade: 115, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[6] = { nome: "Pidgeot", tipo: "Voador", vida: 90, energia: 100, velocidade: 120, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[7] = { nome: "Infernape", tipo: "Fogo", vida: 90, energia: 85, velocidade: 130, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[8] = { nome: "Emboar", tipo: "Fogo", vida: 120, energia: 90, velocidade: 85, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[9] = { nome: "Greninja", tipo: "Água", vida: 85, energia: 110, velocidade: 120, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[10] = { nome: "Swampert", tipo: "Água", vida: 120, energia: 80, velocidade: 95, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[11] = { nome: "Vaporeon", tipo: "Água", vida: 80, energia: 120, velocidade: 110, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[12] = { nome: "Sceptile", tipo: "Grama", vida: 95, energia: 95, velocidade: 120, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[13] = { nome: "Vileplume", tipo: "Grama", vida: 110, energia: 100, velocidade: 90, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[14] = { nome: "Victreebel", tipo: "Grama", vida: 90, energia: 140, velocidade: 80, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[15] = { nome: "Eletivire", tipo: "Eletrico", vida: 100, energia: 90, velocidade: 100, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[16] = { nome: "Magneton", tipo: "Eletrico", vida: 110, energia: 120, velocidade: 85, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[17] = { nome: "Ampharos" , tipo: "Eletrico", vida: 100, energia: 100, velocidade: 95, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[18] = { nome: "Fearow", tipo: "Voador", vida: 110, energia: 90, velocidade: 100, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[19] = { nome: "Dragonite", tipo: "Voador", vida: 120, energia: 80, velocidade: 90, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
DicionarioPokemon[20] = { nome: "Scyther", tipo: "Voador", vida: 100, energia: 100, velocidade: 100, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower() };
//console.log(DicionarioPokemon[1].nome, DicionarioPokemon[1].tipo, DicionarioPokemon[1].vida, DicionarioPokemon[1].velocidade, DicionarioPokemon[1].energia);
//console.log(DicionarioPokemon[4].nome, DicionarioPokemon[4].tipo, DicionarioPokemon[4].vida, DicionarioPokemon[4].velocidade, DicionarioPokemon[4].energia);

/*
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
*/