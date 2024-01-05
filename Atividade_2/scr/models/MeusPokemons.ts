
import * as readlineSync from 'readline-sync';

// Criando um dicionário com os meus pokemons

    export const MeusPokemons_Dicionario: { [ID: number]: any } = {};
    
    export function VerificarPokemon():number{

    // Obtendo os IDs dos Pokémons
    const idsDosPokemons = Object.keys(MeusPokemons_Dicionario).map(Number);

    // Verificando quantos IDs existem
    //console.log(`Total de Pokémons: ${idsDosPokemons.length}`);
    //console.log(`IDs dos Pokémons: ${idsDosPokemons.join(', ')}`);

    // Encontrando o menor número ausente
    const intervaloEsperado = Array.from({ length: 6 }, (_, index) => index + 1);
    const idsAusentes = intervaloEsperado.filter(id => !idsDosPokemons.includes(id));

        if (idsAusentes.length > 0) {
            const menorNumeroAusente = Math.min(...idsAusentes);
            //console.log(`Menor número ausente: ${menorNumeroAusente}`);
            return menorNumeroAusente;
        } else {
            //console.log("Todos os IDs estão presentes no intervalo.");
            return 0;
        }
    }

export function AddMeuPokemon(ID: number, Pokemon: any){
    MeusPokemons_Dicionario[ID] = Pokemon;
}
export function RemoveMeuPokemon(ID: number) {
    delete MeusPokemons_Dicionario[ID];
}
export function GetMeuPokemon() {
    Object.keys(MeusPokemons_Dicionario).forEach(id => imprimirDadosDoPokemon(Number(id)));
    readlineSync.question("Pressione Enter para continuar...");
}
export function imprimirDadosDoPokemon(ID: number) {
    console.log(`
    ++++++++++++++++++++++++++++++++++++++++++++++++
     Pokemon ${ID}: ${MeusPokemons_Dicionario[ID].nome}
     Tipo: ${MeusPokemons_Dicionario[ID].tipo}
     Vida: ${MeusPokemons_Dicionario[ID].vida.toString()}
     Energia: ${MeusPokemons_Dicionario[ID].energia.toString()}
     Velocidade: ${MeusPokemons_Dicionario[ID].velocidade.toString()}
    ++++++++++++++++++++++++++++++++++++++++++++++++
    `);
    MeusPokemons_Dicionario[ID].Habilidade1();
    MeusPokemons_Dicionario[ID].Habilidade2();
    
}
