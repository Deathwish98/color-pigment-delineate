import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../../services/login.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

  hide = true;
  showloginSpinner = false;
  loginSubscription: Subscription;


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  login() {
    if (this.loginForm.valid) {
      this.showloginSpinner = true;

      this.loginSubscription = this.loginService.login(this.loginForm.value).subscribe((response) => {
        this.showloginSpinner = false;
        this.loginService.setSession(response);
        this.router.navigateByUrl('/videos');
        console.log(response);
      }, (err) => {
        this.showloginSpinner = false;
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
    } else {
      return this.password.hasError('required') ? 'You must enter a value' : ''
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
