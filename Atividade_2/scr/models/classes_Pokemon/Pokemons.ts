import { Column, Entity, PrimaryGeneratedColumn, OneToOne,JoinColumn, OneToMany} from "typeorm";
import { TipoAgua } from './PokemonsAgua';
import { TipoGrama } from './PokemonsGrama';
import { TipoEletrico } from './PokemonsEletrico';
import { TipoVoador } from './PokemonsVoador';
import { TipoFogo } from "./PokemonsFogo";
import { HabilidadesPokemon } from "../HabilidadesPokemon";
@Entity()
export class TodosPokemons{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    tipo: string;
    @Column()
    vida: number;
    @Column()
    energia: number;
    @Column()
    velocidade: number;
    @Column()
    protected Habilidade1_nome:string = "";
    @Column()
    protected Habilidade1_dano:number = 0;
    @Column()
    protected Habilidade1_energia:number = 0;
    @Column()
    protected Habilidade1_testo:string = "";
    @Column()
    protected Habilidade1_prioridade:number = 0;
    @Column()
    protected Habilidade2_nome:string = "";
    @Column()
    protected Habilidade2_dano:number = 0;
    @Column()
    protected Habilidade2_energia:number = 0;
    @Column()
    protected Habilidade2_testo:string = "";
    @Column()
    protected Habilidade2_prioridade:number = 0;
    @Column()
    protected Habilidade3_nome:string = "";
    @Column()
    protected Habilidade3_dano:number = 0;
    @Column()
    protected Habilidade3_energia:number = 0;
    @Column()
    protected Habilidade3_testo:string = "";
    @Column()
    protected Habilidade3_prioridade:number = 0;
    @Column()
    protected Habilidade4_nome:string = "";
    @Column()
    protected Habilidade4_dano:number = 0;
    @Column()
    protected Habilidade4_energia:number = 0;
    @Column()
    protected Habilidade4_testo:string = "";
    @Column()
    protected Habilidade4_prioridade:number = 0;

    @OneToMany(()=>HabilidadesPokemon, (habilidadesPokemon)=>habilidadesPokemon.pokemon)
    habilidadesPokemon: HabilidadesPokemon[]

    //@OneToOne(() => TipoAgua)
    //@JoinColumn()
    //tipoAgua: TipoAgua

    //@OneToOne(() => TipoEletrico)
    //@JoinColumn()
    //tipoEletrico: TipoEletrico

    //@OneToOne(() => TipoFogo)
    //@JoinColumn()
    //tipoFogo: TipoFogo

    //@OneToOne(() => TipoGrama)
    //@JoinColumn()
    //tipoGrama: TipoGrama

    //@OneToOne(() => TipoVoador)
    //@JoinColumn()
    //tipoVoador: TipoVoador
    

    constructor(nome:string, tipo:string, vida:number, energia:number, velocidade:number){
        this.nome = nome;
        this.tipo = tipo;
        this.vida = vida;
        this.energia = energia;
        this.velocidade = velocidade;   
    }

    GetHabilidade_1(nome:string, dano:number, energia:number,testo:string, prioridade:number):void{
        this.Habilidade1_nome = nome;
        this.Habilidade1_dano = dano;
        this.Habilidade1_energia = energia;
        this.Habilidade1_testo = testo;
        this.Habilidade1_prioridade = prioridade;
    }

    GetHabilidade_2(nome:string, dano:number, energia:number,testo:string, prioridade:number):void{
        this.Habilidade2_nome = nome;
        this.Habilidade2_dano = dano;
        this.Habilidade2_energia = energia;
        this.Habilidade2_testo = testo;
        this.Habilidade2_prioridade = prioridade;
    }
    GetHabilidade_3(nome:string, dano:number, energia:number,testo:string, prioridade:number){
        this.Habilidade3_nome = nome;
        this.Habilidade3_dano = dano;
        this.Habilidade3_energia = energia;
        this.Habilidade3_testo = testo;
        this.Habilidade3_prioridade = prioridade;
    }
    GetHabilidade_4(nome:string, dano:number, energia:number,testo:string, prioridade:number){
        this.Habilidade4_nome = nome;
        this.Habilidade4_dano = dano;
        this.Habilidade4_energia = energia;
        this.Habilidade4_testo = testo;
        this.Habilidade4_prioridade = prioridade;
    }

    Habilidade1():void{
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade1_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade1_dano}
    ║   Energia da Habilidade: ${this.Habilidade1_energia} 
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
    ║   Energia da Habilidade: ${this.Habilidade2_energia}
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
    ║   Energia da Habilidade: ${this.Habilidade3_energia}
    ║   Prioridade: ${this.Habilidade3_prioridade}   
    ║   ${this.Habilidade3_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }

    Habilidade4(): void {
        console.log(`
    ╔════════════════════════════════════════════════
    ║   ${this.Habilidade4_nome}                     
    ║   Dano da Habilidade: ${this.Habilidade4_dano} 
    ║   Energia da Habilidade: ${this.Habilidade4_energia}
    ║   Prioridade: ${this.Habilidade4_prioridade}   
    ║   ${this.Habilidade4_testo}                    
    ╚════════════════════════════════════════════════
        `);
    }

}

