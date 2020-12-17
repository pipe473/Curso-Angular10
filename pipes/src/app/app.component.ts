import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  personajes: string[] = ['Ironman', ' Spiderman', ' Thor', ' Loki', ' Groot', ' Superman'];
  PI: number = 3.141592653589793;
  porcentaje:number = 0.234;
  salario:number = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }
}
