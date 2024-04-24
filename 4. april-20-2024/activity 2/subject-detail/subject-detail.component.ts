import { Component, Input } from '@angular/core';
import { Subject } from '../app.component'; 

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrl: './subject-detail.component.css'
})
export class SubjectDetailComponent {
  @Input() subject: Subject;
}
