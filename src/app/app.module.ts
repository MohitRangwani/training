import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { DemoComponent } from './demo/demo.component';
import { CollegeComponent } from './college/college.component';
import { PersonService } from './person.service';
import { CourseService } from './course.service';
import { FormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component'
import { HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './add-course/add-course.component';
import  { ReactiveFormsModule } from '@angular/forms';
import { AnalyticsModule } from './analytics/analytics.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    DemoComponent,
    CollegeComponent,
    PersonFormComponent,
    PageNotFoundComponent,
    CourseInfoComponent,
    HomeComponent,
    TaskComponent,
    TaskListComponent,
    AddCourseComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AnalyticsModule
  ],
  providers: [PersonService , CourseService , AuthGuard , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
