import { Component } from '@angular/core';
import { ServiciosSectionComponent } from '../servicios-section/servicios-section.component';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component';
import { TestimoniosComponent } from '../testimonios/testimonios.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    ServiciosSectionComponent,
    AcercaDeComponent,
    TestimoniosComponent,
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {

}