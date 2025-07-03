import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [ProductoComponent, NgClass],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas {

  public colorear: boolean = false;

}
