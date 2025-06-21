import { Component } from '@angular/core';
import { DescuentosComponent } from '../descuentos/descuentos.component';
import { Usuario } from '../usuario/usuario';
import { Ventas } from '../ventas/ventas';

@Component({
  selector: 'Mi-Producto',
  imports: [DescuentosComponent, Usuario, Ventas],
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

  ngOnInit() {
    console.log("Componente Producto inicializado");
  }

  ngAfterViewInit() {
    console.log("Componente Producto y sus hijos han sido inicializados");
  }

  ngDoCheck() {
    console.log("El nombre del producto ha cambiado");
  }

  cambiarNombreProducto(){
    this.nombre = "Lenovo Legion 5 Pro";
  }

}
