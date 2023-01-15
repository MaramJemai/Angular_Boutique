import { ActivationStart } from "@angular/router";

export class Categorie {

    id?:string;
    nom?:string;
    email?:string;
    avatar?:string;
    constructor(arg:Categorie={})
    {
        this.id=arg.id;
        this.nom=arg.nom;
        this.email=arg.email;
        this.avatar=arg.avatar;
    }
}
