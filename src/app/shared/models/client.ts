export class Client {
    id?:String;
    nom?:string;
    constructor (arg: Client = {})
        {
            this.id=arg.id;
            this.nom=arg.nom;
        }
    
}

