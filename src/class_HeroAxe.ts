import {Hero} from"./index";
import {weapon} from "./class_weapon";
import { HeroSword } from "./class_HeroSword";

export class HeroAxe extends Hero{

    constructor(_name:string, _power:number, _life:number,weapone:string) {
        super(_name, _power, _life,)
        this.weapon = new weapon("Axe");


    }

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword) {
            opponent.getlife();
            opponent.setlife(opponent.getlife() - this.getpower() *2)
            
        }else{
            super.attack(opponent);
        }
    }

}

