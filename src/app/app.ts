import { Component } from '@angular/core';
import { ProductoComponent } from "./producto/producto.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.css',
  imports: [ProductoComponent]
})
export class App {
  protected title = 'Angular';
}
