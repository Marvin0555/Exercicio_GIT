import { EscolherTime } from "../telas/TelaEscolherTime";
import { TodosPokemons } from "./Pokemons";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TipoGrama extends TodosPokemons{
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=>EscolherTime, (escolherTime)=>escolherTime.Pokemon)
    escolherTime: EscolherTime
    constructor(nome:string, vida:number, energia:number,velocidade:number,tipo: string ="Grama"){
        super(nome, tipo, vida, energia,velocidade);
    }
}
export function PokemonsGrama(nome:string, vida:number, energia:number, velocidade:number) {
    const Pokemon_modelo_grama = new TodosPokemons(nome, "Grama", vida, energia, velocidade);
    const Pokemon_Grama = Pokemon_modelo_grama.clone();
    return Pokemon_Grama
}
