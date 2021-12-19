import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    /* Especificar las dimensiones del visor de mapa */
    .visor-mapa {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') mapaDiv!: ElementRef;
  mapa!: mapboxgl.Map
  zoomLevel: number = 15;
  centerCoords: [number, number] = [-99.19097770198496, 19.433701491408804];

  constructor() { }

  ngAfterViewInit(): void {
    // Inicializar mapa
    this.mapa = new mapboxgl.Map({
      container: this.mapaDiv.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      // Mapbox acepta coordenadas en lat, long (Google maps es al revés)
      center: this.centerCoords,
      zoom: this.zoomLevel,
    })

    // Se puede personalizar el contenido del marcador de posición en el mapa, por cualquier contenido HTML/CSS elaborado
    const markerHTML: HTMLElement = document.createElement('div');
    markerHTML.innerHTML = 'Hola mundo soy el marcador';

    // Establecer el primer marcador en el mapa
    let marker = new mapboxgl.Marker({
      //element: markerHTML
    }).setLngLat(this.centerCoords)
      .addTo(this.mapa);
  }

}
