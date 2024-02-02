"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const TelaMenu_1 = require("./models/telas/TelaMenu");
require("./models/CriarPokemons");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Pokemons_1 = require("./models/classes_Pokemon/Pokemons");
const PokemonsFogo_1 = require("./models/classes_Pokemon/PokemonsFogo");
const PokemonsAgua_1 = require("./models/classes_Pokemon/PokemonsAgua");
const PokemonsEletrico_1 = require("./models/classes_Pokemon/PokemonsEletrico");
const PokemonsGrama_1 = require("./models/classes_Pokemon/PokemonsGrama");
const PokemonsVoador_1 = require("./models/classes_Pokemon/PokemonsVoador");
const TelaEscolherTime_1 = require("./models/telas/TelaEscolherTime");
const TelaBatalha_1 = require("./models/telas/TelaBatalha");
const HabilidadesPokemon_1 = require("./models/HabilidadesPokemon");
const TelaMeuPokemons_1 = require("./models/telas/TelaMeuPokemons");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "dbtest",
    synchronize: true,
    logging: true,
    entities: [Pokemons_1.TodosPokemons, PokemonsFogo_1.TipoFogo, PokemonsAgua_1.TipoAgua, PokemonsEletrico_1.TipoEletrico, PokemonsGrama_1.TipoGrama, PokemonsVoador_1.TipoVoador, TelaMenu_1.MenuMain, TelaEscolherTime_1.EscolherTime, TelaBatalha_1.TelaBatalha, HabilidadesPokemon_1.HabilidadesPokemon, TelaMeuPokemons_1.TelaMeuPokemons],
    subscribers: [],
    migrations: [],
});
exports.AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch((error) => console.log(error));
TelaMenu_1.MenuMain.Tela();
