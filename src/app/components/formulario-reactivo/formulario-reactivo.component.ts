// formulario-reactivo.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  formulario!: FormGroup;
  ciudades: string[] = ['Machala', 'Guayaquil', 'Quito'];
  mensajeConfirmacion: string | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      ci: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: [null, Validators.required],
      ciudad: ['Seleccione Opción', Validators.required]
    });
  }

  guardar() {
    // Implementa la lógica para guardar los datos del formulario si es necesario
    console.log('Datos guardados:', this.formulario.value);

    // Mostrar mensaje de confirmación
    this.mensajeConfirmacion = 'Formulario guardado con éxito.';
  }

  limpiar() {
    // Limpia el formulario y el mensaje de confirmación
    this.formulario.reset({
      ciudad: 'Seleccione Opción'
    });
    this.mensajeConfirmacion = null;
  }
}
