
import { Component } from '@angular/core';
import { NumberGeneratorService } from '../../service/number-generator.service';

@Component({
  selector: 'app-subscriber',
  styleUrl: './subscriber.component.css',
  template: `{{ numberGeneratorService.numberListerner | async }}`,
})
export class SubscriberComponent {
  constructor(protected numberGeneratorService: NumberGeneratorService) {}
}

/*
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export class SubscriberComponent {
  generatedNumber = 0;

  constructor(protected numberGeneratorService: NumberGeneratorService) {
    this.numberGeneratorService.numberListerner
      .pipe(takeUntilDestroyed())
      .subscribe((num) => {
        this.generatedNumber = num;
        console.log(The generated number is ${this.generatedNumber});
      });
  }
}
*/

/*
import { Subject, take, takeUntil } from 'rxjs';

unsubscribe = new Subject<void>();

ngOnInit(): void {
  this.numberGeneratorService.numberListerner
    .pipe(takeUntil(this.unsubscribe))
    .pipe(takeUntilDestroyed())
    .subscribe((num) => {
      this.generatedNumber = num;
      console.log(The generated number is ${this.generatedNumber});
    });
}

ngOnDestro(): void {
  this.unsubscribe.next();
  this.unsubscribe.complete();
}
}*/