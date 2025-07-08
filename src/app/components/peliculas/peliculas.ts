import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  imports: [],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css'
})
export class Peliculas {

  public titulo: string;
  public peliculas: Array<Pelicula>;

  constructor() {
    this.titulo = 'Modelo Peliculas';
    this.peliculas = [
      new Pelicula('El Padrino', 'Crimen', 'Francis Ford Coppola', 1972, 'Paramount Pictures', false),
      new Pelicula('Inception', 'Ciencia Ficción', 'Christopher Nolan', 2010, 'Warner Bros.', true),
      new Pelicula('The Dark Knight', 'Acción', 'Christopher Nolan', 2008, 'Warner Bros.', true),
      new Pelicula('Superman', 'Accion', 'James Gunn', 2025, 'Warner Bros.', true)
    ];
  }
  ngOnInit() {
    console.log(this.peliculas);
  }
}

