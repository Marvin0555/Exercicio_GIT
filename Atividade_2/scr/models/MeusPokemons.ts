
import * as readlineSync from 'readline-sync';

// Criando um dicionário com os meus pokemons

    export const MeusPokemons_Dicionario: { [ID: number]: any } = {};
    
    export function VerificarPokemon():number{

    // Obtendo os IDs dos Pokémons
    const idsDosPokemons = Object.keys(MeusPokemons_Dicionario).map(Number);

    // Encontrando o menor número ausente
    const intervaloEsperado = Array.from({ length: 6 }, (_, index) => index + 1);
    const idsAusentes = intervaloEsperado.filter(id => !idsDosPokemons.includes(id));

        if (idsAusentes.length > 0) {
            const menorNumeroAusente = Math.min(...idsAusentes);
            return menorNumeroAusente;
        } else {
            return 0;
        }
    }

export function AddMeuPokemon(ID: number, Pokemon: any){
    MeusPokemons_Dicionario[ID] = Pokemon;
}
export function RemoveMeuPokemon(){
    while (true) {
        const ID: string = readlineSync.question("Digite o numero do Pokemon que deseja remover: ");
        const existe = MeusPokemons_Dicionario.hasOwnProperty(Number(ID));
        if (!existe) {
            console.log("O ID informado não existe");
            readlineSync.question("Pressione Enter para continuar...");
            break;
        }
        else {
            delete MeusPokemons_Dicionario[Number(ID)];
            break;
        }
    }
}
export function GetMeuPokemon() {
    Object.keys(MeusPokemons_Dicionario).forEach(id => ImprimirDadosDoPokemon(Number(id)));
}
export function ImprimirDadosDoPokemon(ID: number) {
    console.log(`
    ++++++++++++++++++++++++++++++++++++++++++++++++
     Pokemon ${ID}: ${MeusPokemons_Dicionario[ID].nome}
     Tipo: ${MeusPokemons_Dicionario[ID].tipo}
     Vida: ${MeusPokemons_Dicionario[ID].vida.toString()}
     Energia: ${MeusPokemons_Dicionario[ID].energia.toString()}
     Velocidade: ${MeusPokemons_Dicionario[ID].velocidade.toString()}
    ++++++++++++++++++++++++++++++++++++++++++++++++
    `);
}
export function HabilidadePokemon(){
    while (true) {
        const ID: string = readlineSync.question("Digite o numero do Pokemon: ");
        const existe = MeusPokemons_Dicionario.hasOwnProperty(Number(ID));
        if (!existe) {
            console.log("O ID informado não existe");
            break;
        }
        else {
            MeusPokemons_Dicionario[Number(ID)].Habilidade1();
            MeusPokemons_Dicionario[Number(ID)].Habilidade2();
            MeusPokemons_Dicionario[Number(ID)].Habilidade3();
            MeusPokemons_Dicionario[Number(ID)].Habilidade4();
            break;
        }
    }
}
