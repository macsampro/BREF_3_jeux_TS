import {Hero} from".";
import {arme} from "./class_ ARME";
import { lance } from "./class_Hero_LANCE";


export class epee extends Hero{

    constructor(_name:string, _power:number, _life:number,armee:string) {
        super(_name, _power, _life,)
        this.arme = new arme("Axe");


    }

    attack(opponent: Hero): void {
        if (opponent instanceof lance) {
            opponent.getlife();
            opponent.setlife(opponent.getlife() - this.getpower() *2)
            
        }else{
            super.attack(opponent);
        }
    }



}