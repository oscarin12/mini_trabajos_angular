import { Injectable } from "@angular/core";
import { personaje } from '../interfaces/dbz.interface';


@Injectable()

export class DbzService{

    //arreglos de personajes
private _personajes: personaje[] = [
    {
      nombre:'goku',
      poder:15000
    },
    {
      nombre:'vegeta',
      poder:7500
    }
  ];
  get personajes():personaje[]{
     return [...this._personajes]; 
  }
constructor(){}
 agregarPersonajes(personaje:personaje){

    this._personajes.push(personaje);
 }

}