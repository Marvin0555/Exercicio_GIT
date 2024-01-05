import * as readlineSync from 'readline-sync';
import {EscolherTime} from "./TelaEscolherTime";
import {GetMeuPokemon} from "../MeusPokemons";
export class MenuMain {
    static Tela() {
        let continuar = true;

        while (continuar) {
            // Limpa a tela (pode não funcionar em todos os terminais/sistemas operacionais)
            console.clear();

            console.log("/////////////////////////////////////Menu do jogo////////////////////////////////////");
            console.log("1 - Meu time");
            console.log("2 - Escolher Pokemons");
            console.log("3 - Batalhar");
            console.log("4 - Sair");

            const userInput: string = readlineSync.question("Digite alguma coisa: ");

            switch (userInput) {
                case "1":
                    console.log("Meu time");
                    GetMeuPokemon()
                    break;
                case "2":
                    console.log("Escolher Pokemons");
                    EscolherTime.getMeuTime();
                    // Tela de escolha de pokemons
                    break;
                case "3":
                    console.log("Batalhar");
                    break;
                case "4":
                    console.log("Sair");
                    continuar = false; // Sair do loop
                    break;
                default:
                    console.log("Opção inválida");
                    readlineSync.question("Pressione Enter para continuar...");
                    break;
            }
            // Aguarda que o usuário pressione Enter
            //readlineSync.keyInPause({ prompt: `Pressione Enter para continuar...`, mask: '', hideEchoBack: true });
        }
    }
}



