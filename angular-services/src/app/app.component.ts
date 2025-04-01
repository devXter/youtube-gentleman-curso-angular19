import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from './services/character.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Character } from './models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /*
  Nota: El ChangeDetection con strategy OnPush va a decir que sólo 3 cosas van a hacer cambios en mi aplicación:
  1. Parámetros de entrada.
  2. Cambios por interacción del usuario, por ejemplo, el usuario hacer click en un botón.
  3. Cambios por llamadas asíncronas, por ejemplo, un observable.

  Ahora han removido zone.js porque ahora tenemos los signals
  Las signals ahora hace que la detección de cambios sea directa, sólo tendrán cambios los componentes que comparten la señal (signal)
  */

  title = 'angular-services';

  characterService: CharacterService = inject(CharacterService);
  characters: Signal<Character[]> = computed(() =>
    this.characterService.getFormattedCharacters()
  );
}
