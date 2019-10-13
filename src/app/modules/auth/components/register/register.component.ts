import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../../../../services/registration.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit, OnDestroy {

  hide = true;
  registrationSubscription: Subscription;

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    lastName: new FormControl(null)
  });

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.registrationSubscription.unsubscribe();
  }

  Register() {
    if (this.registerForm.valid) {
      this.registrationSubscription = this.registrationService.register(this.registerForm.value).subscribe((response) => {
        console.log(response);
      }, (err) => {
        console.log(err);
      });
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
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

}
