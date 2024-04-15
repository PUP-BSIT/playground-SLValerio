import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_first_app';
  username = 'username';
  suffix = '@Clover';
  message = '';

  onSubmit(event: Event): void {
    this.message = 'Thank you, come agin!';
     console.log(event);
  }


}

