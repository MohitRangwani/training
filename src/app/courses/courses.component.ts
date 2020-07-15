import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
courses : Course[]= [];


  constructor( public courseService : CourseService) {
   
   }

  ngOnInit(): void {
   this.courseService.getCourses()
   .subscribe(resp => {
     console.log(resp);
     console.log(resp.status);
     console.log(resp.statusText);
     console.log(resp.url);
     this.courses = resp.body;
   });
  }
onCourseDelete(id : Number){
  this.courseService.deleteCourse(id).subscribe(resp =>{
    if(resp.status == 200){
      for(let i=0; i<this.courses.length;i++){
        let c= this.courses[i];
        if(c.id==id){
          this.courses.splice(i , 1);
                }
      }
    }
  });

}

}
