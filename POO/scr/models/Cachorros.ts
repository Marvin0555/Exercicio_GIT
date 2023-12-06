// Classe dos Cachorros
export class Cachorros {
    raça: string;
    comprimento: string;
    protected função: string;
    mordida: string;

    constructor(raça: string, comprimento: string,função : string, mordida: string) {
        this.raça = raça;
        this.comprimento = comprimento;
        this.função = função;
        this.mordida = mordida;
    }

    Mordida(): void {
        console.log("Mordendo");
    }

    Latir(): void {
        console.log("Latindo\n");
    }

}