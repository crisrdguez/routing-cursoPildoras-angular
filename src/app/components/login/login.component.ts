import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
      
  }

  loginF(form:NgForm){

    const email=form.value.email; //el valor que le he puesto al name en el form

    const password = form.value.password;

    this.loginService.login(email,password);

  }

}
