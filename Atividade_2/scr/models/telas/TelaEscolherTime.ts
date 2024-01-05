import * as readlineSync from 'readline-sync';
import { DicionarioPokemon} from "../CriarPokemons";
import { AddMeuPokemon, VerificarPokemon } from '../MeusPokemons';
import { TipoFogo } from '../PokemonsFogo';
import {HabilidadesPokemon} from '../HabilidadesPokemon';

export class EscolherTime{
    
    static getMeuTime() {
        let continuar = true;

        while (continuar) {
            let escolha = true
            console.clear();
            console.log("///////////////////////Pokemons///////////////////////////");
            console.log("ID - (1)" ,"Nome:",DicionarioPokemon[1].nome, "    Tipo:", DicionarioPokemon[1].tipo, "    Vida:", DicionarioPokemon[1].vida, "    Velocidade:", DicionarioPokemon[1].velocidade, "    Energia:", DicionarioPokemon[1].energia);
            //console.log("ID - (2)" ,"Nome:",DicionarioPokemon[2].nome, "    Tipo:", DicionarioPokemon[2].tipo, "    Vida:", DicionarioPokemon[2].vida, "    Velocidade:", DicionarioPokemon[2].velocidade, "    Energia:", DicionarioPokemon[2].energia);
            //console.log("ID - (3)" ,"Nome:",DicionarioPokemon[3].nome, "    Tipo:", DicionarioPokemon[3].tipo, "    Vida:", DicionarioPokemon[3].vida, "    Velocidade:", DicionarioPokemon[3].velocidade, "    Energia:", DicionarioPokemon[3].energia);
            console.log("ID - (4)" ,"Nome:",DicionarioPokemon[4].nome, "    Tipo:", DicionarioPokemon[4].tipo, "    Vida:", DicionarioPokemon[4].vida, "    Velocidade:", DicionarioPokemon[4].velocidade, "    Energia:", DicionarioPokemon[4].energia);

            const pokemon: string = readlineSync.question("\nEscolha o Pokemon que deseja usar selecionando o ID dele ou digite 21 para sair: ");
            const numeroPokemon: number = parseInt(pokemon);
            if (isNaN(numeroPokemon) || numeroPokemon < 1 || numeroPokemon > 21) {
                console.log("\nPor favor, escolha um número de ID valido \n");
                readlineSync.question("Pressione Enter para continuar...");
            }else if (numeroPokemon === 21) {
                console.log("Sair");
                continuar = false;   
            }else {
                console.clear();
                const habilidade_1 = DicionarioPokemon[numeroPokemon].habilidade_1;
                const habilidade_2 = DicionarioPokemon[numeroPokemon].habilidade_2;

                console.log(`\nVocê escolheu o Pokémon: `, DicionarioPokemon[numeroPokemon].nome, "\n");
                console.log("Habilidade 1:", habilidade_1[0], " // " , "Dano da Habilidade:", habilidade_1[1], " // " , "Prioridade da Habilidade:", habilidade_1[2]);
                console.log("\n");
                console.log("Habilidade 2:", habilidade_2[0], " // " , "Dano da Habilidade:", habilidade_2[1], " // " , "Prioridade da Habilidade:", habilidade_2[2]);
                console.log("\n");

                while(escolha){
                    const confirmar: string = readlineSync.question("Digite s para confirmar ou n para cancelar a escolha: ");
                    switch (confirmar){
                        case "s":
                            console.log("Escolha confirmada");
                            
                            if (DicionarioPokemon[numeroPokemon].tipo == "Fogo"){
                                const pokemonFogo = new TipoFogo(DicionarioPokemon[numeroPokemon].nome, DicionarioPokemon[numeroPokemon].vida, DicionarioPokemon[numeroPokemon].energia, DicionarioPokemon[numeroPokemon].velocidade);
                                pokemonFogo.GetHabilidade_1(...HabilidadesPokemon.Ember());
                                pokemonFogo.GetHabilidade_2(...HabilidadesPokemon.Flamethrower());
                                const id_pokemon = VerificarPokemon();
                                if (id_pokemon == 0){
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else{
                                    AddMeuPokemon(id_pokemon,pokemonFogo);
                                }
                                readlineSync.question("Pressione Enter para continuar...");
                            }
                            escolha = false;
                            break;
                        case "n":
                            console.log("Escolha cancelada");
                            readlineSync.question("Pressione Enter para continuar...");
                            escolha = false;
                            break;
                        default:
                            console.log("Opção inválida");
                    }

                }

                // Restante do seu código para lidar com a escolha válida do usuário.
            }
        }
    }
}