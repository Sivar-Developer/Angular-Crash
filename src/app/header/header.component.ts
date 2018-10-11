import { Component } from '@angular/core';
// import { LoggingService } from '../logging.service';
// import { Observable, Observer } from 'rxjs';
// import { map } from 'rxjs/operators';
// import 'rxjs/Rx';
// import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  // providers: [LoggingService]
})
export class HeaderComponent {

  // const myObservable = Observable.create((observer: Observer<string>) => {

  //   setTimeout(() => {
  //     observer.next('first package');
  //   }, 2000);

  //   setTimeout(() => {
  //     observer.next('first package');
  //   }, 2000);

  //   setTimeout(() => {
  //     observer.complete();
  //   }, 2000);

  //   setTimeout(() => {
  //     observer.error('first package');
  //   }, 2000);

  // });

  // myObservable.subscribe(
  //   (data: string) => { console.log(data); },
  //   (error: string) => { console.log(error); },
  //   () => { console.log('completed'); };
  // )



  // @Output() featureSelected = new EventEmitter<string>();

  // constructor(private loggingService: LoggingService) { }

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  // onMain(accountStatus: string) {
  //   console.log(accountStatus);
  //   // this.loggingService.logStatusChange(accountStatus);
  // }
}
