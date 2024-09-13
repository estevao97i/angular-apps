import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAuth(payload: {email: string, password: string}): Observable<any> {
    return this.http.post<{email: string, password: string}>(`${this.url}/sign`, payload).pipe(
      map(res => {
        return console.log(res)
      }),
      catchError((err) => {
        return throwError(err)
      })
    );
  }
}
