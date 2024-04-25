import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  operand1: number = 0;
  operand2: number = 0;
  result: number; 

  add(): void {
    this.result = this.operand1 + this.operand2;
    console.log('Add Result:', this.result);
  }

  subtract(): void {
    this.result = this.operand1 - this.operand2;
    console.log('Subtract Result:', this.result);
  }

  multiply(): void {
    this.result = this.operand1 * this.operand2;
    console.log('Multiply Result:', this.result);
  }

  divide(): void {
    if (this.operand2 !== 0) {
      this.result = this.operand1 / this.operand2;
      console.log('Divide Result:', this.result);
    } else {
      console.error('Cannot divide by zero!');
    }
  }
}
