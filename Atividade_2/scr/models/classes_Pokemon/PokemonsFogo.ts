import { EscolherTime } from "../telas/TelaEscolherTime";
import { TodosPokemons } from "./Pokemons";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TipoFogo extends TodosPokemons{
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=>EscolherTime, (escolherTime)=>escolherTime.Pokemon)
    escolherTime: EscolherTime
    constructor(nome:string, vida:number, energia:number,velocidade:number,tipo: string ="Fogo"){
        super(nome, tipo, vida, energia,velocidade);
    }
}

export function PokemonsFogo(nome:string, vida:number, energia:number, velocidade:number) {
    const Pokemon_modelo_fogo = new TodosPokemons(nome, "Fogo", vida, energia, velocidade);
    const Pokemon_Fogo = Pokemon_modelo_fogo.clone();
    return Pokemon_Fogo
}