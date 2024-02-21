
import { Air_Cutter, Aqua_Tail, Bite, Brave_Bird, Bubble, Cut, Ember, Energy_Ball, Fire_Fang, Flamethrower, Focus_Blast, Leaf_Tornado, PokemonAbility, Quick_Attack, Sky_Attack, Solar_Beam, Thunder, Thunderbolt, Water_Gun } from "../models/HabilidadesPokemon";

export abstract class Criar_HabilidadesPokemon {
    public abstract criar(): PokemonAbility;
    
    public faz_Crieira(): [string, number, number, string, number] {
        const habilidade = this.criar();
        const [nome_habilidade, dano, energia, texto, prioridade] = habilidade.execute();
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
}

export class Faz_Ember extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Ember();
    }
}

export class Faz_Flamethrower extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Flamethrower();
    }
}

export class Faz_Bubble extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Bubble();
    }
}

export class Faz_Water_Gun extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Water_Gun();
    }
}

export class Faz_Thunderbolt extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Thunderbolt();
    }
}

export class Faz_Thunder extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Thunder();
    }
}

export class Faz_Leaf_Tornado extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Leaf_Tornado();
    }
}

export class Faz_Energy_Ball extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Energy_Ball();
    }
}

export class Faz_Solar_Beam extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Solar_Beam();
    }
}

export class Faz_Air_Cutter extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Air_Cutter();
    }
}

export class Faz_Sky_Attack extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Sky_Attack();
    }
}

export class Faz_Brave_Bird extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Brave_Bird();
    }
}

export class Faz_Bite extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Bite();
    }
}

export class Faz_Cut extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Cut();
    }
}

export class Faz_Aqua_Tail extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Aqua_Tail();
    }
}

export class Faz_Fire_Fang extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Fire_Fang();
    }
}

export class Faz_Quick_Attack extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Quick_Attack();
    }
}

export class Faz_Focus_Blast extends Criar_HabilidadesPokemon {
    criar(): PokemonAbility {
        return new Focus_Blast();
    }
}