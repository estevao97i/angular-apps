import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly _http = inject(HttpClient);

    getUsers(): Observable<any> {
        return this._http.get('https://jsonplaceholder.typicode.com/users');
    }

    getUserById(id: number): Observable<any> {
        return this._http.get('https://jsonplaceholder.typicode.com/users?id=' + id);
    }
}