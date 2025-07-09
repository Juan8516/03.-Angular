import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  imports: [FormsModule],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css'
})
export class Peliculas {

  public titulo: string;
  public peliculas: Array<Pelicula>;

  //Trabajo con formularios y binding bidireccional
  public mi_pelicula: string = "";

  constructor() {
    this.titulo = 'Modelo Peliculas';
    this.peliculas = [
      new Pelicula(1, 'El Padrino', 'Crimen', 'Francis Ford Coppola', 1972, 'Paramount Pictures', false),
      new Pelicula(2, 'Inception', 'Ciencia Ficción', 'Christopher Nolan', 21, 'Warner Bros.', true),
      new Pelicula(3, 'The Dark Knight', 'Acción', 'Christopher Nolan', 28, 'Warner Bros.', true),
      new Pelicula(4, 'Superman', 'Accion', 'James Gunn', 2025, 'Warner Bros.', true)
    ];
  }
  ngOnInit() {
    console.log(this.peliculas);

    this.peliculas[0].titulo = 'El padrino II';
  }
}

