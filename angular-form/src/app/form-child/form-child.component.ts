import { Component, input, InputSignal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemForm } from '../app.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';

/**
 * Componente hijo que maneja un grupo de formulario individual
 * Se utiliza para renderizar y gestionar cada item del formulario principal
 */
@Component({
  selector: 'app-form-child',
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './form-child.component.html',
  styleUrl: './form-child.component.scss',
})
export class FormChildComponent {
  /** Grupo de formulario requerido que contiene los controles del item */
  formGroup: InputSignal<FormGroup<ItemForm>> =
    input.required<FormGroup<ItemForm>>();
}
