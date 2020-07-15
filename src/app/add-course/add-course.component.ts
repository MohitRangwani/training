import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Course } from '../course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseForm = new FormGroup({
    name : new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(15) , Validators.pattern('[a-zA-Z ]*')]),
    price : new FormControl(''),
    shortDescription : new FormControl(''),
   description : new FormControl('')
  });
  course : Course;
  constructor(public courseService : CourseService,public router : Router,public zone : NgZone) { }

  ngOnInit(): void {
  }
onFormSubmit(){
  
  this.course=this.courseForm.value;
  this.courseService.postCourse(this.course)
  .subscribe(resp => {
    console.log(resp.body);
    if (resp.status ==200){
      this.zone.run(() => {
        this.router.navigate(['/courses']);
      });
    }
  });
    
}
}
