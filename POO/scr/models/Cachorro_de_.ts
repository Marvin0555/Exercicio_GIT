import { Cachorros } from "./Cachorros";

// Classe de herança da Superclasse Cachorros
export class Cachorro_de_ extends Cachorros {
    // Construtor da classe Cachorro_de_Poodle
    constructor(raça: string, comprimento: string,função : string, mordida: string) {
        super(raça, comprimento,função, mordida);
    }

    setfunção(novafun: string) {
        this.função = novafun;
    }

    getfunção() {
        return this.função;
    }

    Faz_Truque(): void {
        console.log("Faz truque de cachorro \n"); 
    }
}
