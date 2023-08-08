import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'routingPildoras';

  constructor(private loginservice:LoginService){

  }

  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyDHkE7FtCIdYPxPuMA0-fPgFEWInduzZ8Y",
      authDomain: "mis-clientes-ce40f.firebaseapp.com",

    })
  
  }

  estaLogueado(){
    return this.loginservice.estaLogueadoService();
  }

  logout(){
    this.loginservice.logoutService();
  }
}
