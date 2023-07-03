"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
class Hero {
    constructor(_name, _power, _life) {
        this.name = _name;
        this.power = _power;
        this.life = _life;
    }
    // les metodes de la class Hero
    attack(opponent) {
        opponent.life -= this.power;
    }
    isAlive() {
        return this.life > 0;
    }
    //acces au parametre de la class privet:
    getname() {
        return this.name;
    }
    setname(nouveauNom) {
        this.name = nouveauNom;
    }
    getpower() {
        return this.power;
    }
    setpower(nouveauPower) {
        this.power = nouveauPower;
    }
    getlife() {
        return this.life;
    }
    setlife(nouvelleLife) {
        this.life = nouvelleLife;
    }
}
exports.Hero = Hero;
//les joueurs
let samir = new Hero("samir", 125, 300);
let leCode = new Hero("leCode", 50, 200);
let i = 1;
while (samir.isAlive() && leCode.isAlive()) {
    console.log("round", i);
    samir.attack(leCode);
    leCode.attack(samir);
    i++;
}
