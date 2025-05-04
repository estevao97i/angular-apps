import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../types/user.type";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly _http = inject(HttpClient);

    getUsers(): Observable<User> {
        return this._http.get<User>(`https://jsonplaceholder.typicode.com/users`);
    }
}