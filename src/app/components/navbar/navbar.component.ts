import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    // Inyectamos el Router en el constructor
    constructor(private router: Router) {}

    // Método para navegar a la página de servicios
    goToServicios() {
      this.router.navigate(['/servicios']);  // Navega a la ruta /servicios
}
}
