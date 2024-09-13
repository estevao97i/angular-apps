import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { MY_TOKEN } from '../constantes/constantes';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  getAuth(payload: {email: string, password: string}): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}/sign`, payload).pipe(
      map(res => {
        localStorage.removeItem(MY_TOKEN.TOKEN);
        localStorage.setItem(MY_TOKEN.TOKEN, res.token);
        return this.router.navigate(['admin']);
      }),
      catchError((err) => {
        if (err && err.error && err.error.message) return throwError(() => err.error.message);
        return throwError(() => 'servidor caiu, tente novamente mais tarde');
      })
    );
  }

  logout() {
    localStorage.removeItem(MY_TOKEN.TOKEN);
    this.router.navigate(['']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(MY_TOKEN.TOKEN);

    if (!token) return false;

    const jwtHelper = new JwtHelperService();
    return jwtHelper.isTokenExpired(token);

  }
}
