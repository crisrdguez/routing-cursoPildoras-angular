import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  empleados:Empleado[]=[]; //tenemos que conseguir que en este array se vayan agregando los empleados que añado con el formulario, lo hare con el metodo setEmpleados()

  constructor(private datosEmpleados:DataService) { 
    /*
    const empleado1 = new Empleado("Cris", "RR", "jefa", 5000);
    const empleado2 = new Empleado("Fran", "FG", "secretario", 3000);
    const empleado3 = new Empleado("Juan", "MN", "administrativo", 2000);
    const empleado4 = new Empleado("Laura", "Lopez", "Animadora", 570);
    const empleado5 = new Empleado("Sara", "Gomez", "Psicologa", 3990);
    const empleado6 = new Empleado("Pedro", "Gonzalez", "Cocinero", 6000);

    this.empleados.push(empleado1, empleado2, empleado3,empleado4,empleado5,empleado6);*/
  }

  setEmpleados(misEmpleados:Empleado[]){

      this.empleados=misEmpleados;

  }

  //metodo que se encarga de obtener la informacion de DataService
  obtenerEmpleadosBBDD(){

    return this.datosEmpleados.cargarEmpleados(); //Esto devuelve un Observable

  }

  agregarEmpleadoServicio(empleado:Empleado){
    //Uso de firebase, despues de agregar un empleado al array empleados, tendre que enviar el array empleados(con los que ya meti en la bbdd en su dia), mas el que acabo de agregar
    this.empleados.push(empleado);

    //usamos firebase

    //Para hacer esto tenemos que usar el servicio data.service, para eso inyecto el servicio data en este de empleados en el constructos
    this.datosEmpleados.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(id:number){
    let empleado:Empleado = this.empleados[id];
    return empleado;
  }

  actualizaEmpleado(id:number, empleado:Empleado){
  
    //almaceno en empleadoModificado, en la posicion id del array de empleados, el empleado que he modificado
    let empleadoModificado = this.empleados[id]; 
    //sobreescribimos
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

    //Usamos Firebase

    this.datosEmpleados.actualizarEmpleado(id, empleado);

  }

  eliminarEmpleado(id:number){

    this.empleados.splice(id,1); //desde el indice que le hemos pasado, queremos borrar un unico empleado

    //Usamos Firebase
    this.datosEmpleados.eliminaEmpleado(id);

    //Reconstruir, volvemos a guardar el array empleados utilizando el metodo guardarEmpleados de este servicio
    //Esto evita que al eliminar un empleado, luego los indices no van en orden y aparecen errores
    if(this.empleados!=null){
      this.datosEmpleados.guardarEmpleados(this.empleados);
    }
    


  }

}
