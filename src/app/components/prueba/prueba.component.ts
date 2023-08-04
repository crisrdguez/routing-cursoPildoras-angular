import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosServiceService } from 'src/app/services/empleados-service.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit{

  nombre:string="";
  apellidos:string="";
  cargo:string="";
  salario:number=0;

  empleados:Empleado[]=[];

  constructor(private router:Router, private empleadosService:EmpleadosServiceService) { }

  enviarInformacion(){
    const empleadoNuevo = new Empleado(this.nombre,this.apellidos,this.cargo,this.salario);

    //llamo al metodo que agrega empleados dentro de mi servicio
    this.empleadosService.agregarEmpleadoServicio(empleadoNuevo);
    
    //Redirijo a quienes somos
    this.router.navigate(['/quienes']);

    this.resetInfo();
  }

  resetInfo(){
    this.nombre="";
    this.apellidos="";
    this.cargo="";
    this.salario=0;
  }

  ngOnInit():void{
    this.empleados=this.empleadosService.empleados;
  }


}
