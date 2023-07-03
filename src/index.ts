import {arme} from "./class_ ARME";

export class Hero {
    private name:string;
    private power:number;
    private life:number;
            arme!: arme;

    constructor(_name:string, _power:number, _life:number) {
        this.name = _name;
        this.power = _power;
        this.life = _life;
    }

    // les metodes de la class Hero
    attack(opponent:Hero):void{
        opponent.life -= this.power;
    }

    isAlive(){
        return this.life > 0;
    }


    //acces au parametre de la class privet:

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


//les joueurs
let samir:Hero = new Hero("samir", 125, 300);
let leCode:Hero = new Hero("leCode", 50, 200);
let i = 1;



while (samir.isAlive()&& leCode.isAlive()) {
    console.log("round",i);
    samir.attack(leCode);
    leCode.attack(samir);
    i++   
    
}

    