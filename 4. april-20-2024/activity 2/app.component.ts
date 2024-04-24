import { Component } from '@angular/core';
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
  title = 'activity_2';
  subjects: Subject[] = [
    { id: 1, subject_code: 'AAA', subject_name: 'AppDev', no_of_units: 3},
    { id: 2, subject_code: 'BBB', subject_name: 'S.A.D.', no_of_units: 3},
    { id: 3, subject_code: 'CCC', subject_name: 'Capstone', no_of_units: 3}
  ]
}
