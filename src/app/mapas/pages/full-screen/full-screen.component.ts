import { Component, OnInit } from '@angular/core';
import * as mapboxgl from "mapbox-gl";  // importa toda la librería (*) y asociala con el nombre de mapboxlg (Se hace cuando la librería no exporta un módulo)

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #mapa {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  // Instalar MapBox: npm install mapbox-gl --save
  // Instalar anotaciones de TS para mapBox (el cual esta escrito en JS no TS): npm i --save-dev @types/mapbox-gl

  constructor() { }

  ngOnInit(): void {
    // Incializar MapBox

    // Especificar token de forma local (solo para usar dentro de este componente)
    //(mapboxgl as any).accessToken = environment.mapboxToken;

    // Indicar en que elemento (id) se proyectará el contenido del mapa
    let map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      // Mapbox acepta coordenadas en lat, long (Google maps es al revés)
      center: [-99.19097770198496, 19.433701491408804],
      zoom: 16,
    });
  }

}
