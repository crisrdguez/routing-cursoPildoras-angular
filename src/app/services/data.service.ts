import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //Primero tengo que conectar con la bbdd para traerme los empleados que hay alli guardados, en vez de hacerlo con empleados.service
  cargarEmpleados(){

    //Devolvernos los registros almacenados
    return this.http.get("https://mis-clientes-ce40f-default-rtdb.europe-west1.firebasedatabase.app/datos.json");

  }


  //Metodo que nos va a permitir guardar empleados

  guardarEmpleados(empleados:Empleado[]){
    /*
    this.http.post("https://mis-clientes-ce40f-default-rtdb.europe-west1.firebasedatabase.app/datos.json",empleados).subscribe(
      response=>console.log("Se han guardado los empleados: " + response),
      error=>console.log("Error: " + error),
    );*/

    //Si en vez de utilizar el metodo post usamos el metodo put, lo que hace es reemplazar la informacion que ya puede existir en la bbdd
    //con post se generaba un nuevo registro con todos los datos, mas los que voy agregando
    this.http.put("https://mis-clientes-ce40f-default-rtdb.europe-west1.firebasedatabase.app/datos.json",empleados).subscribe({//copio la url y añado al final datos.json y lo que quiero guardar, en este caso empleados*/
      next(response){
        console.log("Se han guardado los empleados: " + response)
      },
      error(err){
        console.log("Error: " + err)
      },
      complete() {
        console.info('Completado')
      },
    })
  }

  actualizarEmpleado(id:number, emple:Empleado){

    let url = `https://mis-clientes-ce40f-default-rtdb.europe-west1.firebasedatabase.app/datos/${id}.json`;

    this.http.put(url, emple).subscribe({
      next(response){
        console.log("Se han actualizado el empleado: " + response)
      },
      error(err){
        console.log("Error: " + err)
      },
      complete() {
        console.info('Completado actualizacion empleado')
      },
    })

  }

  eliminaEmpleado(id:number){

    let url = `https://mis-clientes-ce40f-default-rtdb.europe-west1.firebasedatabase.app/datos/${id}.json`;

    this.http.delete(url).subscribe({
      next(response){
        console.log("Se han borrado el empleado: " + response)
      },
      error(err){
        console.log("Error: " + err)
      },
      complete() {
        console.info('Completado borrado empleado')
      },
    })

  }


}

