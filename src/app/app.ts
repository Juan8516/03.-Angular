import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from "./producto/producto.component";
import { DescuentosComponent } from './descuentos/descuentos.component';
import { Usuario } from "./usuario/usuario";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.css',
  imports: [ProductoComponent, DescuentosComponent, Usuario]
})
export class App {
  protected title = 'Angular';
}
