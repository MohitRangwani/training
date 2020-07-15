import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

student1 : Student = {
  id : 1,
  name : "abc",
  branch :"extc",
  
}
student2 : Student = {
  id : 2,
  name : "xyz",
  branch : "civil"
}

  constructor() { }

  ngOnInit(): void {
  }

}
