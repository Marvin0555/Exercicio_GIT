import { Jogos } from "./Jogos";

// Classe de herança da Superclasse Jogos
export class Jogo_de_Soulslike extends Jogos {
    // Construtor da classe Jogo_de_Soulslike
    constructor(nome: string, distribuido: string, lancamento: string, genero: string = "Soulslike") {
        super(nome, genero, distribuido, lancamento);
    }

    Jogando(): void {
        console.log("Jogando um Soulslike");
    }
}
