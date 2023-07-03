class Perssonage {
    nom:string;
    metier:string;
    attaque:number;
    point:number;
    forceDuBien:boolean;

    constructor(
        nom:string,
        metier:string,
        attaque:number,
        point:number,
        forceDuBien:boolean,
        ) {
        this.nom = nom;
        this.metier = metier;
        this.attaque = attaque;
        this.point = point;
        this.forceDuBien = forceDuBien;        
    }

    ditBonjour(){
        console.log(`bonjour TON NOM EST !!!!${this.metier}`);
        
    }


} 

const perso01 = new Perssonage("Milo", "gerrier", 10, 100, true,);
const perso02 = new Perssonage("Tya", "archère", 5, 50, true,);
const perso03 = new Perssonage("Lili", "archère", 5, 55, false,);
const perso04 = new Perssonage("Gael", "voleur", 2, 10, false,);

console.log(`bonjour ${perso01.nom} tu est ${perso01.metier} avec une attaque de ${perso01.point} point`);
perso01.ditBonjour()
perso02.ditBonjour()
perso03.ditBonjour()
perso04.ditBonjour()


{555}

class Livres {
    titre:string;
    nbdPage:number;
    couvCouleur:string;
    traductionAnglais:boolean;

    constructor(
        titre:string,
        nbdPage:number,
        couvCouleur:string,
        traductionAnglais:boolean,
    ) {
        this.titre = titre;
        this.nbdPage = nbdPage;
        this.couvCouleur = couvCouleur;
        this.traductionAnglais = traductionAnglais;       
    }
}

 const livre_01 = new Livres ("l'algorithmique selon H2PROG", 500, "noir", true);
 const livre_02 = new Livres ("le virus Asiatique", 300, "rouge", false);
 const livre_03 = new Livres ("la France du 19éme", 500, "bleu", true);




class Voiture {
    marque:string;
    model:string;
    couleur:string;
    nbrPport:number;
    estElectrique:boolean;

    constructor(
        marque:string,
        model:string,
        couleur:string,
        nbrPport:number,
        estElectrique:boolean,
    ) {
        this.marque = marque;
        this.model = model;
        this.couleur = couleur;
        this.nbrPport = nbrPport;
        this.estElectrique = estElectrique
    }
}

const voiture_01 = new Voiture ("yotota", "tyas", "noir", 5, true);
const voiture_02 = new Voiture ("yotota", "risau", "rouge", 3, false);
const voiture_03 = new Voiture ("troen", "5C", "rouge", 5, true);
