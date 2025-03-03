import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  templateUrl: './formulario-contacto.component.html',
  styleUrl: './formulario-contacto.component.scss'
})
export class FormularioContactoComponent {
  enviarFormulario() {
    // Aquí iría la lógica para enviar el formulario
    const confirmationMessage = document.getElementById('confirmationMessage');
    if (confirmationMessage) {
      confirmationMessage.style.display = 'block';
    }
    // Puedes resetear el formulario aquí si lo deseas
  }
}