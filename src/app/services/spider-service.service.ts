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

  // login(user: User): Observable<boolean> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post<any>(`${environment.baseUrl + environment.login}`, user, { headers })
  //     .pipe(
  //       map(response => {
  //         if (response.success) {
  //           this.loggedIn = true;
  //           return true;
  //         } else {
  //           this.loggedIn = false;
  //           return false;
  //         }
  //       })
  //     );
  // }

}
