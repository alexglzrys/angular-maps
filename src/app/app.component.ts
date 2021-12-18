import { Component, OnInit } from '@angular/core';
// importa toda la librería (*) y asociala con el nombre de mapboxlg
// Se hace cuando la librería no exporta un módulo, es decir, está escrita al viejo estilo de JS
import * as mapboxgl from "mapbox-gl";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // Especificar token para MapbBox, el cual se usará de global en toda la aplicación
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }

}
