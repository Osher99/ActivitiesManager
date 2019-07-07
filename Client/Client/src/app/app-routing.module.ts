import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddactivityComponent } from './addactivity/addactivity.component';
import { AllactivitiesComponent } from './allactivities/allactivities.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: 'user', component: WelcomepageComponent,
children: [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
]
},
{ path: 'home', component: HomeComponent },
{ path: 'addactivity', component: AddactivityComponent },
{ path: 'allactivities', component: AllactivitiesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
