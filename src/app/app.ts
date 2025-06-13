import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from "./producto/producto.component";
import { DescuentosComponent } from './descuentos/descuentos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.css',
  imports: [ProductoComponent, DescuentosComponent]
})
export class App {
  protected title = 'Angular';
}
