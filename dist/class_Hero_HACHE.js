"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hache = void 0;
const _1 = require(".");
const class__ARME_1 = require("./class_ ARME");
const class_Hero__P_E_1 = require("./class_Hero_\u00C9P\u00C9E");
class hache extends _1.Hero {
    constructor(_name, _power, _life, _armee) {
        super(_name, _power, _life);
        this.arme = new class__ARME_1.arme("Axe");
    }
    attack(opponent) {
        if (opponent instanceof class_Hero__P_E_1.epee) {
            opponent.getlife();
            opponent.setlife(opponent.getlife() - this.getpower() * 2);
        }
        else {
            super.attack(opponent);
        }
    }
}
exports.hache = hache;
