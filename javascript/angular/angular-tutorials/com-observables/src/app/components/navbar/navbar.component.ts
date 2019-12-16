import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mensaje = 'Navbar!';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.nombre$
      .subscribe(texto => {
        this.mensaje = texto;
        console.log('Navbar:', texto);
      });
  }

}
