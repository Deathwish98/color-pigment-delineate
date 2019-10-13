import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  hide = true;

  RegisterForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    lastName: new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

  Register() {
    if (this.RegisterForm.valid) {
      return;
    } else {
      console.log('shit happens');
    }
  }

  getErrorMessage(field) {
    if (field === 'email') {
      return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
    } else if (field === 'password') {
      return this.password.hasError('required') ? 'You must enter a value' : '' ;
    } else if (field === 'first') {
      return this.firstName.hasError('required') ? 'You must enter a value' : '';
    }
  }

  get firstName() {
    return this.RegisterForm.get('firstName');
  }

  get lastName() {
    return this.RegisterForm.get('lastName');
  }

  get email() {
    return this.RegisterForm.get('email');
  }

  get password() {
    return this.RegisterForm.get('password');
  }

}
