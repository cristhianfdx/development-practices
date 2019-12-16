import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit, OnDestroy {

  mensaje = 'Mensaje!';
  nombreSubcription: Subscription;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    // this.nombreSubcription = this.dataService.nombre$.subscribe(texto => {
    //   console.log('Hijo:', texto);
    //   this.mensaje = texto;
    // });

    // this.dataService.nombre$.emit('Hijo!');
  }

  ngOnDestroy() {
    // this.nombreSubcription.unsubscribe();
  }

}
