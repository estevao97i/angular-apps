import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Genres } from "../interfaces/genres/genre.model";

@Injectable({
    providedIn: 'root'
})
export class GenreService {
    getGenres(): Observable<Genres> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(Mock.genres);
                observer.complete();
            }, 200)
        })
    }
}

class Mock {
    static readonly genres = [
        { id: 1, description: 'Rock' },
        { id: 2, description: 'Pop' },
        { id: 3, description: 'Jazz' },
        { id: 4, description: 'Blues' },
        { id: 5, description: 'Country' },
        { id: 6, description: 'Hip Hop' },
        { id: 7, description: 'R&B' },
        { id: 8, description: 'Electronic' },
        { id: 9, description: 'Classical' },
        { id: 10, description: 'Reggae' },
        { id: 11, description: 'Funk' },
        { id: 12, description: 'Soul' },
        { id: 13, description: 'Metal' },
        { id: 14, description: 'Indie' },
        { id: 15, description: 'Punk' },
        { id: 16, description: 'Alternative' },
        { id: 17, description: 'Gospel' },
        { id: 18, description: 'Latin' },
        { id: 19, description: 'World' },
        { id: 20, description: 'Pop Rock' },
    ]
}