import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth :AuthService) { }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)
      , Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')]),
    password: new FormControl('')
  });
 
  ngOnInit(): void {
  }
  onFormSubmit() {
    this.auth.login(
      this.loginForm.value.username,
      this.loginForm.value.password).subscribe(resp => {
        console.log(resp);
      });
  
  }
  
 
}
