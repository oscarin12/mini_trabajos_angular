import { Component, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

//interfas sin () y debe terner ;



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {


nuevo: personaje={
  nombre:'maestro',
  poder:7500
};


// get personajes():personaje[]{
//   return this.DbzService.personajes;
// }
// agregarNuevoPersonaje(argumento:personaje){
// this.personajes.push(argumento);
// }
// inllesion de independencias 
constructor(){
 

}
}

//event.preventDefault();