import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface User {
  user: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isLoggedIn = false;
  private token?: string;
  loading: boolean = false;

  constructor(private http: HttpClient, private httpModule: HttpClientModule) {}

  login(user: User): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.loading = true;
    return this.http.post<any>(`${environment.baseUrl + environment.login}`, user, { headers })
    .pipe(
    map(response => {
    if (response.success) {
          this.isLoggedIn = true;
          this.loading = false;
          return true;
        } else {
          this.isLoggedIn = false;
          this.loading = false;
          return false;
        }
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.token = undefined;
  }

  getToken(): string | undefined {
    return this.token;
  }

  isLoggedInUser(): boolean {
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }
}
