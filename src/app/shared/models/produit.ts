export class Produit {
    categid:string;
    id?: string;
    nom?: string;
    image?: string; 
    prix?: string;
    description?: string;
    constructor(args: Produit = {categid:'c1'}) {
    
    this.id = args.id;
    this.nom = args.nom;
    this.image = args.image; 
    this.prix = args.prix;
    this.description = args.description;
    this.categid = args.categid;

    }
   
}
