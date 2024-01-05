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

    Habilidade1(nome:string, dano:number, testo:string, prioridade:number){
        console.log("Habilidade 1");
    }

    Habilidade2(nome:string, dano:number, testo:string, prioridade:number){
        console.log("Habilidade 2");
    }
    Habilidade3(nome:string, dano:number, testo:string, prioridade:number){
        console.log("Habilidade 3");
    }
    Habilidade4(nome:string, dano:number, testo:string, prioridade:number){
        console.log("Habilidade 4");
    }

}

