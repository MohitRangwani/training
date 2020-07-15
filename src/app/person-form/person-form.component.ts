import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../person.service';
import { Person } from '../person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
personservice : PersonService;

  constructor(personService : PersonService , public router : Router) { 
    this.personservice = personService;
  }

  ngOnInit(): void {
  }
  onFormSubmit(personForm : NgForm) {
    let person = new Person(personForm.value.id, personForm.value.name, personForm.value.address);
    this.personservice.addPerson(person);
    this.router.navigate(['persons']);
  }
}
