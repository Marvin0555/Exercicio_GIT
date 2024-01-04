export class TodosPokemons{
    nome: string;
    tipo: string;
    vida: number;
    energia: number;
    velocidade: number;

    constructor(nome:string, tipo:string, vida:number, energia:number, velocidade:number){
        this.nome = nome;
        this.tipo = tipo;
        this.vida = vida;
        this.energia = energia;
        this.velocidade = velocidade;   
    }

    Habilidade_1(nome:string, dano:number, testo:string, prioridade:number){
        console.log("Habilidade 1");
    }

    Habilidade_2(nome:string, dano:number, testo:string, prioridade:number){
        console.log("Habilidade 2");
    }
    Habilidade_3(nome:string, dano:number, testo:string, prioridade:number){
        console.log("Habilidade 3");
    }
    Habilidade_4(nome:string, dano:number, testo:string, prioridade:number){
        console.log("Habilidade 4");
    }

}

