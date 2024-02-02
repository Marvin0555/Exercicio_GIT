import {GetMeuPokemon} from "../MeusPokemons";
import * as readlineSync from 'readline-sync';
import {RemoveMeuPokemon, HabilidadePokemon} from "../MeusPokemons";
import { Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TelaMeuPokemons {
    @PrimaryGeneratedColumn()
    id: number;
    static Tela() {
        let continuar = true;

        while (continuar) {
            console.clear();
            console.log("/////////////////////////////////////Meu time////////////////////////////////////////");
            GetMeuPokemon();
            console.log("1- Remover Pokemon");
            console.log("2 - Habilidades do Pokemon");
            console.log("3 - Sair");

            const userInput: string = readlineSync.question("Escolha uma opção: ");
            console.clear();

            switch (userInput) {
                case "1":
                    RemoveMeuPokemon();
                    break;
                case "2":
                    HabilidadePokemon()
                    readlineSync.question("Pressione Enter para continuar...");
                    break;
                case "3":
                    continuar = false; // Sair do loop
                    break;
                default:
                    console.log("Opção inválida");
                    readlineSync.question("Pressione Enter para continuar...");
                    break;
            }
        }
    }
}


