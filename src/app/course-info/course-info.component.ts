import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  id : Number;
  course : Course;
  constructor(public actRoute : ActivatedRoute , public courseService : CourseService) { 
    this.id=actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.courseService.getCourse(this.id)
   .subscribe(resp => {
   
     this.course = resp.body;
   });
  }

}
