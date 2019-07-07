import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }
    onSubmit() {
      this.service.register().subscribe(
        (user: any) => {
          if (user != null) {
            alert('user has succesfully registered!');
            this.service.formModel.reset();
          } else {
            alert('Oops! something went wrong!');
          }
        },
        err => {
          alert('Oops! something went wrong!');
          console.log(err);
        }
      );
    }
}
