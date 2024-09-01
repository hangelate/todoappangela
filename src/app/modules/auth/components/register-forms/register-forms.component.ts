import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-register-forms',
  templateUrl: './register-forms.component.html',
  styleUrls: ['./register-forms.component.css']
})
export class RegisterFormsComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({});

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('',{
        validators: [Validators.required, Validators.email],
        asyncValidators:this.authService.uniqueEmailValidator(),
        updateOn: 'blur'
      }),
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
      phone: new FormControl('',[Validators.required, Validators.minLength(10)]),
      aboutMe: new FormControl('',[Validators.required, Validators.minLength(3)]),
      // password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
      // passwordConfirm: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)])
    },{
      validators:passwordMatchValidator
    })
  }

  testLoaded():void{
    const mockData = {
      email: 'angela@gmail.com',
      name: 'Angela',
      lastName: 'Herrera',
      phone: '1234567890',
      aboutMe:'Hola soy Angular Developer'
    }

    
    this.registerForm.setValue(mockData)

  }

  testUploaded():void{
    const mockData = {

      phone: '0987654321',

    }
  
    this.registerForm.patchValue(mockData)
  }
}

function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any{
  const valuePassword = formCurrent.get('password')?.value;
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
  return(valuePassword === valuePasswordConfirm) ? null : {'mismatch' : true};

}
