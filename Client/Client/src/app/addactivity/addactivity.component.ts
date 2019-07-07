import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.css']
})
export class AddactivityComponent implements OnInit {
thisuser: {};
    constructor(private service: ActivityService, private userService: UserService, private router: Router) { }

    ngOnInit() {
      this.thisuser = this.userService.userConnected;
    }

    onSubmit() {
      this.service.registerActivity().subscribe(
        (result) => {
          if (result) {
         alert('New Activity created!');
         this.service.formModel.reset();
          } else {
            alert('Activity Creation Process failed!');
              }
            },
        err => {
          alert('Activity Creation Process failed!');
        });
      }

      goAllActivities() {
        this.router.navigateByUrl('/allactivities');
      }
      goHome() {
        this.router.navigateByUrl('/home');
      }
    }
