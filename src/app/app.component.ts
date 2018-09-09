import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
}
