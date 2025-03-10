import {Component} from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss'
})
export class IfComponent {
// Angular es una plataforma de estructuras
  protected isVisible: boolean = true; // es visible dentro de la misma clase y sus subclases
}
