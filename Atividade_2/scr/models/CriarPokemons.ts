import {HabilidadesPokemon} from "./HabilidadesPokemon";

// Dicionário simples fora de uma classe
export const DicionarioPokemon: { [ID: number]: { nome: string, tipo: string, vida: number, energia: number, velocidade: number, habilidade_1: any, habilidade_2: any, habilidade_3: any, habilidade_4: any } } = {};
DicionarioPokemon[1] = { nome: "Charizard", tipo: "Fogo", vida: 100, energia: 100, velocidade: 90,habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower(), habilidade_3: HabilidadesPokemon.Cut(), habilidade_4: HabilidadesPokemon.Air_Cutter()};
DicionarioPokemon[2] = { nome: "Blastoise", tipo: "Água", vida: 110, energia: 85, velocidade: 82, habilidade_1: HabilidadesPokemon.Bubble(),habilidade_2: HabilidadesPokemon.Water_Gun(), habilidade_3: HabilidadesPokemon.Bite(), habilidade_4: HabilidadesPokemon.Aqua_Tail()};
DicionarioPokemon[3] = { nome: "Venusaur", tipo: "Grama", vida: 120, energia: 95, velocidade: 75, habilidade_1: HabilidadesPokemon.Solar_Beam(),habilidade_2: HabilidadesPokemon.Energy_Ball(), habilidade_3: HabilidadesPokemon.Leaf_Tornado(), habilidade_4: HabilidadesPokemon.Cut()};
DicionarioPokemon[4] = { nome: "Arcanine", tipo: "Fogo", vida: 90, energia: 95, velocidade: 100, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower(), habilidade_3: HabilidadesPokemon.Bite(), habilidade_4: HabilidadesPokemon.Fire_Fang()};
DicionarioPokemon[5] = { nome: "Pikachu", tipo: "Eletrico", vida: 80, energia: 120, velocidade: 115, habilidade_1: HabilidadesPokemon.Thunder(),habilidade_2: HabilidadesPokemon.Thunderbolt(), habilidade_3: HabilidadesPokemon.Quick_Attack(), habilidade_4: HabilidadesPokemon.Cut()};
DicionarioPokemon[6] = { nome: "Pidgeot", tipo: "Voador", vida: 90, energia: 100, velocidade: 120, habilidade_1: HabilidadesPokemon.Air_Cutter(),habilidade_2: HabilidadesPokemon.Sky_Attack(), habilidade_3: HabilidadesPokemon.Brave_Bird(), habilidade_4: HabilidadesPokemon.Quick_Attack()};
DicionarioPokemon[7] = { nome: "Infernape", tipo: "Fogo", vida: 90, energia: 85, velocidade: 130, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower(), habilidade_3: HabilidadesPokemon.Quick_Attack(), habilidade_4: HabilidadesPokemon.Focus_Blast()};
DicionarioPokemon[8] = { nome: "Emboar", tipo: "Fogo", vida: 120, energia: 90, velocidade: 85, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower(), habilidade_3: HabilidadesPokemon.Bite(), habilidade_4: HabilidadesPokemon.Focus_Blast()};
DicionarioPokemon[9] = { nome: "Greninja", tipo: "Água", vida: 85, energia: 110, velocidade: 120, habilidade_1: HabilidadesPokemon.Quick_Attack(),habilidade_2: HabilidadesPokemon.Bubble(), habilidade_3: HabilidadesPokemon.Water_Gun(), habilidade_4: HabilidadesPokemon.Cut() };
DicionarioPokemon[10] = { nome: "Swampert", tipo: "Água", vida: 120, energia: 80, velocidade: 95, habilidade_1: HabilidadesPokemon.Water_Gun(),habilidade_2: HabilidadesPokemon.Bubble(), habilidade_3: HabilidadesPokemon.Quick_Attack(), habilidade_4: HabilidadesPokemon.Focus_Blast() };
DicionarioPokemon[11] = { nome: "Vaporeon", tipo: "Água", vida: 80, energia: 120, velocidade: 110, habilidade_1: HabilidadesPokemon.Bite(),habilidade_2: HabilidadesPokemon.Bubble(), habilidade_3: HabilidadesPokemon.Water_Gun(), habilidade_4: HabilidadesPokemon.Cut() };
DicionarioPokemon[12] = { nome: "Sceptile", tipo: "Grama", vida: 95, energia: 95, velocidade: 120, habilidade_1: HabilidadesPokemon.Quick_Attack(),habilidade_2: HabilidadesPokemon.Solar_Beam(), habilidade_3: HabilidadesPokemon.Energy_Ball(), habilidade_4: HabilidadesPokemon.Cut() };
DicionarioPokemon[13] = { nome: "Vileplume", tipo: "Grama", vida: 110, energia: 100, velocidade: 90, habilidade_1: HabilidadesPokemon.Focus_Blast(),habilidade_2: HabilidadesPokemon.Solar_Beam(), habilidade_3: HabilidadesPokemon.Energy_Ball(), habilidade_4: HabilidadesPokemon.Leaf_Tornado() };
DicionarioPokemon[14] = { nome: "Victreebel", tipo: "Grama", vida: 90, energia: 140, velocidade: 80, habilidade_1: HabilidadesPokemon.Quick_Attack(),habilidade_2: HabilidadesPokemon.Focus_Blast(), habilidade_3: HabilidadesPokemon.Thunderbolt(), habilidade_4: HabilidadesPokemon.Thunder() };
DicionarioPokemon[15] = { nome: "Eletivire", tipo: "Eletrico", vida: 100, energia: 90, velocidade: 100, habilidade_1: HabilidadesPokemon.Thunder(),habilidade_2: HabilidadesPokemon.Thunderbolt(), habilidade_3: HabilidadesPokemon.Flamethrower(), habilidade_4: HabilidadesPokemon.Focus_Blast() };
DicionarioPokemon[16] = { nome: "Magneton", tipo: "Eletrico", vida: 110, energia: 120, velocidade: 85, habilidade_1: HabilidadesPokemon.Thunder(),habilidade_2: HabilidadesPokemon.Flamethrower(), habilidade_3: HabilidadesPokemon.Air_Cutter(), habilidade_4: HabilidadesPokemon.Cut() };
DicionarioPokemon[17] = { nome: "Ampharos" , tipo: "Eletrico", vida: 100, energia: 100, velocidade: 95, habilidade_1: HabilidadesPokemon.Quick_Attack(),habilidade_2: HabilidadesPokemon.Ember(), habilidade_3: HabilidadesPokemon.Thunder(), habilidade_4: HabilidadesPokemon.Thunderbolt() };
DicionarioPokemon[18] = { nome: "Fearow", tipo: "Voador", vida: 110, energia: 90, velocidade: 100, habilidade_1: HabilidadesPokemon.Quick_Attack(),habilidade_2: HabilidadesPokemon.Air_Cutter(), habilidade_3: HabilidadesPokemon.Brave_Bird(), habilidade_4: HabilidadesPokemon.Cut() };
DicionarioPokemon[19] = { nome: "Dragonite", tipo: "Voador", vida: 120, energia: 80, velocidade: 90, habilidade_1: HabilidadesPokemon.Ember(),habilidade_2: HabilidadesPokemon.Flamethrower(), habilidade_3: HabilidadesPokemon.Air_Cutter(), habilidade_4: HabilidadesPokemon.Sky_Attack() };
DicionarioPokemon[20] = { nome: "Scyther", tipo: "Voador", vida: 100, energia: 100, velocidade: 100, habilidade_1: HabilidadesPokemon.Cut(),habilidade_2: HabilidadesPokemon.Quick_Attack(), habilidade_3: HabilidadesPokemon.Sky_Attack(), habilidade_4: HabilidadesPokemon.Brave_Bird() };
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