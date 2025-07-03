import { Component } from '@angular/core';
import { ProductoComponent } from "./producto/producto.component";
import { Usuario } from './usuario/usuario';
import { Ventas } from './ventas/ventas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.css',
  imports: [Ventas]
})
export class App {
  protected title = 'Angular';
}
