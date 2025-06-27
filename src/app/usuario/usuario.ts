import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class Usuario {

  webCliReference = "https://docs.angular.lat/cli"

  lenguajesProgramacion: string[] = [
    "javascript",
    "typescript",
    "Python",
    "PHP",
    "Angular",
  ]

  marcasComputadoras: {id: number, marca: string}[] = [
    {id: 1, marca: "Apple"},
    {id: 2, marca: "Lenovo"},
    {id: 3, marca: "HP"},
    {id: 4, marca: "Asus"},
    {id: 5, marca: "Dell"},
  ]

  marcasMonitores: {id: number, marca: string}[] = [];

  ngOnInit() {
    this.marcasMonitores = [];
  }

  redirigir = true;

  cambioRedireccion() {

    if(this.redirigir == false) {

      this.redirigir = true;

    } else {

      this.redirigir = false;

    }
  }
}
