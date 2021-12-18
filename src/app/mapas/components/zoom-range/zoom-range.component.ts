import { Component, OnInit } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      /* Especificar las dimensiones del visor de mapa */
      #mapa {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      /* Especificaciones css para los controles */
      .controles {
        background-color: white;
        position: fixed;
        z-index: 10;
        left: 30px;
        bottom: 40px;
        padding: 1rem;
      }
    `
  ]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Inicializar MapBox
    let map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      // Mapbox acepta coordenadas en lat, long (Google maps es al revés)
      center: [-99.19097770198496, 19.433701491408804],
      zoom: 16,
    });
  }

}
