import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../interfaces/user/user.model";
import { UsersPlaceHolder } from "../interfaces/user-placeholder/user-placeholder.model";

@Injectable({
    providedIn: 'root'
})
export class UserPlaceHolderService {

    constructor(private readonly _http: HttpClient) { }

    getUsersPlaceHolder(): Observable<UsersPlaceHolder> {
        return this._http.get<UsersPlaceHolder>('https://jsonplaceholder.typicode.com/users');
    }
}