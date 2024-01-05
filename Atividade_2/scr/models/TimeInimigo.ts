import { DicionarioPokemon } from "./CriarPokemons";
import { TodosPokemons } from "./classes_Pokemon/Pokemons";
import * as readlineSync from 'readline-sync';
import { TipoFogo } from "./classes_Pokemon/PokemonsFogo";

export const InimigoPokemons_Dicionario: { [ID: number]: any } = {};

export function gerarNumerosAleatorios(): number[] {
    const numerosAleatorios: number[] = [];
  
    for (let i = 0; i < 3; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
      numerosAleatorios.push(numeroAleatorio);
    }
  
    return numerosAleatorios;
}

export function TimeInimigo() {
    const PokemonsAleatorios: number[] = gerarNumerosAleatorios();
    
    //const Pokemons1 = new TodosPokemons(DicionarioPokemon[PokemonsAleatorios[0]].nome,DicionarioPokemon[PokemonsAleatorios[0]].tipo, DicionarioPokemon[PokemonsAleatorios[0]].vida, DicionarioPokemon[PokemonsAleatorios[0]].energia, DicionarioPokemon[PokemonsAleatorios[0]].velocidade);
    const Pokemon1 = new TipoFogo(DicionarioPokemon[PokemonsAleatorios[0]].nome, DicionarioPokemon[PokemonsAleatorios[0]].vida, DicionarioPokemon[PokemonsAleatorios[0]].energia, DicionarioPokemon[PokemonsAleatorios[0]].velocidade);
    const Pokemon2 = new TipoFogo(DicionarioPokemon[PokemonsAleatorios[1]].nome, DicionarioPokemon[PokemonsAleatorios[1]].vida, DicionarioPokemon[PokemonsAleatorios[1]].energia, DicionarioPokemon[PokemonsAleatorios[1]].velocidade);
    const Pokemon3 = new TipoFogo(DicionarioPokemon[PokemonsAleatorios[2]].nome, DicionarioPokemon[PokemonsAleatorios[2]].vida, DicionarioPokemon[PokemonsAleatorios[2]].energia, DicionarioPokemon[PokemonsAleatorios[2]].velocidade);
    AddInimigoPokemon(1, Pokemon1);
    AddInimigoPokemon(2, Pokemon2);
    AddInimigoPokemon(3, Pokemon3);
    console.clear();
    console.log("////////////////////////////////////////Time Inimigo///////////////////////////////////////");
    GetInimigoPokemon();
    readlineSync.question("Pressione Enter para continuar...");
}

export function GetInimigoPokemon() {
    Object.keys(InimigoPokemons_Dicionario).forEach(id => ImprimirDadosDoPokemonInimigo(Number(id)));
}

export function AddInimigoPokemon(ID: number, Pokemon: any){
    InimigoPokemons_Dicionario[ID] = Pokemon;
}

export function ImprimirDadosDoPokemonInimigo(ID: number) {
    console.log(`
    ++++++++++++++++++++++++++++++++++++++++++++++++
     Pokemon ${ID}: ${DicionarioPokemon[ID].nome}
     Tipo: ${DicionarioPokemon[ID].tipo}
     Vida: ${DicionarioPokemon[ID].vida.toString()}
     Energia: ${DicionarioPokemon[ID].energia.toString()}
     Velocidade: ${DicionarioPokemon[ID].velocidade.toString()}
    ++++++++++++++++++++++++++++++++++++++++++++++++
    `);
}