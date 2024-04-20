import { Component } from '@angular/core';
type Subject = {
  id: number;
  subject_code: string;
  subject_name: string; 
  no_of_units: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'directives';

  myClass = 'my-class';
  myClasses = ['first', 'second'];
  isActive = true;
  isLoggedIn = true;

  students = ['student1', 'student2', 'student3'];

subjects: Subject[] = [
  { id: 1, subject_code: 'AAA', subject_name: 'Math', no_of_units: 3},
  { id: 2, subject_code: 'BBB', subject_name: 'Science', no_of_units: 3},
  { id: 3, subject_code: 'CCC', subject_name: 'Arts', no_of_units: 3}
]

day = 2;

} 
