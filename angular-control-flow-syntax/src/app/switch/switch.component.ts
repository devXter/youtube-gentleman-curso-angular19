import { Component } from '@angular/core';
import {NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'app-switch',
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  protected selectedValue = 'option 1'
}
