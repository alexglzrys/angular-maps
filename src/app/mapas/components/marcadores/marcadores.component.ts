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

    .list-group {
      position: fixed;
      right: 20px;
      top: 20px;
      z-index: 100;
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

    // Establecer el primer marcador en el mapa (forma estática)
    let marker = new mapboxgl.Marker({
      //element: markerHTML
      draggable: true,
    }).setLngLat(this.centerCoords)
      .addTo(this.mapa);
  }

  // Agregar marcadores de forma dinámica en el mapa
  agregarMarcador() {
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color: this.generarColorHex()
    }).setLngLat(this.centerCoords).addTo(this.mapa)
  }

  generarColorHex() {
    const simbolos: string = '0123456789ABCDEF';
    let color: string = '#';
    for(let i = 0; i < 6; i++) {
      color = color + simbolos[Math.floor(Math.random() * 16)];
    }
    return color;
  }


}
