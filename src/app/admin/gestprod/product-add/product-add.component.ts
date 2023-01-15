import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
 export class ProductAddComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  onAjouter() : void 
  {
    this.productAddForm.controls.nameControl.value
    this.productAddForm.controls.prixControl.value
    this.productAddForm.controls.descriptionControl.value
    this.productAddForm.controls.imageControl.value
    this.productAddForm.controls.categorieControl.value
  }
  productAddForm : FormGroup ;
  ngOnInit(): void {
    this. productAddForm = this.fb.group ({ 
      nameControl: [''],
      prixControl: [''],
      descriptionControl: [''],
      imageControl: [''],
      categorieControl: [''],
    });  
  }
}