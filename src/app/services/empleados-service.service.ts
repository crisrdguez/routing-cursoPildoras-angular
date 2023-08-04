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

}
