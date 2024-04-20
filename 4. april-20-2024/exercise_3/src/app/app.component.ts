import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercise_3';
  operand1: number = 0;
  operand2: number = 0;
  result: number; 

  add(event: Event): void {
    this.result = this.operand1 + this.operand2;
    console.log(event);
  }

  subtract(event: Event): void {
    this.result = this.operand1 - this.operand2;
    console.log(event);
  }

  multiply(event: Event): void {
    this.result = this.operand1 * this.operand2;
    console.log(event);
  }

  divide(event: Event): void {
    this.result = this.operand1 / this.operand2;
    console.log(event);
  }
}
