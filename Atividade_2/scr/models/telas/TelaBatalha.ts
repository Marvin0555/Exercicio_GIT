import { TimeInimigo } from "../TimeInimigo";
import { Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TelaBatalha {
    @PrimaryGeneratedColumn()
    id: number;
    static Tela() {
        console.log("Batalha");
        TimeInimigo();
    }
}