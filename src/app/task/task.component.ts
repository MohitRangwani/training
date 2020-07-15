import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
time ="";
content ="";
task;
@Output() taskCreated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

onTaskSubmit(){
  this.task={
    time : this.time ,
    content : this.content
  }
this.taskCreated.emit(this.task);
}
}
