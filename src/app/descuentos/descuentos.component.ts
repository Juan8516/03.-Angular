import { Component } from "@angular/core";

@Component({
  selector: "Mi-Descuentos",
  templateUrl: "./descuentos.component.html",
  styleUrls: ["./descuentos.component.css"],
})

export class DescuentosComponent {

  public enunciado: string = "Los mejores descuentos de la temporada de verano";
  public descripcionEnunciado = "Saldos disponibles desde el mes de agosto";
  public producto: string = "Mouse Gamer";
  public marca: string = "Logitech";
  public descripcionProducto: string = "Un mouse gamer de alta precisión y velocidad.";
  public precio: number = 100;
}
