import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-simulated',
  standalone: true,
  imports: [],
  template: `<p>Hola</p>`,
  styleUrl: './error.component.scss',
})
export class ErrorComponentChild {
  constructor() {
    throw new Error('Simulated Load Error');
  }
}

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [ErrorComponentChild],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent implements OnInit {
  protected isContentReady = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isContentReady = true;
    }, 3000);
  }
}
