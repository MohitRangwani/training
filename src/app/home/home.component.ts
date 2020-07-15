import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 appTasks = [];
  constructor() { }

  ngOnInit(): void {
  }
  onTaskEmitted(task){
this.appTasks.push(task);
  }
}
