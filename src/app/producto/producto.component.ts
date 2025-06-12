import {Component} from '@angular/core';

@Component({
  selector: 'Mi-Producto',
  templateUrl:'./producto.component.html',
  styleUrl: './producto.component.css',
})

export class ProductoComponent {
  constructor() {
    console.log("Cargado el componente de producto");
    alert("Descuentazo de 10% en todos los productos");
  }
}
