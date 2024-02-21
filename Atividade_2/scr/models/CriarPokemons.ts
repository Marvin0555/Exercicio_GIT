import {Ember, HabilidadesPokemon} from "./HabilidadesPokemon";
import {Faz_Ember, Faz_Flamethrower, Faz_Cut, Faz_Air_Cutter, Faz_Bubble, Faz_Water_Gun, Faz_Thunderbolt, Faz_Thunder, Faz_Leaf_Tornado, Faz_Energy_Ball, Faz_Solar_Beam, Faz_Bite, Faz_Aqua_Tail, Faz_Fire_Fang, Faz_Quick_Attack, Faz_Sky_Attack, Faz_Brave_Bird, Faz_Focus_Blast} from "./Criar_HabilidadesPokemn";

let wqwewq = new Faz_Ember().faz_Crieira();

// Dicionário simples fora de uma classe
export const DicionarioPokemon: { [ID: number]: { nome: string, tipo: string, vida: number, energia: number, velocidade: number, habilidade_1: any, habilidade_2: any, habilidade_3: any, habilidade_4: any } } = {};
DicionarioPokemon[1] = { nome: "Charizard", tipo: "Fogo", vida: 100, energia: 100, velocidade: 90,habilidade_1: new Faz_Ember().faz_Crieira(), habilidade_2: new Faz_Flamethrower().faz_Crieira(), habilidade_3: new Faz_Cut().faz_Crieira(), habilidade_4: new Faz_Air_Cutter().faz_Crieira()};
DicionarioPokemon[2] = { nome: "Blastoise", tipo: "Água", vida: 110, energia: 85, velocidade: 82, habilidade_1: new Faz_Bubble().faz_Crieira(),habilidade_2: new Faz_Water_Gun().faz_Crieira(), habilidade_3: new Faz_Bite().faz_Crieira(), habilidade_4: new Faz_Aqua_Tail().faz_Crieira()};
DicionarioPokemon[3] = { nome: "Venusaur", tipo: "Grama", vida: 120, energia: 95, velocidade: 75, habilidade_1: new Faz_Solar_Beam().faz_Crieira(),habilidade_2: new Faz_Energy_Ball().faz_Crieira(), habilidade_3: new Faz_Leaf_Tornado().faz_Crieira(), habilidade_4: new Faz_Cut().faz_Crieira()};
DicionarioPokemon[4] = { nome: "Arcanine", tipo: "Fogo", vida: 90, energia: 95, velocidade: 100, habilidade_1: new Faz_Ember().faz_Crieira() ,habilidade_2: new Faz_Flamethrower().faz_Crieira(), habilidade_3: new Faz_Bite().faz_Crieira(), habilidade_4: new Faz_Fire_Fang().faz_Crieira()};
DicionarioPokemon[5] = { nome: "Pikachu", tipo: "Eletrico", vida: 80, energia: 120, velocidade: 115, habilidade_1: new Faz_Thunder().faz_Crieira(),habilidade_2: new Faz_Thunderbolt().faz_Crieira(), habilidade_3: new Faz_Quick_Attack().faz_Crieira(), habilidade_4: new Faz_Cut().faz_Crieira()};
DicionarioPokemon[6] = { nome: "Pidgeot", tipo: "Voador", vida: 90, energia: 100, velocidade: 120, habilidade_1: new Faz_Air_Cutter().faz_Crieira(),habilidade_2: new Faz_Sky_Attack().faz_Crieira(), habilidade_3: new Faz_Brave_Bird().faz_Crieira(), habilidade_4: new Faz_Quick_Attack().faz_Crieira()};
DicionarioPokemon[7] = { nome: "Infernape", tipo: "Fogo", vida: 90, energia: 85, velocidade: 130, habilidade_1: new Faz_Ember().faz_Crieira() ,habilidade_2: new Faz_Flamethrower().faz_Crieira(), habilidade_3: new Faz_Quick_Attack().faz_Crieira(), habilidade_4: new Faz_Focus_Blast().faz_Crieira()};
DicionarioPokemon[8] = { nome: "Emboar", tipo: "Fogo", vida: 120, energia: 90, velocidade: 85, habilidade_1: new Faz_Ember().faz_Crieira() ,habilidade_2: new Faz_Flamethrower().faz_Crieira(), habilidade_3: new Faz_Bite().faz_Crieira(), habilidade_4: new Faz_Focus_Blast().faz_Crieira()};
DicionarioPokemon[9] = { nome: "Greninja", tipo: "Água", vida: 85, energia: 110, velocidade: 120, habilidade_1: new Faz_Quick_Attack().faz_Crieira(),habilidade_2: new Faz_Bubble().faz_Crieira(), habilidade_3: new Faz_Water_Gun().faz_Crieira(), habilidade_4: new Faz_Cut().faz_Crieira() };
DicionarioPokemon[10] = { nome: "Swampert", tipo: "Água", vida: 120, energia: 80, velocidade: 95, habilidade_1: new Faz_Water_Gun().faz_Crieira(),habilidade_2: new Faz_Bubble().faz_Crieira(), habilidade_3: new Faz_Quick_Attack().faz_Crieira(), habilidade_4: new Faz_Focus_Blast().faz_Crieira() };
DicionarioPokemon[11] = { nome: "Vaporeon", tipo: "Água", vida: 80, energia: 120, velocidade: 110, habilidade_1: new Faz_Bite().faz_Crieira(),habilidade_2: new Faz_Bubble().faz_Crieira(), habilidade_3: new Faz_Water_Gun().faz_Crieira(), habilidade_4: new Faz_Cut().faz_Crieira() };
DicionarioPokemon[12] = { nome: "Sceptile", tipo: "Grama", vida: 95, energia: 95, velocidade: 120, habilidade_1: new Faz_Quick_Attack().faz_Crieira(),habilidade_2: new Faz_Solar_Beam().faz_Crieira(), habilidade_3: new Faz_Energy_Ball().faz_Crieira(), habilidade_4: new Faz_Cut().faz_Crieira() };
DicionarioPokemon[13] = { nome: "Vileplume", tipo: "Grama", vida: 110, energia: 100, velocidade: 90, habilidade_1: new Faz_Focus_Blast().faz_Crieira(),habilidade_2: new Faz_Solar_Beam().faz_Crieira(), habilidade_3: new Faz_Energy_Ball().faz_Crieira(), habilidade_4: new Faz_Leaf_Tornado().faz_Crieira() };
DicionarioPokemon[14] = { nome: "Victreebel", tipo: "Grama", vida: 90, energia: 140, velocidade: 80, habilidade_1: new Faz_Quick_Attack().faz_Crieira(),habilidade_2: new Faz_Focus_Blast().faz_Crieira(), habilidade_3: new Faz_Thunderbolt().faz_Crieira(), habilidade_4: new Faz_Thunder().faz_Crieira() };
DicionarioPokemon[15] = { nome: "Eletivire", tipo: "Eletrico", vida: 100, energia: 90, velocidade: 100, habilidade_1: new Faz_Thunder().faz_Crieira(),habilidade_2: new Faz_Thunderbolt().faz_Crieira(), habilidade_3: new Faz_Flamethrower().faz_Crieira(), habilidade_4: new Faz_Focus_Blast().faz_Crieira() };
DicionarioPokemon[16] = { nome: "Magneton", tipo: "Eletrico", vida: 110, energia: 120, velocidade: 85, habilidade_1: new Faz_Thunder().faz_Crieira(),habilidade_2: new Faz_Flamethrower().faz_Crieira(), habilidade_3: new Faz_Air_Cutter().faz_Crieira(), habilidade_4: new Faz_Cut().faz_Crieira() };
DicionarioPokemon[17] = { nome: "Ampharos" , tipo: "Eletrico", vida: 100, energia: 100, velocidade: 95, habilidade_1: new Faz_Quick_Attack().faz_Crieira(),habilidade_2: new Faz_Ember().faz_Crieira(), habilidade_3: new Faz_Thunder().faz_Crieira(), habilidade_4: new Faz_Thunderbolt().faz_Crieira() };
DicionarioPokemon[18] = { nome: "Fearow", tipo: "Voador", vida: 110, energia: 90, velocidade: 100, habilidade_1: new Faz_Quick_Attack().faz_Crieira(),habilidade_2: new Faz_Air_Cutter().faz_Crieira(), habilidade_3: new Faz_Brave_Bird().faz_Crieira(), habilidade_4: new Faz_Cut().faz_Crieira() };
DicionarioPokemon[19] = { nome: "Dragonite", tipo: "Voador", vida: 120, energia: 80, velocidade: 90, habilidade_1: new Faz_Ember().faz_Crieira(),habilidade_2: new Faz_Flamethrower().faz_Crieira(), habilidade_3: new Faz_Air_Cutter().faz_Crieira(), habilidade_4: new Faz_Sky_Attack().faz_Crieira() };
DicionarioPokemon[20] = { nome: "Scyther", tipo: "Voador", vida: 100, energia: 100, velocidade: 100, habilidade_1: new Faz_Cut().faz_Crieira(),habilidade_2: new Faz_Quick_Attack().faz_Crieira(), habilidade_3: new Faz_Sky_Attack().faz_Crieira(), habilidade_4: new Faz_Brave_Bird().faz_Crieira() };
//console.log(DicionarioPokemon[1].nome, DicionarioPokemon[1].tipo, DicionarioPokemon[1].vida, DicionarioPokemon[1].velocidade, DicionarioPokemon[1].energia);
//console.log(DicionarioPokemon[4].nome, DicionarioPokemon[4].tipo, DicionarioPokemon[4].vida, DicionarioPokemon[4].velocidade, DicionarioPokemon[4].energia);

/*
export const Charizard = new TipoFogo("Charizard", 80, 100, 90);
Charizard.GetHabilidade_1(...new Faz_Ember().faz_Crieira()
);
Charizard.GetHabilidade_2(...new Faz_Flamethrower().faz_Crieira());

const Arcanine = new TipoFogo("Arcanine", 90, 95, 100);
Arcanine.GetHabilidade_1(...new Faz_Ember().faz_Crieira()
);
Arcanine.GetHabilidade_2(...new Faz_Flamethrower().faz_Crieira());

DicionarioPokemon[1] = Charizard;
DicionarioPokemon[4] = Arcanine

console.log(DicionarioPokemon[1].nome, DicionarioPokemon[1].tipo, DicionarioPokemon[1].vida, DicionarioPokemon[1].velocidade, DicionarioPokemon[1].energia);
console.log(DicionarioPokemon[4].nome, DicionarioPokemon[4].tipo, DicionarioPokemon[4].vida, DicionarioPokemon[4].velocidade, DicionarioPokemon[4].energia);


//1: { nome: "Charizard", tipo: "Fogo", vida: 80, energia: 100, velocidade: 90,  },
//2: { nome: "Blastoise", tipo: "Água", vida: 85, energia: 95, velocidade: 78 },
//3: { nome: "Venusaur", tipo: "Grama", vida: 92, energia: 88, velocidade: 82 },
//4: { nome: "Arcanine", tipo: "Fogo", vida: 90, energia: 95, velocidade: 100 }
*/

console.log(DicionarioPokemon[1].habilidade_1.nome, DicionarioPokemon[1].habilidade_2, DicionarioPokemon[1].habilidade_3, DicionarioPokemon[1].habilidade_4);