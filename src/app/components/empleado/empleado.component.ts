import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';

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

  constructor() { 

    const empleado1 = new Empleado("Cris", "RR", "jefa", 5000);
    const empleado2 = new Empleado("Fran", "FG", "secretario", 3000);
    const empleado3 = new Empleado("Juan", "MN", "administrativo", 2000);

    this.empleados.push(empleado1, empleado2, empleado3);
  }

  enviarInformacion(){
    const empleadoNuevo = new Empleado(this.nombre,this.apellidos,this.cargo,this.salario);
    
    this.empleados.push(empleadoNuevo);

    this.resetInfo();
  }

  resetInfo(){
    this.nombre="";
    this.apellidos="";
    this.cargo="";
    this.salario=0;
  }

  ngOnInit():void{
    console.log("ngOnInit");
  }

  arrayCaracteristicas = [''];

  addCaracteristica(newCaracteristica: string) {
    this.arrayCaracteristicas.push(newCaracteristica);
  }

}
