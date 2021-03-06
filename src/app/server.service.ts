import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  getServers() {
    return this.http.get('https://angular-course-c8106.firebaseio.com/data.json')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ));
  }

  storeServers(servers: any) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://angular-course-c8106.firebaseio.com/data.json', servers, { headers: headers });
  }

  updateServers(servers: any) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://angular-course-c8106.firebaseio.com/data.json', servers, { headers: headers });
  }

  getAppName() {
    return this.http.get('https://angular-course-c8106.firebaseio.com/appName.json')
        .pipe(map(
          (response: Response) => {
            return response.json();
          }
        ));
  }
}
