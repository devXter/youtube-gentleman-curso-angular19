import { Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  imports: [],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {
  // Permite cargar contenido de forma diferida según una condición
  // Mejora el rendimiento y aplica lazy loading ya que retrasa la carga de partes no criticas de la app.

  isImageVisible: boolean = false;

  showImage(): void {
    this.isImageVisible = true;
  }
}
