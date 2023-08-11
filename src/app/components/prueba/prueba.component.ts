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

    
  }

  ngOnInit():void{
    
    //this.empleados=this.empleadosService.empleados; //Esto funcionaba antes de usar firebase, ahora reescribe la informacion, modificando la bbdd

    //Mismo metodo que en empleados
    console.log(this.empleadosService.obtenerEmpleadosBBDD());

    const self=this; //Capturar el contexto actual, Al capturar el contexto actual en la variable self, aseguras que puedes acceder correctamente a las propiedades y métodos del componente en el contexto de la función subscribe.

    this.empleadosService.obtenerEmpleadosBBDD().subscribe({
      next(misEmpleados) {
          console.log(misEmpleados);
          
          self.empleados=Object.values(misEmpleados);//extraigo los valores de ese Observable y lo meto en mi array empleados, con lo cual este array tiene un registro
          //este array se lo quiero pasar(con este registro que tiene) al metodo

          self.empleadosService.setEmpleados(self.empleados);//Sin esto, antes cuando agregaba un nuevo empleado todo lo anterior era sustituido por este nuevo registro
          //Cada vez que agreguemos un registro, se llama al metodo setEmpleados, se le pasa el registro, y se va agregando a los empleados
      },
    })
  }


}
