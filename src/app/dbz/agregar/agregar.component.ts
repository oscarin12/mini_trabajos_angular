import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

 /// /campos es un tipo de personaje
  @Input() nuevo:personaje={
    nombre:'',
    poder: 0
  }
  constructor(private DbzService:DbzService){}
   cambiarNombre(event:any){
     console.log(event.target.value);
   }

  // @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();
  agregar(){
  
    if(this.nuevo.nombre.trim().length=== 0){return}
  console.log(this.nuevo);
  //this.onNuevoPersonaje.emit(this.nuevo); 
  this.DbzService.agregarPersonajes(this.nuevo);
  this.nuevo = {
  
    nombre : '',
    poder :0
  }

  }
}
