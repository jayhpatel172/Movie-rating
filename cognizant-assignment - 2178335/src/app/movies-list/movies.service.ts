import { Injectable } from '@angular/core';
import { AsyncSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MoviesDataService {

    movie$ =  new AsyncSubject();

    sendMovieDetails(movie: any) {
        console.log("service",movie);
        this.movie$.next(movie);
        this.movie$.complete();
    }
}