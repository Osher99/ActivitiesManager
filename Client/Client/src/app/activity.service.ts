import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) { }

  readonly BaseURI = 'http://localhost:58855/api';

  formModel = this.fb.group({
    ActivityName: ['', Validators.required],
    Description: ['', Validators.required],
    AttendersNum: ['', Validators.required]
  });

  registerActivity() {
    const body = {
      ActivityName: this.formModel.value.ActivityName,
        Description: this.formModel.value.Description,
        MaximumAttenders: this.formModel.value.AttendersNum,
        Attenders: 0,
        User: this.userService.userConnected
    };
    return this.http.post(this.BaseURI + '/Student/AddActivity', body);
  }

  getAllActivities() {
    return this.http.get(this.BaseURI + '/Student/GetActivities');
  }

  attend(id: any, userConnected: {}) {
    const modelAttended = {
      userConnected,
      id
    };
    return this.http.post(this.BaseURI + '/Student/Attend', modelAttended);
  }
}
