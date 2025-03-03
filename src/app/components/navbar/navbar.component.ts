import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Importa Router y RouterLink

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {} // Agrega Router al constructor
}