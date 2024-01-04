
import * as readlineSync from 'readline-sync';

// Criando uma lista vazia
export let MeusPokemons_List: string[] = [];

// Adicionando itens na lista
export function AddMeuPokemon(ID: string) {
    MeusPokemons_List.push(ID);
}
export function RemoveMeuPokemon(ID: string) {
    MeusPokemons_List.splice(MeusPokemons_List.indexOf(ID), 1);
}
export function GetMeuPokemon() {
    console.log(MeusPokemons_List);
    readlineSync.question("Pressione Enter para continuar...");

}
