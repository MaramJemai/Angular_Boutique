export class CatalogueProduits {
}
import { Produit } from "../models/produit";

export const CATALOGUE : Produit [] = [
    {image: '../assets/prod1.png',nom: 'cleanser', prix :'50dt',categid : 'C1' , description:'foaming facial cleanser for oily and acne prone skin'},
    {image: '../assets/prod2.png',nom: 'moistriser', prix :'60dt', categid : 'C2', description:'moistrising lotion for oily and acne prone skin'},
    {image: '../assets/prod3.png',nom: 'sun screan', prix :'40dt', categid : 'C3', description:'mineral sun crean for sensetive skin'},
    {image: '../assets/prod4.jpg',nom: 'Day Cream', prix :'70dt',categid : 'C1' , description:'Skin Renewing Day Cream with SPF'},
    {image: '../assets/prod5.jpg',nom: 'Moisturizing Lotion', prix :'65dt',categid : 'C2' , description:'Itch Relief Moisturizing Lotion with 3 essential ceramides'},
    {image: '../assets/prod6.jpg',nom: 'Micellar Water', prix :'45dt',categid : 'C3' , description:'Micellar Cleansing Water parfum free'},

   ];