import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { CaracteristicasEmpleadoComponent } from './components/caracteristicas-empleado/caracteristicas-empleado.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';
import { ErrorPersonalizadoComponent } from './components/error-personalizado/error-personalizado.component';
import { EmpleadosServiceService } from './services/empleados-service.service';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { loginGuard } from './components/login/login-guardian';


const appRoutes:Routes = [
  {path:'', component:HomeComponent,canActivate:[loginGuard]},
  {path:'login', component:LoginComponent},
  {path:'proyectos', component:ProyectosComponent,canActivate:[loginGuard]},
  {path:'quienes', component:QuienesSomosComponent,canActivate:[loginGuard]},
  {path:'contacto', component:ContactoComponent, canActivate:[loginGuard]},
  {path:'prueba', component:PruebaComponent,canActivate:[loginGuard]},
  {path:'modificar/:id', component:ModificarEmpleadoComponent},
  {path:'**',component:ErrorPersonalizadoComponent}, //cualquier cosa diferente a lo que tenemos en la parte superior iria a esta ruta, este path siempre tiene que estar en ultimo lugar
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactoComponent,
    PruebaComponent,
    ModificarEmpleadoComponent,
    ErrorPersonalizadoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [EmpleadosServiceService,DataService,LoginService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
