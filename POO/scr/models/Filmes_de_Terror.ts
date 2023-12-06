import { Filmes } from "./Filmes";

// Classe de herança da Superclasse Filmes
export class  Filmes_de_Terror extends Filmes {
    // Construtor da classe Filmes_de_Terror
    constructor(nome: string, diretor: string, lancamento: string) {
        super(nome, diretor, lancamento);
    }
}