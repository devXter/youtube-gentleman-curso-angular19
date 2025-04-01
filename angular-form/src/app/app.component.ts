import { Component, computed, inject, Signal } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormChildComponent } from './form-child/form-child.component';
import { toSignal } from '@angular/core/rxjs-interop';

/**
 * Interfaz que define la estructura de un item del formulario
 */
export interface ItemForm {
  /** Identificador único del item */
  id: FormControl<number>;
  /** Nombre del item */
  name: FormControl<string>;
  /** Valor numérico del item */
  value: FormControl<number>;
}

export type CustomFormGroup = FormGroup<ItemForm>;

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /** Constructor de formularios no nulos para evitar valores nulos en los controles */
  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  /** Formulario principal que contiene un array de items */
  form: FormGroup<{ items: FormArray<CustomFormGroup> }> = this.fb.group({
    items: this.fb.array<CustomFormGroup>([]),
  });

  /**
   * Getter que proporciona acceso al FormArray de items
   * @returns FormArray que contiene los grupos de formularios de items
   */
  get items(): FormArray<CustomFormGroup> {
    return this.form.controls.items;
  }

  /** Signal que observa los cambios en los valores de los items */
  itemChanges = toSignal(this.items.valueChanges);

  /**
   * Signal computado que calcula el valor total de todos los items
   * @returns Número que representa la suma de todos los valores de los items
   */
  totalValue: Signal<number> = computed((): number => {
    const changes = this.itemChanges();
    if (!changes) return 0;

    return changes.reduce((total, item) => total + Number(item?.value) || 0, 0);
  });

  /**
   * Agrega un nuevo item al formulario
   * Crea un nuevo FormGroup con campos id, name y value
   * El id se genera automáticamente basado en la longitud actual del array
   */
  addItem(): void {
    const id: number = this.items.length + 1;
    const itemForm = this.fb.group<ItemForm>({
      id: this.fb.control(id),
      name: this.fb.control('', { validators: [Validators.required] }),
      value: this.fb.control(0, { validators: [Validators.required] }),
    });

    this.form.controls.items.push(itemForm);
  }
}
