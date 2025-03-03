import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-section',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule a imports
  templateUrl: './servicios-section.component.html',
  styleUrl: './servicios-section.component.scss'
})
export class ServiciosSectionComponent {
  servicios = [
    {
      nombre: 'Mantenimiento de Coches',
      descripcionCorta: 'Realizamos mantenimiento preventivo y correctivo...',
      descripcionLarga: 'Realizamos mantenimiento preventivo y correctivo de todo tipo de vehículos...',
      imagen: 'https://img.freepik.com/vector-gratis/trabajador-servicio-taller-reparacion-automoviles-reemplaza-neumatico-danado-ruedas-cambio_1284-16850.jpg'
    },
    {
      nombre: 'Venta de Coches',
      descripcionCorta: 'Tenemos una amplia gama de modelos...',
      descripcionLarga: 'Tenemos una amplia gama de modelos de coches nuevos y seminuevos...',
      imagen: 'https://img.freepik.com/vector-premium/gerente-vendedores-autos-encuentra-autos-venta_109722-615.jpg'
    },
    {
      nombre: 'Asesoría en Compra',
      descripcionCorta: 'Te ayudamos a elegir el coche...',
      descripcionLarga: 'Te ayudamos a elegir el coche que mejor se adapte a tus necesidades...',
      imagen: 'https://media.istockphoto.com/id/1148658941/es/vector/feliz-pareja-sonriente-hombre-mujer-personaje-comprando-nuevo-coche-y-tienda-tienda-regalo.jpg?s=612x612&w=0&k=20&c=DvXMkl8dYIhKL-twJz0oueuGFtrlAqdK_DJ4eT105qk='
    },
    {
      nombre: 'Seguro de Coches',
      descripcionCorta: 'Ofrecemos seguros completos...',
      descripcionLarga: 'Ofrecemos seguros completos para proteger tu vehículo ante cualquier imprevisto...',
      imagen: 'https://media.istockphoto.com/id/1125198441/es/vector/icono-de-seguros-de-coche.jpg?s=612x612&w=0&k=20&c=I4qUEdAVtcoXFqs5668UAV4NZ8l3QG5EunYY2CVVirg='
    },
    {
      nombre: 'Financiamiento',
      descripcionCorta: 'Ofrecemos opciones de financiamiento...',
      descripcionLarga: 'Ofrecemos opciones de financiamiento flexible para facilitar la compra de tu coche...',
      imagen: 'https://media.istockphoto.com/id/1277316443/es/vector/dinero-del-veh%C3%ADculo-del-coche-costoso-vector-del-concepto-del-pr%C3%A9stamo-idea-del-precio-del.jpg?s=612x612&w=0&k=20&c=A74BxIXtcdwjBPlpZzryVXowqo17bYKOyswG9R8b5wo='
    },
    {
      nombre: 'Reparaciones Especializadas',
      descripcionCorta: 'Contamos con técnicos especializados...',
      descripcionLarga: 'Contamos con técnicos especializados para reparaciones de todo tipo de vehículos...',
      imagen: 'https://img.freepik.com/vector-premium/ilustracion-vector-estilo-dibujos-animados-diseno-mantenimiento-vehiculo-servicio-auto-reparacion-coche-profesional-aislado-blanco_169479-3155.jpg'
    }
  ];

  servicioSeleccionado: any;

  mostrarDetalles(servicio: any) {
    this.servicioSeleccionado = servicio;
  }
}