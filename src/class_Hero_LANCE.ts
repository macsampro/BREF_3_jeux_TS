import {Hero} from".";
import {arme} from "./class_ ARME";
import { hache } from "./class_Hero_HACHE";


export class lance extends Hero{

    constructor(_name:string, _power:number, _life:number,armee:string) {
        super(_name, _power, _life,)
        this.arme = new arme("Axe");


    }
    attack(opponent: Hero): void {
        if (opponent instanceof hache) {
            opponent.getlife();
            opponent.setlife(opponent.getlife() - this.getpower() *2)
            
        }else{
            super.attack(opponent);
        }
    }

  


}