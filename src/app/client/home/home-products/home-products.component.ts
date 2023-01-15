import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Produit } from "../../../shared/models/produit";
@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
  title = "PRODUITS" ;
 produits=[];
 selectedProd : Produit;
  constructor(private productService: ProductService) {
   }
  onDetail(p:Produit)
  {
    alert(p.description);
  }
  onSelectProd(p: Produit) :void
  {
     this. selectedProd=p;
     
  }
  getProducts(): void {
    
     this.produits = this.productService.getProducts();
    }
    
  ngOnInit(): void {
  this.getProducts();
  }
  
  ch="Salut, ce message provient du composant père de ce composant";

}