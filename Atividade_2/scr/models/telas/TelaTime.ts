import { Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Time {
    @PrimaryGeneratedColumn()
    id: number;
    getMeuTime() {
        console.log("///////////////////////Meu time///////////////////////////");
    }
}