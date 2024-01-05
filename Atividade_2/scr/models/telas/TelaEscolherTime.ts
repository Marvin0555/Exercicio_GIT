import * as readlineSync from 'readline-sync';
import { DicionarioPokemon} from "../CriarPokemons";
import { AddMeuPokemon, VerificarPokemon } from '../MeusPokemons';
import { TipoFogo } from '../classes_Pokemon/PokemonsFogo';
import {HabilidadesPokemon} from '../HabilidadesPokemon';
import { TipoAgua } from '../classes_Pokemon/PokemonsAgua';
import { TipoGrama } from '../classes_Pokemon/PokemonsGrama';

export class EscolherTime{
    
    static getMeuTime() {
        let continuar = true;

        while (continuar) {
            let escolha = true
            console.clear();
            console.log("///////////////////////Pokemons///////////////////////////");
            console.log("ID - (1)" ," Nome:",DicionarioPokemon[1].nome, "   Tipo:", DicionarioPokemon[1].tipo, "      Vida:", DicionarioPokemon[1].vida, "    Velocidade:", DicionarioPokemon[1].velocidade, "     Energia:", DicionarioPokemon[1].energia);
            console.log("ID - (2)" ," Nome:",DicionarioPokemon[2].nome, "   Tipo:", DicionarioPokemon[2].tipo, "      Vida:", DicionarioPokemon[2].vida, "    Velocidade:", DicionarioPokemon[2].velocidade, "     Energia:", DicionarioPokemon[2].energia);
            console.log("ID - (3)" ," Nome:",DicionarioPokemon[3].nome, "    Tipo:", DicionarioPokemon[3].tipo, "     Vida:", DicionarioPokemon[3].vida, "    Velocidade:", DicionarioPokemon[3].velocidade, "     Energia:", DicionarioPokemon[3].energia);
            console.log("ID - (4)" ," Nome:",DicionarioPokemon[4].nome, "    Tipo:", DicionarioPokemon[4].tipo, "      Vida:", DicionarioPokemon[4].vida, "     Velocidade:", DicionarioPokemon[4].velocidade, "    Energia:", DicionarioPokemon[4].energia);
            console.log("ID - (5)" ," Nome:",DicionarioPokemon[5].nome, "     Tipo:", DicionarioPokemon[5].tipo, "  Vida:", DicionarioPokemon[5].vida, "     Velocidade:", DicionarioPokemon[5].velocidade, "    Energia:", DicionarioPokemon[5].energia);
            console.log("ID - (6)" ," Nome:",DicionarioPokemon[6].nome, "     Tipo:", DicionarioPokemon[6].tipo, "    Vida:", DicionarioPokemon[6].vida, "     Velocidade:", DicionarioPokemon[6].velocidade, "    Energia:", DicionarioPokemon[6].energia);
            console.log("ID - (7)" ," Nome:",DicionarioPokemon[7].nome, "   Tipo:", DicionarioPokemon[7].tipo, "      Vida:", DicionarioPokemon[7].vida, "     Velocidade:", DicionarioPokemon[7].velocidade, "    Energia:", DicionarioPokemon[7].energia);
            console.log("ID - (8)" ," Nome:",DicionarioPokemon[8].nome, "      Tipo:", DicionarioPokemon[8].tipo, "      Vida:", DicionarioPokemon[8].vida, "    Velocidade:", DicionarioPokemon[8].velocidade, "     Energia:", DicionarioPokemon[8].energia);
            console.log("ID - (9)" ," Nome:",DicionarioPokemon[9].nome, "    Tipo:", DicionarioPokemon[9].tipo, "      Vida:", DicionarioPokemon[9].vida, "     Velocidade:", DicionarioPokemon[9].velocidade, "    Energia:", DicionarioPokemon[9].energia);
            console.log("ID - (10)" ,"Nome:",DicionarioPokemon[10].nome, "    Tipo:", DicionarioPokemon[10].tipo, "      Vida:", DicionarioPokemon[10].vida, "    Velocidade:", DicionarioPokemon[10].velocidade, "     Energia:", DicionarioPokemon[10].energia);
            console.log("ID - (11)" ,"Nome:",DicionarioPokemon[11].nome, "    Tipo:", DicionarioPokemon[11].tipo, "      Vida:", DicionarioPokemon[11].vida, "     Velocidade:", DicionarioPokemon[11].velocidade, "    Energia:", DicionarioPokemon[11].energia);
            console.log("ID - (12)" ,"Nome:",DicionarioPokemon[12].nome, "    Tipo:", DicionarioPokemon[12].tipo, "     Vida:", DicionarioPokemon[12].vida, "     Velocidade:", DicionarioPokemon[12].velocidade, "    Energia:", DicionarioPokemon[12].energia);
            console.log("ID - (13)" ,"Nome:",DicionarioPokemon[13].nome, "   Tipo:", DicionarioPokemon[13].tipo, "     Vida:", DicionarioPokemon[13].vida, "    Velocidade:", DicionarioPokemon[13].velocidade, "     Energia:", DicionarioPokemon[13].energia);
            console.log("ID - (14)" ,"Nome:",DicionarioPokemon[14].nome, "  Tipo:", DicionarioPokemon[14].tipo, "     Vida:", DicionarioPokemon[14].vida, "     Velocidade:", DicionarioPokemon[14].velocidade, "     Energia:", DicionarioPokemon[14].energia);
            console.log("ID - (15)" ,"Nome:",DicionarioPokemon[15].nome, "   Tipo:", DicionarioPokemon[15].tipo, "  Vida:", DicionarioPokemon[15].vida, "    Velocidade:", DicionarioPokemon[15].velocidade, "    Energia:", DicionarioPokemon[15].energia);
            console.log("ID - (16)" ,"Nome:",DicionarioPokemon[16].nome, "    Tipo:", DicionarioPokemon[16].tipo, "  Vida:", DicionarioPokemon[16].vida, "    Velocidade:", DicionarioPokemon[16].velocidade, "     Energia:", DicionarioPokemon[16].energia);
            console.log("ID - (17)" ,"Nome:",DicionarioPokemon[17].nome, "    Tipo:", DicionarioPokemon[17].tipo, "  Vida:", DicionarioPokemon[17].vida, "    Velocidade:", DicionarioPokemon[17].velocidade, "     Energia:", DicionarioPokemon[17].energia);
            console.log("ID - (18)" ,"Nome:",DicionarioPokemon[18].nome, "      Tipo:", DicionarioPokemon[18].tipo, "    Vida:", DicionarioPokemon[18].vida, "    Velocidade:", DicionarioPokemon[18].velocidade, "    Energia:", DicionarioPokemon[18].energia);
            console.log("ID - (19)" ,"Nome:",DicionarioPokemon[19].nome, "   Tipo:", DicionarioPokemon[19].tipo, "    Vida:", DicionarioPokemon[19].vida, "    Velocidade:", DicionarioPokemon[19].velocidade, "     Energia:", DicionarioPokemon[19].energia);
            console.log("ID - (20)" ,"Nome:",DicionarioPokemon[20].nome, "     Tipo:", DicionarioPokemon[20].tipo, "    Vida:", DicionarioPokemon[20].vida, "    Velocidade:", DicionarioPokemon[20].velocidade, "    Energia:", DicionarioPokemon[20].energia);

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
                const habilidade_3 = DicionarioPokemon[numeroPokemon].habilidade_3;
                const habilidade_4 = DicionarioPokemon[numeroPokemon].habilidade_4;

                console.log(`\nVocê escolheu o Pokémon: `, DicionarioPokemon[numeroPokemon].nome, "\n");
                console.log("Habilidade 1:", habilidade_1[0], " // " , "Dano da Habilidade:", habilidade_1[1], " // " , "Custo da Habilidade:", habilidade_1[2], " // " , "Prioridade da Habilidade:", habilidade_1[4]);
                console.log(habilidade_1[3]);
                console.log("\n");
                console.log("Habilidade 2:", habilidade_2[0], " // " , "Dano da Habilidade:", habilidade_2[1], " // " , "Custo da Habilidade:", habilidade_2[2], " // " , "Prioridade da Habilidade:", habilidade_2[4]);
                console.log(habilidade_2[3]);
                console.log("\n");
                console.log("Habilidade 3:", habilidade_3[0], " // " , "Dano da Habilidade:", habilidade_3[1], " // " , "Custo da Habilidade:", habilidade_3[2], " // " , "Prioridade da Habilidade:", habilidade_3[4]);
                console.log(habilidade_3[3]);
                console.log("\n");
                console.log("Habilidade 4:", habilidade_4[0], " // " , "Dano da Habilidade:", habilidade_4[1], " // " , "Custo da Habilidade:", habilidade_4[2], " // " , "Prioridade da Habilidade:", habilidade_4[4]);
                console.log(habilidade_4[3]);
                console.log("\n");

                while(escolha){
                    const confirmar: string = readlineSync.question("Digite s para confirmar ou n para cancelar a escolha: ");
                    switch (confirmar){
                        case "s":
                            console.log("Escolha confirmada");
                            if (DicionarioPokemon[numeroPokemon].tipo == "Fogo"){
                                //Instanciando o Pokemon
                                const PokemonFogo = new TipoFogo(DicionarioPokemon[numeroPokemon].nome, DicionarioPokemon[numeroPokemon].vida, DicionarioPokemon[numeroPokemon].energia, DicionarioPokemon[numeroPokemon].velocidade);
                                
                                //Habilidades
                                PokemonFogo.GetHabilidade_1(habilidade_1[0],habilidade_1[1],habilidade_1[2], habilidade_1[3], habilidade_1[4]);
                                PokemonFogo.GetHabilidade_2(habilidade_2[0],habilidade_2[1],habilidade_2[2], habilidade_2[3], habilidade_2[4]);
                                PokemonFogo.GetHabilidade_3(habilidade_3[0],habilidade_3[1],habilidade_3[2], habilidade_3[3], habilidade_3[4]);
                                PokemonFogo.GetHabilidade_4(habilidade_4[0],habilidade_4[1],habilidade_4[2], habilidade_4[3], habilidade_4[4]);

                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = VerificarPokemon();
                                if (id_pokemon == 0){
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else{
                                    AddMeuPokemon(id_pokemon,PokemonFogo);
                                }
                            }
                            else if(DicionarioPokemon[numeroPokemon].tipo == "Água"){
                                //Instanciando o Pokemon
                                const PokemonsAgua = new TipoAgua(DicionarioPokemon[numeroPokemon].nome, DicionarioPokemon[numeroPokemon].vida, DicionarioPokemon[numeroPokemon].energia, DicionarioPokemon[numeroPokemon].velocidade);
                                
                                //Habilidades
                                PokemonsAgua.GetHabilidade_1(habilidade_1[0],habilidade_1[1],habilidade_1[2], habilidade_1[3], habilidade_1[4]);
                                PokemonsAgua.GetHabilidade_2(habilidade_2[0],habilidade_2[1],habilidade_2[2], habilidade_2[3], habilidade_2[4]);
                                PokemonsAgua.GetHabilidade_3(habilidade_3[0],habilidade_3[1],habilidade_3[2], habilidade_3[3], habilidade_3[4]);
                                PokemonsAgua.GetHabilidade_4(habilidade_4[0],habilidade_4[1],habilidade_4[2], habilidade_4[3], habilidade_4[4]);

                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = VerificarPokemon();
                                if (id_pokemon == 0){
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else{
                                    AddMeuPokemon(id_pokemon,PokemonsAgua);
                                }
                            }
                            else if(DicionarioPokemon[numeroPokemon].tipo == "Grama"){
                                //Instanciando o Pokemon
                                const PokemonsGrama = new TipoGrama(DicionarioPokemon[numeroPokemon].nome, DicionarioPokemon[numeroPokemon].vida, DicionarioPokemon[numeroPokemon].energia, DicionarioPokemon[numeroPokemon].velocidade);
                                
                                //Habilidades
                                PokemonsGrama.GetHabilidade_1(habilidade_1[0],habilidade_1[1],habilidade_1[2], habilidade_1[3], habilidade_1[4]);
                                PokemonsGrama.GetHabilidade_2(habilidade_2[0],habilidade_2[1],habilidade_2[2], habilidade_2[3], habilidade_2[4]);
                                PokemonsGrama.GetHabilidade_3(habilidade_3[0],habilidade_3[1],habilidade_3[2], habilidade_3[3], habilidade_3[4]);
                                PokemonsGrama.GetHabilidade_4(habilidade_4[0],habilidade_4[1],habilidade_4[2], habilidade_4[3], habilidade_4[4]);

                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = VerificarPokemon();
                                if (id_pokemon == 0){
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else{
                                    AddMeuPokemon(id_pokemon,PokemonsGrama);
                                }
                            }
                            else if(DicionarioPokemon[numeroPokemon].tipo == "Eletrico"){
                                //Instanciando o Pokemon
                                const PokemonsEletrico = new TipoGrama(DicionarioPokemon[numeroPokemon].nome, DicionarioPokemon[numeroPokemon].vida, DicionarioPokemon[numeroPokemon].energia, DicionarioPokemon[numeroPokemon].velocidade);
                                
                                //Habilidades
                                PokemonsEletrico.GetHabilidade_1(habilidade_1[0],habilidade_1[1],habilidade_1[2], habilidade_1[3], habilidade_1[4]);
                                PokemonsEletrico.GetHabilidade_2(habilidade_2[0],habilidade_2[1],habilidade_2[2], habilidade_2[3], habilidade_2[4]);
                                PokemonsEletrico.GetHabilidade_3(habilidade_3[0],habilidade_3[1],habilidade_3[2], habilidade_3[3], habilidade_3[4]);
                                PokemonsEletrico.GetHabilidade_4(habilidade_4[0],habilidade_4[1],habilidade_4[2], habilidade_4[3], habilidade_4[4]);

                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = VerificarPokemon();
                                if (id_pokemon == 0){
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else{
                                    AddMeuPokemon(id_pokemon,PokemonsEletrico);
                                }
                            }
                            else if(DicionarioPokemon[numeroPokemon].tipo == "Voador"){
                                //Instanciando o Pokemon
                                const PokemonsVoador = new TipoGrama(DicionarioPokemon[numeroPokemon].nome, DicionarioPokemon[numeroPokemon].vida, DicionarioPokemon[numeroPokemon].energia, DicionarioPokemon[numeroPokemon].velocidade);
                                
                                //Habilidades
                                PokemonsVoador.GetHabilidade_1(habilidade_1[0],habilidade_1[1],habilidade_1[2], habilidade_1[3], habilidade_1[4]);
                                PokemonsVoador.GetHabilidade_2(habilidade_2[0],habilidade_2[1],habilidade_2[2], habilidade_2[3], habilidade_2[4]);
                                PokemonsVoador.GetHabilidade_3(habilidade_3[0],habilidade_3[1],habilidade_3[2], habilidade_3[3], habilidade_3[4]);
                                PokemonsVoador.GetHabilidade_4(habilidade_4[0],habilidade_4[1],habilidade_4[2], habilidade_4[3], habilidade_4[4]);
                                
                                //Adicionando o Pokemon ao Time e verificando se o time contem 6 pokemons
                                const id_pokemon = VerificarPokemon();
                                if (id_pokemon == 0){
                                    console.log("Seu time ja contém 6 pokemons, nao foi possivel adicionar mais");
                                }
                                else{
                                    AddMeuPokemon(id_pokemon,PokemonsVoador);
                                }
                            }
                            readlineSync.question("Pressione Enter para continuar...");
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
            }
        }
    }
}