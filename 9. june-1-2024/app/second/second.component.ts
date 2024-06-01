import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `the value of ID is {{id}}`,
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.id = this.route.snapshot.paramMap.get('id') || '';
  // }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
}