import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginForm = true;
  isLoginSuccessful = false;
  constructor(private http: HttpClient) {}
  onFormSwitch() {
    this.isLoginForm = !this.isLoginForm;
  }
  onFormSubmit(formDate: NgForm) {
    if (this.isLoginForm) {
      this.http
        .post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]',
          {
            email: formDate.value.email,
            password: formDate.value.password,
            returnSecureToken: true,
          }
        )
        .subscribe(
          (signupData) => {
            console.log('====================================');
            console.log(signupData);
            console.log('====================================');
          },
          (signupError) => {
            console.log('====================================');
            console.log(signupError);
            console.log('====================================');
          }
        );
      formDate.resetForm();
    } else {
      this.http
        .post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]',
          {
            email: formDate.value.email,
            password: formDate.value.password,
            returnSecureToken: true,
          }
        )
        .subscribe(
          (signupData) => {
            console.log('====================================');
            console.log(signupData);
            console.log('====================================');
          },
          (signupError) => {
            console.log('====================================');
            console.log(signupError);
            console.log('====================================');
          }
        );
      formDate.resetForm();
    }
  }
}
