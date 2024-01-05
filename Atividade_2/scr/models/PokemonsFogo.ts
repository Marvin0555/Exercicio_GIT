import { TodosPokemons } from "./Pokemons";
import { HabilidadesPokemon } from "./HabilidadesPokemon";
export class TipoFogo extends TodosPokemons{
    Habilidade1_nome:string = "";
    Habilidade1_dano:number = 0;
    Habilidade1_testo:string = "";
    Habilidade1_prioridade:number = 0;
    Habilidade2_nome:string = "";
    Habilidade2_dano:number = 0;
    Habilidade2_testo:string = "";
    Habilidade2_prioridade:number = 0;
    Habilidade3_nome:string = "";
    Habilidade3_dano:number = 0;
    Habilidade3_testo:string = "";
    Habilidade3_prioridade:number = 0;
    Habilidade4_nome:string = "";
    Habilidade4_dano:number = 0;
    Habilidade4_testo:string = "";
    Habilidade4_prioridade:number = 0;

    
    constructor(nome:string, vida:number, energia:number,velocidade:number,tipo: string ="Fogo"){
        super(nome, tipo, vida, energia,velocidade);
    }

    GetHabilidade_1(nome:string, dano:number, testo:string, prioridade:number):void{
        this.Habilidade1_nome = nome;
        this.Habilidade1_dano = dano;
        this.Habilidade1_testo = testo;
        this.Habilidade1_prioridade = prioridade;
    }

    GetHabilidade_2(nome:string, dano:number, testo:string, prioridade:number):void{
        this.Habilidade2_nome = nome;
        this.Habilidade2_dano = dano;
        this.Habilidade2_testo = testo;
        this.Habilidade2_prioridade = prioridade;
    }
    GetHabilidade_3(nome:string, dano:number, testo:string, prioridade:number){
        this.Habilidade3_nome = nome;
        this.Habilidade3_dano = dano;
        this.Habilidade3_testo = testo;
        this.Habilidade3_prioridade = prioridade;
    }
    GetHabilidade_4(nome:string, dano:number, testo:string, prioridade:number){
        this.Habilidade4_nome = nome;
        this.Habilidade4_dano = dano;
        this.Habilidade4_testo = testo;
        this.Habilidade4_prioridade = prioridade;
    }

    Habilidade1():void{
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade1_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade1_dano} 
    ║   Prioridade: ${this.Habilidade1_prioridade}   
    ║   ${this.Habilidade1_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }

    Habilidade2():void{
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade2_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade2_dano} 
    ║   Prioridade: ${this.Habilidade2_prioridade}   
    ║   ${this.Habilidade2_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }

    Habilidade3():void{
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade3_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade3_dano} 
    ║   Prioridade: ${this.Habilidade3_prioridade}   
    ║   ${this.Habilidade3_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }

    Habilidade_4(nome: string, dano: number, testo: string, prioridade: number): void {
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade4_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade4_dano} 
    ║   Prioridade: ${this.Habilidade4_prioridade}   
    ║   ${this.Habilidade4_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }
}

