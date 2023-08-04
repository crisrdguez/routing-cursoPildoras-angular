import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  empleados:Empleado[]=[];

  constructor() { 
    const empleado1 = new Empleado("Cris", "RR", "jefa", 5000);
    const empleado2 = new Empleado("Fran", "FG", "secretario", 3000);
    const empleado3 = new Empleado("Juan", "MN", "administrativo", 2000);

    this.empleados.push(empleado1, empleado2, empleado3);
  }

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
  }

  encontrarEmpleado(id:number){
    let empleado:Empleado = this.empleados[id];
    return empleado;
  }

  actualizaEmpleado(id:number, empleado:Empleado){
    let empleadoModificado = this.empleados[id]; //almaceno en empleadoModificado, en la posicion id del array de empleados, el empleado que he modificado
    //sobreescribimos
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
  }

}
