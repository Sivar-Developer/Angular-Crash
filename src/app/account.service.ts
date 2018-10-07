import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = [
    {
      name: 'Sivar Sarkawt',
      status: 'active'
    },
    {
      name: 'Savan Sarkawt',
      status: 'inactive'
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }

}
