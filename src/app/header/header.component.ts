import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();


  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onMain(accountStatus: string) {
    const service = new LoggingService;
    service.logStatusChange(accountStatus);
  }
}
