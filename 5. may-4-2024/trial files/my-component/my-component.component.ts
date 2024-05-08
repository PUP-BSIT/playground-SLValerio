import { Component, OnChanges, Input, 
  SimpleChanges, OnInit, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, ViewChild, ElementRef,
  AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {
  @Input() myValue = 0;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', this.myValue);
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit', this.myValue);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  @ViewChild('myDiv') myDiv!: ElementRef;
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit',  this.myDiv.nativeElement.innerHTML);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
  }

}
