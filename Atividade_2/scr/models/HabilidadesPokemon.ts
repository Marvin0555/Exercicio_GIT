import {DicionarioPokemon} from "./CriarPokemons";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TodosPokemons } from "./classes_Pokemon/Pokemons";
@Entity()
export class HabilidadesPokemon{
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=>TodosPokemons, (pokemon)=>pokemon.habilidadesPokemon)
    pokemon: TodosPokemons
    static Ember():[string, number, number, string, number]{
        const nome_habilidade = "Ember";
        const dano = 40;
        const energia = 20;
        const texto = "Lança brasas no inimigo";
        const prioridade = 1;

        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Flamethrower():[string, number, number, string, number]{
        const nome_habilidade = "Flamethrower";
        const dano = 90;
        const energia = 50;
        const texto = "O pokemon realiza um tornado de fogo no oponente chamado Flamethrower";
        const prioridade = 2;

        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Bubble():[string, number, number, string, number]{
        const nome_habilidade = "Bubble";
        const dano = 40;
        const energia = 20;
        const texto = "O pokemon atira uma rajada de bolhas no oponente";
        const prioridade = 1;

        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Water_Gun():[string, number, number, string, number]{
        const nome_habilidade = "Water Gun";
        const dano = 100;
        const energia = 60;
        const texto = "O pokemon canaliza uma forte rajada de água no oponente";
        const prioridade = 2;

        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Thunderbolt():[string, number, number, string, number]{
        const nome_habilidade = "Thunderbolt";
        const dano = 80;
        const energia = 40;
        const texto = "O pokemon canaliza uma rajada de eletricidade no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Thunder():[string, number, number, string, number]{
        const nome_habilidade = "Thunder";
        const dano = 100;
        const energia = 60;
        const texto = "O pokemon canaliza um trovão no oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Leaf_Tornado():[string, number, number, string, number]{
        const nome_habilidade = "Leaf Tornado";
        const dano = 35;
        const energia = 10;
        const texto = "O pokemon atira um tornado de folhas no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Energy_Ball():[string, number, number, string, number]{
        const nome_habilidade = "Energy Ball";
        const dano = 60;
        const energia = 40;
        const texto = "O pokemon atira uma bola de energia no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Solar_Beam():[string, number, number, string, number]{
        const nome_habilidade = "Solar Beam";
        const dano = 110;
        const energia = 70;
        const texto = "O pokemon atira uma rajada solar no oponente";
        const prioridade = 3;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Air_Cutter():[string, number, number, string, number]{
        const nome_habilidade = "Air Cutter";
        const dano = 45;
        const energia = 30;
        const texto = "O pokemon atira uma rajada de vento no oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Sky_Attack():[string, number, number, string, number]{
        const nome_habilidade = "Sky Attack";
        const dano = 55;
        const energia = 40;
        const texto = "O pokemon realiza um ataque de neblina no oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Brave_Bird():[string, number, number, string, number]{
        const nome_habilidade = "Brave Bird";
        const dano = 120;
        const energia = 80;
        const texto = "O pokemon realiza um ataque bruto no oponente";
        const prioridade = 3;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Bite():[string, number, number, string, number]{
        const nome_habilidade = "bite";
        const dano = 30;
        const energia = 10;
        const texto = "O pokemon morde o oponente";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Cut():[string, number, number, string, number]{
        const nome_habilidade = "Cut";
        const dano = 50;
        const energia = 30;
        const texto = "O pokemon consegue cortar o oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Aqua_Tail():[string, number, number, string, number]{
        const nome_habilidade = "Aqua Tail";
        const dano = 30;
        const energia = 10;
        const texto = "O pokemon atira um tiro no oponente";
        const prioridade = 2;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Fire_Fang():[string, number, number, string, number]{
        const nome_habilidade = "Fire Fang";
        const dano = 20;
        const energia = 10;
        const texto = "O pokemon morde o oponente com chamas";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Quick_Attack():[string, number, number, string, number]{
        const nome_habilidade = "Quick Attack";
        const dano = 20;
        const energia = 20;
        const texto = "O pokemon ataca com um ataque raído";
        const prioridade = 1;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
    static Focus_Blast():[string, number, number, string, number]{
        const nome_habilidade = "Focus Blast";
        const dano = 60;
        const energia = 30;
        const texto = "O pokemon ataca com um ataque raído";
        const prioridade = 3;
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
}