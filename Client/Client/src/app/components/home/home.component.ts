import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { ActivtieslistService } from 'src/app/activtieslist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails: {};
  activities: [];

  constructor(private service: UserService, private router: Router, private activityListService: ActivtieslistService) {
    this.activities = this.activityListService.getList();
    console.log(this.activities);
    this.userDetails = this.service.userConnected;
    console.log(this.userDetails);
   }

  ngOnInit() {
    this.activities = this.activityListService.getList();
  }

  onLogout() {
    alert('You successfully logged out!');
    this.router.navigateByUrl('/user/login');
  }

}
