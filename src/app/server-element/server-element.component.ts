import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called');
   }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called');
  }

}
