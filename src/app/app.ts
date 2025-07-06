import { Component } from '@angular/core';
import { Ventas } from './components/ventas/ventas';
import { ProductoComponent } from './components/producto/producto.component';
import { Usuario } from './components/usuario/usuario';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { config } from './models/config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.css',
  imports: [Ventas]
})
export class App {
  protected title = 'Angular';
  subTitle = config.subTitle;
  description = config.description;
}
