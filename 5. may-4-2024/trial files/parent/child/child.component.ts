import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {  
  // Template Reference Variable for Components/Directives
  toy = 'horse';
  sayHello() {
  console.log('hello');
  }
  }
  
  
