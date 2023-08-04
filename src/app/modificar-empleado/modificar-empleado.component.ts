import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosServiceService } from '../services/empleados-service.service';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent implements OnInit{

  i:number=0;
  nombre:string="";
  apellidos:string="";
  cargo:string="";
  salario:number=0;

  empleados:Empleado[]=[];

  constructor(private router:Router, private route:ActivatedRoute, private empleadosService:EmpleadosServiceService) { }

  modificarInformacion(){
    const empleadoNuevo = new Empleado(this.nombre,this.apellidos,this.cargo,this.salario);

    //llamo al metodo que modifica empleados dentro de mi servicio
    this.empleadosService.actualizaEmpleado(this.i, empleadoNuevo);
    
    //Redirijo a quienes somos
    this.router.navigate(['/quienes']);

    
  }

  eliminarInformacion(){
    //llamo al metodo que modifica empleados dentro de mi servicio
    this.empleadosService.eliminarEmpleado(this.i);
    
    //Redirijo a quienes somos
    this.router.navigate(['/quienes']);

    
  }


  ngOnInit():void{
    this.empleados=this.empleadosService.empleados;

    //Pasar parametros a rutas, rescatamos el id que viene en la url
    this.i = this.route.snapshot.params['id']; //id es el nombre que le he puesto en app.module.ts

    //necesito un empleado que tiene el id que le pasamos por la url
    let emple:Empleado = this.empleadosService.encontrarEmpleado(this.i);

    //Cargamos en el cuadro del formulario los datos del empleado seleccionado
    this.nombre = emple.nombre;
    this.apellidos=emple.apellido;
    this.cargo=emple.cargo;
    this.salario=emple.salario
  }

  resetInfo(){
    this.nombre="";
    this.apellidos="";
    this.cargo="";
    this.salario=0;
  }
}
