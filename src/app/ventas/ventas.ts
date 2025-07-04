import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [ProductoComponent, NgClass, NgStyle],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas {

  public colorear: boolean = false;

  public mostrar: string = "si";

  misEstilos = {
    'background-color': 'blue',
    'font-size': '20px',
    'color': 'white',
    'font-weight': 'bold',
    'border': '5px solid black',
    'border-radius': '10px',
    'padding': '10px',
  }
}
