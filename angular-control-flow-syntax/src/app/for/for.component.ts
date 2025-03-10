import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-for',
  imports: [NgFor],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {
  names: string[] = ['Max', 'Gabriel', 'Fran', 'Gal'];
}
