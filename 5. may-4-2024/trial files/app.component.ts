import { Component, ViewChild, ElementRef } from '@angular/core';
export interface Subject {
  id: number;
  subject_code: string;
  subject_name: string;
  no_of_units: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'try try';

  @ViewChild('myInput') myInput: ElementRef;
  logInputValue() {
    console.log(this.myInput.nativeElement.value);
  }

  pVal = 0;

  showChild = true;

  isShown = true;

  objects = [
    { id: 1, name: 'obj1' },
    { id: 2, name: 'obj2' },
  ];

}
