import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


persons=[];

  constructor(personsService : PersonService) {
    this.persons=personsService.getPersons();
   }

  ngOnInit(): void {
  
  }
  
  
}
