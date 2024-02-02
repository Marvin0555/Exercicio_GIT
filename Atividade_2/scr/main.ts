import { MenuMain } from "./models/telas/TelaMenu";
import "./models/CriarPokemons"
import "reflect-metadata"
import { DataSource } from "typeorm";
import { TodosPokemons } from "./models/classes_Pokemon/Pokemons";
import { TipoFogo } from "./models/classes_Pokemon/PokemonsFogo";
import { TipoAgua } from "./models/classes_Pokemon/PokemonsAgua";
import { TipoEletrico } from "./models/classes_Pokemon/PokemonsEletrico";
import { TipoGrama } from "./models/classes_Pokemon/PokemonsGrama";
import { TipoVoador } from "./models/classes_Pokemon/PokemonsVoador";
import { EscolherTime } from "./models/telas/TelaEscolherTime";
import { TelaBatalha } from "./models/telas/TelaBatalha";
import { HabilidadesPokemon } from "./models/HabilidadesPokemon";
import { TelaMeuPokemons } from "./models/telas/TelaMeuPokemons";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "dbtest",
    synchronize: true,
    logging: true,
    entities: [TodosPokemons, TipoFogo, TipoAgua, TipoEletrico, TipoGrama, TipoVoador, MenuMain,EscolherTime,TelaBatalha,HabilidadesPokemon, TelaMeuPokemons],
    subscribers: [],
    migrations: [],
})
AppDataSource.initialize().then(() => {
       console.log("Data Source has been initialized!")
    }).catch((error) => console.log(error))

MenuMain.Tela();