"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelaMenu_1 = require("./models/telas/TelaMenu");
require("./models/CriarPokemons");
require("reflect-metadata");
//export const AppDataSource = new DataSource({
//    type: "mysql",
//    host: "localhost",
//    port: 3306,
//    username: "root",
//    password: "",
//    database: "dbtest",
//    synchronize: true,
//    logging: true,
//    entities: [TodosPokemons, TipoFogo, TipoAgua, TipoEletrico, TipoGrama, TipoVoador, MenuMain,EscolherTime,TelaBatalha,HabilidadesPokemon, TelaMeuPokemons],
//    subscribers: [],
//    migrations: [],
//})
//AppDataSource.initialize().then(() => {
//       console.log("Data Source has been initialized!")
//    }).catch((error) => console.log(error))
TelaMenu_1.MenuMain.Tela();
