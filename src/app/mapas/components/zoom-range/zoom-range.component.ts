import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
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
export class ZoomRangeComponent implements OnInit, AfterViewInit {

  // Hacer referencia al elemento visor del mapa
  @ViewChild('mapa') mapaDiv!: ElementRef;

  // Propiedad que hace referencia al mapa
  mapa!: mapboxgl.Map

  zoomLevel: number = 16

  constructor() { }

  ngAfterViewInit(): void {
    // Inicializar MapBox, tomando como referencia la variable de plantilla asociada con el visor de mapa (#variableTemplate)
    this.mapa = new mapboxgl.Map({
      container: this.mapaDiv.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      // Mapbox acepta coordenadas en lat, long (Google maps es al revés)
      center: [-99.19097770198496, 19.433701491408804],
      zoom: this.zoomLevel,
    });

    // Listener para escuchar cambios en el mapa
    this.mapa.on('zoom', (event) => {
      // El evento de zoom se puede dar por diversas acciones del usuario (Mouse, Touch, Wheel)
      console.log(event)
      this.zoomLevel = this.mapa.getZoom()
    })

    // Listener para escuchar cuando finaliza el zoom
    this.mapa.on('zoomend', (event) => {
      // No permitir establecer un zoom mayor a 18
      if (this.zoomLevel > 18) {
        this.mapa.zoomTo(18)
      }
    })
  }

  ngOnInit(): void {
    /**
     * TODO: No puedo inicializar mapbox en este hook dado que la referencia a variables de plantilla solo
     * están disponibles una vez que la vista del componente se ha inicializado y renderizado todo su contenido.
     * con variables de plantilla, se genera automáticamente un ID único para el elemento en cuestión
     *
     * ! Con ID´s si se puede, pero el inconveniente que puede existir en el futuro es que tngamos
     * muchos mapas en una misma vista, y al momento de inicializarlos, se tendría que colocar diferentes IDs.
     * Pero si el visor se encuentra escrito dentro de un componente, los IDS iguales generarían un conflicto.
     */
  }

  zoomIn() {
    // Incrementar zoom
    this.mapa.zoomIn()
  }

  zoomOut() {
    // Alejar zoom
    this.mapa.zoomOut()
  }

  // El valor del control range cambio, por tanto actualizo el zoom en el mapa
  cambioValorZoom(value: string) {
    this.mapa.zoomTo(Number(value))
  }

}
