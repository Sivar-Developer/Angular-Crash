import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://angular-course-c8106.firebaseio.com/data.json', servers, { headers: headers });
  }
}
