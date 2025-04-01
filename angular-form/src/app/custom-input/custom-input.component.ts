import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  InputSignal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

/**
 * Componente de entrada personalizado que implementa ControlValueAccessor
 * Permite la integración con formularios reactivos y template-driven
 */
@Component({
  selector: 'app-custom-input',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  /** Control de formulario requerido que se vincula con el input */
  control: InputSignal<FormControl<any>> = input.required<FormControl<any>>();

  /** Función que se ejecuta cuando el control es tocado */
  onTouched = () => {};
  /** Función que se ejecuta cuando el valor del control cambia */
  onChange = (_value: any) => {};

  /**
   * Escribe un valor en el control del formulario
   * @param value - El valor a escribir en el control
   */
  writeValue(value: any): void {
    console.log(`CustomInputComponent -> writeValue 'value': ${value}`);
    console.log(
      `CustomInputComponent -> writeValue 'control().value': ${
        this.control().value
      }`
    );
    if (value !== this.control().value) {
      this.control().setValue(value, { emitEvent: false });
    }
  }

  /**
   * Registra la función de cambio de valor
   * @param fn - Función a ejecutar cuando el valor cambia
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registra la función de "touched"
   * @param fn - Función a ejecutar cuando el control es tocado
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Establece el estado de deshabilitado del control
   * @param isDisabled - Booleano que indica si el control debe estar deshabilitado
   */
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control().disable() : this.control().enable();
  }
}
