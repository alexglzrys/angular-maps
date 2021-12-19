import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrls: ['./mini-mapa.component.css']
})
export class MiniMapaComponent implements AfterViewInit {

  // Obtner una referencia al elemento que tiene asociada la variable de plantilla (visor de mapa)
  @ViewChild('mapa') mapaDiv!: ElementRef;
  // Este componente acepta propiedades de su elemento padre. (coordenadas para posicionar el mapa)
  @Input() centerCoords!: [number, number]
  // Propiedad que hace referencia a la instancia de mapa
  mapa!: mapboxgl.Map

  constructor() { }

  ngAfterViewInit(): void {
    // Inicializar mapa
    this.mapa = new mapboxgl.Map({
      container: this.mapaDiv.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      // Mapbox acepta coordenadas en long, lat (Google maps es al revés)
      center: this.centerCoords,
      zoom: 15,
      interactive: false, // Evitar que el usuario interactue con el mapa
    })

    // Generar marcador al centro del mapa
    const newMarker = new mapboxgl.Marker().setLngLat(this.centerCoords).addTo(this.mapa)
  }

}
