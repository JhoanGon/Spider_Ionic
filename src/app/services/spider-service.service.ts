import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpiderServiceService {

  constructor(private http: HttpClient) { }

  getSpider(): Observable<any> {
    return this.http.get<any>(environment.baseUrl);
  }

  getSpiderById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl)
      .pipe(
        map((spiderArray: any[]) => spiderArray.find(spider => spider.id === id))
      );
  }

}
