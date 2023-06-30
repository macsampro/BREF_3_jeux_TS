import {weapon} from "./class_weapon";

export class Hero {
    private name:string;
    private power:number;
    private life:number;
            weapon!: weapon;

    constructor(_name:string, _power:number, _life:number) {
        this.name = _name;
        this.power = _power;
        this.life = _life;
    }

    attack(opponent:Hero){
        opponent.life -= this.power;
    }

    isAlive(){
        return this.life > 0;
    }

    getname(): string {
        return this.name;
    }

    setname(nouveauNom : string) {
        this.name = nouveauNom;
    }

    getpower(): number {
        return this.power;
    }

    setpower(nouveauPower : number) {
        this.power = nouveauPower;
    }

    getlife(): number {
        return this.life;
    }

    setlife(nouvelleLife : number) {
        this.life = nouvelleLife;
    }
}

let hercule:Hero = new Hero("hercule", 19, 300);
let johnsson:Hero = new Hero("johnsson", 19, 200);




