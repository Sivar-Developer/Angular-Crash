import { Component, Input, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { AccountService } from './account.service';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];
  loadedFeature = 'recipe';
  info = {
    name: 'Anything',
    number: 123.45356,
    date: new Date(2018, 10, 14)
  };
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  servers = {
    name: '',
    storage: 0
  };
  appName = this.serverService.getAppName();

  @Input() serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  constructor(
    private accountService: AccountService,
    private serverService: ServerService
    ) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
    this.serverService.getServers()
        .subscribe(
          (servers: any[]) => console.log(servers),
          (error) => { console.log(error); }
        );
  }

  onSave() {
    this.serverService.storeServers(this.servers)
        .subscribe(
          (response) => { console.log(Response); },
          (error) => { console.log(error); }
        );
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
