import { Component } from '@angular/core';
import { ProductoComponent } from "./producto/producto.component";
import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.css',
  imports: [Usuario]
})
export class App {
  protected title = 'Angular';
}
