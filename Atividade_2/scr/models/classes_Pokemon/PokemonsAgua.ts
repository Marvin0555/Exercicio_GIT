import { EscolherTime } from "../telas/TelaEscolherTime";
import { TodosPokemons } from "./Pokemons";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TipoAgua extends TodosPokemons{
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=>EscolherTime, (escolherTime)=>escolherTime.Pokemon)
    escolherTime: EscolherTime
    constructor(nome:string, vida:number, energia:number,velocidade:number,tipo: string ="Água"){
        super(nome, tipo, vida, energia,velocidade);
    }
}

export function PokemonsAgua(nome:string, vida:number, energia:number, velocidade:number) {
    const Pokemon_modelo_agua = new TodosPokemons(nome, "Água", vida, energia, velocidade);
    const Pokemon_Agua = Pokemon_modelo_agua.clone();
    return Pokemon_Agua
}



