import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing-app';
  constructor(private router: Router) {}

  navigateToRoot() {
    this.router.navigate(['/']);
  }

  onButtonClick() {
    this.router.navigate(['/first'], {
      queryParams: { order: 'desc', page: 2}
    });
  }
}
