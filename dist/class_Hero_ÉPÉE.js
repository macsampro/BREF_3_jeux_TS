"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.epee = void 0;
const _1 = require(".");
const class__ARME_1 = require("./class_ ARME");
const class_Hero_LANCE_1 = require("./class_Hero_LANCE");
class epee extends _1.Hero {
    constructor(_name, _power, _life, armee) {
        super(_name, _power, _life);
        this.arme = new class__ARME_1.arme("Axe");
    }
    attack(opponent) {
        if (opponent instanceof class_Hero_LANCE_1.lance) {
            opponent.getlife();
            opponent.setlife(opponent.getlife() - this.getpower() * 2);
        }
        else {
            super.attack(opponent);
        }
    }
}
exports.epee = epee;
