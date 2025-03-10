import { Component } from '@angular/core';
import { HydrateComponent } from './hydrate/hydrate.component';

@Component({
  selector: 'app-root',
  imports: [HydrateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-19';
}
