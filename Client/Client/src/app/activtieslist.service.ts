import { Injectable } from '@angular/core';
import { Activity } from './Models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivtieslistService {
  nextId: number;

  constructor() {
      const activities = this.getList();

      if (activities.length === 0) {
          this.nextId = 0;
      } else {
          const maxId = activities[activities.length - 1].id;
          this.nextId = maxId + 1;
      }
  }

  removeActivity(activty: Activity){
      const activities = this.getList();
      const indextoRemove = activities.indexOf(activty);
      activities.splice(indextoRemove, 1);
      this.setLocalStorageActivities(activities);

  }

  addActivity(activity: Activity) {
      const activities = this.getList();
      activity.id = this.nextId;
      activities.push(activity);
      this.setLocalStorageActivities(activities);
      this.nextId++;
  }

  getList(){
      const localStorageItem = JSON.parse(localStorage.getItem('activities'));
      return localStorageItem == null ? [] : localStorageItem.activities;
  }

  isEmpty(){
      if (this.getList().length === 0) {
      return true;
  }
      return false;
  }

  private setLocalStorageActivities(activities: Activity[]): void {
      localStorage.setItem('activities', JSON.stringify({ activities : activities}));
  }
}
