class Hero {
    private name:string;
    private power:number;
    private life:number;

    constructor(_name:string, _power:number, _life:number) {
        this.name = _name;
        this.power = _power;
        this.life = _life;
    }

    attack(opponent:Hero){
        opponent._life -= this._power;
    }

    isAlive(){
        return this.life > 0;
    }

    get _name(): string {
        return this.name;
    }

    set _name(nouveauNom : string) {
        this.name = nouveauNom;
    }

    get _power(): number {
        return this.power;
    }

    set _power(nouveauPower : number) {
        this.power = nouveauPower;
    }

    get _life(): number {
        return this.life;
    }

    set _life(nouvelleLife : number) {
        this.life = nouvelleLife;
    }
}


class Weapon extends Hero {
    weapon: Weapon;

    constructor(_weapon:Weapon, _power:number, _life:number,_name:string) {
        super( _name,_power,_life)
        this.weapon = _weapon;
    }

}
