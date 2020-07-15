import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable()
export class PersonService{
person1 : Person;
person2 : Person;
person3 : Person;
persons=[];
constructor(){
    this.person1=new Person(1 , "Harry" , "Hogwards");
    this.person2=new Person(2 , "Ron" , "Hogwards");
    this.person3=new Person(3 , "Hermione" , "Hogwards");
    this.persons.push(this.person1);
  this.persons.push(this.person2);
  this.persons.push(this.person3);
}
getPersons() : Person[] {
    return this.persons;
}

addPerson(person : Person) : void {
  this.persons.push(person);
}

}