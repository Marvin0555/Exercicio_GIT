"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelaBatalha = void 0;
const TimeInimigo_1 = require("../TimeInimigo");
class TelaBatalha {
    static Tela() {
        console.log("Batalha");
        (0, TimeInimigo_1.TimeInimigo)();
    }
}
exports.TelaBatalha = TelaBatalha;
