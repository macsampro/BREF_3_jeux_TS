import {Hero} from".";
import {arme} from "./class_ ARME";
import { epee } from "./class_Hero_ÉPÉE";

export class hache extends Hero{

    constructor(
        _name:string, 
        _power:number, 
        _life:number,
        _armee:string,
        ) {
        super(_name, _power, _life,)
        this.arme = new arme("Axe");


    }

    attack(opponent: Hero): void {
        if (opponent instanceof epee) {
            opponent.getlife();
            opponent.setlife(opponent.getlife() - this.getpower() *2)
            
        }else{
            super.attack(opponent);
        }
    }

}

