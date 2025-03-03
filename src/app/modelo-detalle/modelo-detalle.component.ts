import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modelo-detalle',
  standalone: true,
  templateUrl: './modelo-detalle.component.html',
  styleUrl: './modelo-detalle.component.scss'
})
export class ModeloDetalleComponent {
  @Input() modelo: any;
}