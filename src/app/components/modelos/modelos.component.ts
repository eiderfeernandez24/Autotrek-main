import { Component } from '@angular/core';
import { ModeloDetalleComponent } from '../../modelo-detalle/modelo-detalle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modelos',
  standalone: true,
  imports: [ModeloDetalleComponent, CommonModule],
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.scss'
})
export class ModelosComponent {
  modelos = [
    {
      nombre: 'Mercedes Clase C',
      imagen: 'https://media.revistagq.com/photos/603cc7d715b051f6a14e07a3/master/w_1600%2Cc_limit/21c0053-001-3.jpg',
      descripcion: 'El Mercedes-Benz Clase C es la fusión perfecta de elegancia, confort y rendimiento...',
      motor: 'V8 Turbo 500HP',
      precio: '50,000 €',
      consumo: '8,5 km/l',
      color: 'Negro metálico'
    },
    {
      nombre: 'Cupra Ateca',
      imagen: 'https://media.revistagq.com/photos/5ef1b1324786c513db97a1b1/master/w_1600%2Cc_limit/coches-deportivos-ateca-del.jpg',
      descripcion: 'El Cupra Ateca es una muestra de fuerza y sofisticación en el segmento de SUV deportivos...',
      motor: '2.0 TSI 300HP',
      precio: '45,000 €',
      consumo: '7,3 km/l',
      color: 'Gris Metalizado'
    },
    {
      nombre: 'Audi A3 Sportback',
      imagen: 'https://totalrenting.es/wp-content/uploads/2023/01/AUDI-A3-Sportback-30-TDI-cabecera.jpg',
      descripcion: 'El Audi A3 Sportback es el compañero perfecto para aquellos que buscan el equilibrio entre estilo y practicidad...',
      motor: '2.0 TDI 150HP',
      precio: '40,000 €',
      consumo: '5,0 km/l',
      color: 'Blanco'
    },
    {
      nombre: 'BMW Serie 3',
      imagen: 'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/bmw-serie-3-2018-blanco-delantera.jpg?resize=980:*',
      descripcion: 'El BMW Serie 3 es un sedán deportivo que combina una estética refinada con un rendimiento impresionante...',
      motor: '2.0 Turbo 190HP',
      precio: '43,000 €',
      consumo: '6,2 km/l',
      color: 'Blanco'
    },
    {
      nombre: 'Toyota RAV4',
      imagen: 'https://hips.hearstapps.com/hmg-prod/images/2025-toyota-rav4-101-6707e09a230c3.jpg',
      descripcion: 'El Toyota RAV4 es un SUV híbrido que combina potencia, eficiencia y versatilidad...',
      motor: '2.5 Hybrid 222HP',
      precio: '39,000 €',
      consumo: '5,8 km/l',
      color: 'Azul Oscuro'
    },
    {
      nombre: 'Ford Mustang',
      imagen: 'https://es.ford.com/is/image/content/dam/na/ford/en_us/images/mustang/2025/dm/25_FRD_MST_61047.tif?croppathe=3x2&wid=1440&fmt=webp',
      descripcion: 'El Ford Mustang es un icono del automovilismo que ha dejado su huella en la cultura popular y continúa siendo uno de los coches más deseados...',
      motor: 'V8 450HP',
      precio: '50,000 €',
      consumo: '8,1 km/l',
      color: 'Blanco'
    }
  ];
}