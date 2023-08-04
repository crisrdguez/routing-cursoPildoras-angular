import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosServiceService } from 'src/app/services/empleados-service.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  nombre:string="";
  apellidos:string="";
  cargo:string="";
  salario:number=0;

  empleados:Empleado[]=[];

  constructor(private empleadosService:EmpleadosServiceService) { }

  enviarInformacion(){
    const empleadoNuevo = new Empleado(this.nombre,this.apellidos,this.cargo,this.salario);

    //llamo al metodo que agrega empleados dentro de mi servicio
    this.empleadosService.agregarEmpleadoServicio(empleadoNuevo);
    
    //this.empleados.push(empleadoNuevo);

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

  arrayCaracteristicas = [''];

  addCaracteristica(newCaracteristica: string) {
    this.arrayCaracteristicas.push(newCaracteristica);
  }





}
