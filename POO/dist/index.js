"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_de_1 = require("./models/Cachorro_de_");
const Jogo_de_FPS_1 = require("./models/Jogo_de_FPS");
const Filmes_de_Terror_1 = require("./models/Filmes_de_Terror");
const Jogo_de_Soulslike_1 = require("./models/Jogo_de_Soulslike");
// Apresentando o objeto da classe Cachorros
const Cachorro_1 = new Cachorro_de_1.Cachorro_de_("Husky Siberiano", "60 cm", "Corrida", "320 PSI");
Cachorro_1.setfunção("Companhia"); // Modificando atributo protected da classe Cachorros
console.log(`O ${Cachorro_1.raça} tem comprimento de ${Cachorro_1.comprimento} e sua função é ${Cachorro_1.getfunção()} e sua mordida tem força de ${Cachorro_1.mordida}`);
Cachorro_1.Faz_Truque(); // Chamando método da classe Cachorro_de_
// Apresentando o objeto da classe Cachorros
const Cachorro_2 = new Cachorro_de_1.Cachorro_de_("Kangal", "70 cm", "Corrida", "743 PSI");
Cachorro_2.setfunção("Pastoreio"); // Modificando atributo protected da classe Cachorros
Cachorro_2.comprimento = "81 cm"; // Modificando atributo comprimento
console.log(`O ${Cachorro_2.raça} tem comprimento de ${Cachorro_2.comprimento} e sua função é ${Cachorro_2.getfunção()} e sua mordida tem força de ${Cachorro_2.mordida}`);
Cachorro_2.Latir(); // Chamando método da classe Cachorros
// Apresentando o objeto da classe Filmes_de_Terror
const Filme_1 = new Filmes_de_Terror_1.Filmes_de_Terror("Panico", "David Fincher", "1996");
console.log(`O filme é ${Filme_1.nome} do gênero de ${Filme_1.getGenero()} e foi lançado em ${Filme_1.lançamento} pelo diretor ${Filme_1.diretor}\n`);
// Apresentando o objeto da classe Filmes_de_Terror
const Filme_2 = new Filmes_de_Terror_1.Filmes_de_Terror("sexta-feira 13 ", " Sean S. Cunningham", "1980");
console.log(`O filme é ${Filme_2.nome} do gênero de ${Filme_2.getGenero()} e foi lançado em ${Filme_2.lançamento} pelo diretor ${Filme_2.diretor}\n`);
// Apresentando o objeto da classe Jogo_de_FPS
const Jogo_1 = new Jogo_de_FPS_1.Jogo_de_FPS("Counter Strike", "Valve", "1999");
console.log(`O jogo é ${Jogo_1.nome} do gênero de ${Jogo_1.genero} e foi lançado em ${Jogo_1.lançamento} pela ${Jogo_1.distribuido}`);
Jogo_1.Jogando(); // Chamando o método da classe Jogo_de_FPS
// Apresentando o objeto da classe Jogo_de_Soulslike
const Jogo_2 = new Jogo_de_Soulslike_1.Jogo_de_Soulslike("Sekiro", "FromSoftware", "2019");
console.log(`O jogo é ${Jogo_2.nome} do gênero de ${Jogo_2.genero} e foi lançado em ${Jogo_2.lançamento} pela ${Jogo_2.distribuido}`);
Jogo_2.Jogando(); // Chamando o método da classe Jogo_de_Soulslike
