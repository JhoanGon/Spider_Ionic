import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
interface User {
  user: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpiderServiceService {

  loggedIn = false;

  constructor(private http: HttpClient) { }

  getSpider(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + environment.spidermans);
  }

  getSpiderById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl + environment.spidermans)
      .pipe(
        map((spiderArray: any[]) => spiderArray.find(spider => spider.id === id))
      );
  }

  postSpider(newSpider: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(environment.baseUrl + environment.spidermans + environment.addCharacter, newSpider, { headers });
  }

}
