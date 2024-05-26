import { Subject } from 'rxjs';

export class NumberGeneratorService {
  numberListerner = new Subject<number>();

  generate() {
    const randomNumber = Math.round(Math.random() * 100000);
    this.numberListerner.next(randomNumber);
  }
}