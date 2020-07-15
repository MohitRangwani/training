import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DashboardComponent } from './analytics/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';




const routes: Routes = [
  {path : '' , redirectTo : '/home' , pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'add' , component : AddCourseComponent},
  {path : 'courses' , component : CoursesComponent , canActivate : [AuthGuard]},
  {path : 'login' , component : LoginComponent},
  {path : 'course-info/:id' , component : CourseInfoComponent},
  {path : 'persons' , component : DemoComponent ,
        children :[{ path :  'add-person', component : PersonFormComponent}]
  },
  {path : 'analytics' , component : DashboardComponent},
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }, 
  {path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
