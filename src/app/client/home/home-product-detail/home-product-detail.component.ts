import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.scss']
})
export class HomeProductDetailComponent implements OnInit {
  
  constructor() { }
  @Input() msg : string;
  @Input() prod: Produit;
  ngOnInit(): void { 
   
  }
  
}
 