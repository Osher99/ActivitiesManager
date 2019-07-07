import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from '../activity.service';
import { UserService } from '../user.service';
import { ActivtieslistService } from '../activtieslist.service';
import { Activity } from '../Models/activity';

@Component({
  selector: 'app-allactivities',
  templateUrl: './allactivities.component.html',
  styleUrls: ['./allactivities.component.css']
})
export class AllactivitiesComponent implements OnInit {
  activties: any;
// tslint:disable-next-line: max-line-length
  constructor(private activityService: ActivityService, private userService: UserService, private activityListService: ActivtieslistService, private router: Router) {}

  ngOnInit() {
    this.activityService.getAllActivities().subscribe(
      (res: any) => {
       this.activties = res;
       console.log(this.activties);
      },
      err => {
        console.log(err);
      }
    );
}

onAttend(id, name, attenders, maximumAttenders) {
  const registeredList = this.activityListService.getList();

// tslint:disable-next-line: prefer-for-of
  for (let j = 0; j < registeredList.length; j++) {
    if (id === registeredList[j].activityId) {
      alert('You already attened this activity!');
      return;
    }
  }

  if (attenders >= maximumAttenders) {
    alert('You cant attened this activty, Its full already!');
  }

  let activity: Activity;
  activity = new Activity();
  activity.activityName = name;
  activity.activityId = id;

  this.activityService.attend(id, this.userService.userConnected).subscribe(
    (res) => {
      if (res) {
      this.activityListService.addActivity(activity);
      this.activityListService.getList();
      this.userService.userConnected = res;
      alert('attended Successfully!');
      this.router.navigateByUrl('/home');
    }
// tslint:disable-next-line: no-unused-expression
      err => {
      alert('already registered / unknown error');
      console.log(err);
     };
    });
}

goAddActivities() {
  this.router.navigateByUrl('/addactivity');
}
goHome() {
  this.router.navigateByUrl('/home');
}

}
