import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../types/post.type";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private readonly _http = inject(HttpClient);

    getPostsByUser(userId: any): Observable<Post[]> {
        return this._http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    }

    getCommentsByPost(userId: any, postId: any): Observable<Post[]> {
        return this._http.get<Post[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    }
}