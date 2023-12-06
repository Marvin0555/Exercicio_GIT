// Classe dos Jogos
export class Jogos {
    nome: string;
    genero: string;
    distribuido: string;
    lançamento: string;

    constructor(nome: string, genero: string, distribuido: string, lançamento: string) {
        this.nome = nome;
        this.genero = genero;
        this.distribuido = distribuido;
        this.lançamento = lançamento;
    }

    Jogando():void{
        console.log("Jogando jogo aleatorio"); ;
    }
}