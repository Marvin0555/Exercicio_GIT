import { Jogos } from "./Jogos";

// Classe de herança da Superclasse Jogos
export class Jogo_de_FPS extends Jogos {
    // Construtor da classe Jogo_de_FPS
    constructor(nome: string, distribuido: string, lançamento: string, genero: string = "FPS") {
        super(nome, genero, distribuido, lançamento);
    }

    //Faz um Polimorfismo da classe Jogo_de_FPS
    Jogando(): void {
        console.log("Jogando um FPS");
    }
}