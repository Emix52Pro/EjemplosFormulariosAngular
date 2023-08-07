// formulario-template.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent {
  ci: string = '';
  nombre: string = '';
  fechaNacimiento: Date | null = null;
  ciudad: string = '';
  ciudades: string[] = ['Machala', 'Guayaquil', 'Quito'];
  mensajeConfirmacion: string | null = null;

  constructor() {}

  guardar() {
    // Implementa la lógica para guardar los datos del formulario si es necesario
    console.log('Datos guardados:', this.ci, this.nombre, this.fechaNacimiento, this.ciudad);

    // Mostrar mensaje de confirmación
    this.mensajeConfirmacion = 'Formulario guardado con éxito.';
  }

  limpiar() {
    // Limpia los campos del formulario y el mensaje de confirmación
    this.ci = '';
    this.nombre = '';
    this.fechaNacimiento = null;
    this.ciudad = '';
    this.mensajeConfirmacion = null;
  }
}
