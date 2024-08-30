import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-forms',
  templateUrl: './register-forms.component.html',
  styleUrls: ['./register-forms.component.css']
})
export class RegisterFormsComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
      passwordConfirm: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)])
    },{
      validators:passwordMatchValidator
    })
  }

}

function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any{
  const valuePassword = formCurrent.get('password')?.value;
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
  return(valuePassword === valuePasswordConfirm) ? null : {'mismatch' : true};

}
