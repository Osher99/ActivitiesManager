import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {
  formModel = {
    Email: '',
    Password: ''
  };
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm, userName: string) {
    this.userService.login(form.value).subscribe(
      (res: any) => {
        this.router.navigateByUrl('/home');
        alert('Welcome ' + res.name + '!' );
        this.userService.userConnected = res;
      },
      (err: any) => {
        if (err.status === 400) {
          alert('Incorrect User name of Password!');
          form.reset();
        } else {
         alert('Our servers is down at the moment');
         form.reset();
        }
      }
    );
  }
}
