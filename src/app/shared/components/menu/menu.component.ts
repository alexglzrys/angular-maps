import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent implements OnInit {

  // Definición de los elementos de menú de navegación
  menuItems: MenuItem[] = [
    { ruta: 'mapas/fullscreen', nombre: 'FullScreen' },
    { ruta: 'mapas/zoom-range', nombre: 'Zoom Range' },
    { ruta: 'mapas/marcadores', nombre: 'Marcadores' },
    { ruta: 'mapas/propiedades', nombre: 'Propiedades' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
