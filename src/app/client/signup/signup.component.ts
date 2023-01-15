import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  getUrl()
{
  return '';
}
  constructor(private fb: FormBuilder) { }
  SignUpForm : FormGroup ;
  ngOnInit(): void {
    this. SignUpForm = this.fb.group ({ 
      firstname: ['maram'],
      lastname: ['jemai'],
      email: ['maramjemai491@gmail.com'],
      skintype: ['oily acne prone skin'],
    
    }); 
  }
  signup ()
  {
    console.log('donnee du formulaire...' ,this.SignUpForm.value);
  }
}
