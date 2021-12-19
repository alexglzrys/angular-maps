import { Component, OnInit } from '@angular/core';
import { propiedades } from 'src/app/shared/data/propiedades';
import { Propiedad } from 'src/app/shared/interfaces/propiedad';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent implements OnInit {

  propiedades: Propiedad[] = propiedades;

  constructor() { }

  ngOnInit(): void {
  }

}
