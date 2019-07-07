import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AddactivityComponent } from './addactivity/addactivity.component';
import { AllactivitiesComponent } from './allactivities/allactivities.component';
import { ActivtieslistService } from './activtieslist.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomepageComponent,
    RegisterComponent,
    LoginComponent,
    AddactivityComponent,
    AllactivitiesComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, ActivtieslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
