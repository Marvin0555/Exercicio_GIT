// Classe dos Jogos
class Jogos {
    nome: string;
    genero: string;
    distribuido: string;
    lançamento: string;

    constructor(nome: string, genero: string, distribuido: string, lançamento: string) {
        this.nome = nome;
        this.genero = genero;
        this.distribuido = distribuido;
        this.lançamento = lançamento;
    }

    Jogando():void{
        console.log("Jogando jogo aleatorio"); ;
    }
}

// Classe dos Filmes, tem a implementação do Encapsulamento
class Filmes {
    nome: string;
    protected genero: string = "Terror";
    diretor: string;
    lançamento: string;

    constructor(nome: string, diretor: string, lançamento: string) {
        this.nome = nome;
        this.diretor = diretor;
        this.lançamento = lançamento;
    }
    
    getGenero() {
        return this.genero; 
    }

    setGenero(genero: string) {
        this.genero = genero;
    }
}

// Classe dos Cachorros
class Cachorros {
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

// Classe de herança da Superclasse Cachorros
class Cachorro_de_ extends Cachorros {
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

// Classe de herança da Superclasse Jogos
class Jogo_de_FPS extends Jogos {
    // Construtor da classe Jogo_de_FPS
    constructor(nome: string, distribuido: string, lançamento: string, genero: string = "FPS") {
        super(nome, genero, distribuido, lançamento);
    }

    //Faz um Polimorfismo da classe Jogo_de_FPS
    Jogando(): void {
        console.log("Jogando um FPS");
    }
}

// Classe de herança da Superclasse Jogos
class Jogo_de_Soulslike extends Jogos {
    // Construtor da classe Jogo_de_Soulslike
    constructor(nome: string, distribuido: string, lancamento: string, genero: string = "Soulslike") {
        super(nome, genero, distribuido, lancamento);
    }

    Jogando(): void {
        console.log("Jogando um Soulslike");
    }
}

// Classe de herança da Superclasse Filmes
class  Filmes_de_Terror extends Filmes {
    // Construtor da classe Filmes_de_Terror
    constructor(nome: string, diretor: string, lancamento: string) {
        super(nome, diretor, lancamento);
    }
}

// Apresentando o objeto da classe Cachorros
const Cachorro_1 = new Cachorro_de_("Husky Siberiano", "60 cm", "Corrida", "320 PSI");
Cachorro_1.setfunção("Companhia"); // Modificando atributo protected da classe Cachorros
console.log(`O ${Cachorro_1.raça} tem comprimento de ${Cachorro_1.comprimento} e sua função é ${Cachorro_1.getfunção()} e sua mordida tem força de ${Cachorro_1.mordida}`);
Cachorro_1.Faz_Truque(); // Chamando método da classe Cachorro_de_

// Apresentando o objeto da classe Cachorros
const Cachorro_2 = new Cachorro_de_("Kangal", "70 cm", "Corrida", "743 PSI");
Cachorro_2.setfunção("Pastoreio"); // Modificando atributo protected da classe Cachorros
Cachorro_2.comprimento = "81 cm"; // Modificando atributo comprimento
console.log(`O ${Cachorro_2.raça} tem comprimento de ${Cachorro_2.comprimento} e sua função é ${Cachorro_2.getfunção()} e sua mordida tem força de ${Cachorro_2.mordida}`);
Cachorro_2.Latir(); // Chamando método da classe Cachorros

// Apresentando o objeto da classe Filmes_de_Terror
const Filme_1 = new Filmes_de_Terror("Panico", "David Fincher", "1996");
console.log(`O filme é ${Filme_1.nome} do gênero de ${Filme_1.getGenero()} e foi lançado em ${Filme_1.lançamento} pelo diretor ${Filme_1.diretor}\n`);

// Apresentando o objeto da classe Filmes_de_Terror
const Filme_2 = new Filmes_de_Terror("sexta-feira 13 ", " Sean S. Cunningham", "1980");
console.log(`O filme é ${Filme_2.nome} do gênero de ${Filme_2.getGenero()} e foi lançado em ${Filme_2.lançamento} pelo diretor ${Filme_2.diretor}\n`);

// Apresentando o objeto da classe Jogo_de_FPS
const Jogo_1 = new Jogo_de_FPS("Counter Strike", "Valve", "1999");
console.log(`O jogo é ${Jogo_1.nome} do gênero de ${Jogo_1.genero} e foi lançado em ${Jogo_1.lançamento} pela ${Jogo_1.distribuido}`);
Jogo_1.Jogando(); // Chamando o método da classe Jogo_de_FPS

// Apresentando o objeto da classe Jogo_de_Soulslike
const Jogo_2 = new Jogo_de_Soulslike("Sekiro", "FromSoftware", "2019");
console.log(`O jogo é ${Jogo_2.nome} do gênero de ${Jogo_2.genero} e foi lançado em ${Jogo_2.lançamento} pela ${Jogo_2.distribuido}`);
Jogo_2.Jogando(); // Chamando o método da classe Jogo_de_Soulslike
