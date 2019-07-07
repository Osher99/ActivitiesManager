import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userConnected: {};

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:58855/api';

  formModel = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Name: ['', [Validators.required]],
    Class: ['', [Validators.required]],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required],
    }, {validator: this.comparePasswords }),
  });

  comparePasswords(fb: FormGroup) {
    const confirmPasswordsCtrl = fb.get('ConfirmPassword');

    if (confirmPasswordsCtrl.errors == null || 'passwordMismatch' in confirmPasswordsCtrl.errors) {
      if (fb.get('Password').value !== confirmPasswordsCtrl.value) {
        confirmPasswordsCtrl.setErrors({passwordMismatch: true});
      } else {
        confirmPasswordsCtrl.setErrors(null);
      }
    }
  }
  register() {
    const body = {
      Email: this.formModel.value.Email,
      Name: this.formModel.value.Name,
      Password: this.formModel.value.Passwords.Password,
      Class: this.formModel.value.Class
    };
    return this.http.post(this.BaseURI + '/Student/Register', body);
  }

  login(formData: any) {
    return this.http.post(this.BaseURI + '/Student/Login', formData);
  }


}
