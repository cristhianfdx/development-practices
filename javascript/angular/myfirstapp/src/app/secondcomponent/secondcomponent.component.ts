import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondComponent implements OnInit {

  title = 'Hola Mundo';
  constructor() { }

  ngOnInit() {
  }

}
