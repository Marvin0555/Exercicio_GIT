import { EscolherTime } from "../telas/TelaEscolherTime";
import { TodosPokemons } from "./Pokemons";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TipoEletrico extends TodosPokemons{
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=>EscolherTime, (escolherTime)=>escolherTime.Pokemon)
    escolherTime: EscolherTime
    constructor(nome:string, vida:number, energia:number,velocidade:number,tipo: string ="Életrico"){
        super(nome, tipo, vida, energia,velocidade);
    }

}

