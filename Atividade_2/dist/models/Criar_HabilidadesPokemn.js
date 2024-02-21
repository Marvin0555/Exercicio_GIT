"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faz_Focus_Blast = exports.Faz_Quick_Attack = exports.Faz_Fire_Fang = exports.Faz_Aqua_Tail = exports.Faz_Cut = exports.Faz_Bite = exports.Faz_Brave_Bird = exports.Faz_Sky_Attack = exports.Faz_Air_Cutter = exports.Faz_Solar_Beam = exports.Faz_Energy_Ball = exports.Faz_Leaf_Tornado = exports.Faz_Thunder = exports.Faz_Thunderbolt = exports.Faz_Water_Gun = exports.Faz_Bubble = exports.Faz_Flamethrower = exports.Faz_Ember = exports.Criar_HabilidadesPokemon = void 0;
const HabilidadesPokemon_1 = require("../models/HabilidadesPokemon");
class Criar_HabilidadesPokemon {
    faz_Crieira() {
        const habilidade = this.criar();
        const [nome_habilidade, dano, energia, texto, prioridade] = habilidade.execute();
        return [nome_habilidade, dano, energia, texto, prioridade];
    }
}
exports.Criar_HabilidadesPokemon = Criar_HabilidadesPokemon;
class Faz_Ember extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Ember();
    }
}
exports.Faz_Ember = Faz_Ember;
class Faz_Flamethrower extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Flamethrower();
    }
}
exports.Faz_Flamethrower = Faz_Flamethrower;
class Faz_Bubble extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Bubble();
    }
}
exports.Faz_Bubble = Faz_Bubble;
class Faz_Water_Gun extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Water_Gun();
    }
}
exports.Faz_Water_Gun = Faz_Water_Gun;
class Faz_Thunderbolt extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Thunderbolt();
    }
}
exports.Faz_Thunderbolt = Faz_Thunderbolt;
class Faz_Thunder extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Thunder();
    }
}
exports.Faz_Thunder = Faz_Thunder;
class Faz_Leaf_Tornado extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Leaf_Tornado();
    }
}
exports.Faz_Leaf_Tornado = Faz_Leaf_Tornado;
class Faz_Energy_Ball extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Energy_Ball();
    }
}
exports.Faz_Energy_Ball = Faz_Energy_Ball;
class Faz_Solar_Beam extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Solar_Beam();
    }
}
exports.Faz_Solar_Beam = Faz_Solar_Beam;
class Faz_Air_Cutter extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Air_Cutter();
    }
}
exports.Faz_Air_Cutter = Faz_Air_Cutter;
class Faz_Sky_Attack extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Sky_Attack();
    }
}
exports.Faz_Sky_Attack = Faz_Sky_Attack;
class Faz_Brave_Bird extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Brave_Bird();
    }
}
exports.Faz_Brave_Bird = Faz_Brave_Bird;
class Faz_Bite extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Bite();
    }
}
exports.Faz_Bite = Faz_Bite;
class Faz_Cut extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Cut();
    }
}
exports.Faz_Cut = Faz_Cut;
class Faz_Aqua_Tail extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Aqua_Tail();
    }
}
exports.Faz_Aqua_Tail = Faz_Aqua_Tail;
class Faz_Fire_Fang extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Fire_Fang();
    }
}
exports.Faz_Fire_Fang = Faz_Fire_Fang;
class Faz_Quick_Attack extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Quick_Attack();
    }
}
exports.Faz_Quick_Attack = Faz_Quick_Attack;
class Faz_Focus_Blast extends Criar_HabilidadesPokemon {
    criar() {
        return new HabilidadesPokemon_1.Focus_Blast();
    }
}
exports.Faz_Focus_Blast = Faz_Focus_Blast;
