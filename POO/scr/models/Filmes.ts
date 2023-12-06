// Classe dos Filmes, tem a implementação do Encapsulamento
export class Filmes {
    nome: string;
    private genero: string = "Terror";
    diretor: string;
    lançamento: string;

    constructor(nome: string, diretor: string, lançamento: string) {
        this.nome = nome;
        this.diretor = diretor;
        this.lançamento = lançamento;
    }
    
    getGenero() {
        return this.genero; 
    }

    setGenero(genero: string) {
        this.genero = genero;
    }
}