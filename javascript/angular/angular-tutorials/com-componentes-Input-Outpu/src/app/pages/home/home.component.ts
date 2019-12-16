import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nombre = 'Nombre Usuario';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  cambiarNombre() {
    this.nombre = 'Cristhian Forero';
    this.dataService.nombreUsuario = this.nombre;
  }

  hijoCambioNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
    this.dataService.nombreUsuario = nuevoNombre;
  }

}
