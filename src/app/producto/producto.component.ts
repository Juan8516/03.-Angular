import {Component} from '@angular/core';

@Component({
  selector: 'Mi-Producto',
  templateUrl:'./producto.component.html',
  styleUrl: './producto.component.css',
})

export class ProductoComponent {

  public nombre: string = 'PC Portatil';
  public producto: string = 'Asus ROG Zephyrus';
  public marca: string = 'Asus';
  public precio: number = 8000000;
  public descripcion: string = 'Un potente PC portátil para gamers y profesionales.';

  constructor() {
    this.nombre;
    this.producto;
    this.marca;
    this.precio;
    this.descripcion;
  }
}
