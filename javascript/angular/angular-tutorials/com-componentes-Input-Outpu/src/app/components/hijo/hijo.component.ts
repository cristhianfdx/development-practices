import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
// import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo = 'sin nombre';
  @Output() cambioNombreHijo = new EventEmitter<string>();

  // constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  cambiarNombre() {
    this.nombreHijo = 'Alexander';
    this.cambioNombreHijo.emit(this.nombreHijo);
    // this.dataService.nombreUsuario = this.nombreHijo;
  }

}
