import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { IMovie, Movie } from '../movie/movie.model';
import { MoviesDataService } from './movies.service';
import data from './movies-list-data.json';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {
  movies:any;
  trendingMovies: any;
  popularMovies: any;
  allTimePupular: any;
  starCount:number = 5;

  constructor(
      private authService: AuthService,
      private router: Router,
      private moviesService: MoviesDataService
    ) { }
  
  ngOnInit(): void {
   this.checkForReload();
    this.getMovies();
  }

  private getMovies() {
    this.movies = data;
    this.trendingMovies = data.filter(m => m.catagory == 'trending');
    this.popularMovies = data.filter(m => m.catagory == 'popular');
    this.allTimePupular = data.filter(m => m.catagory == 'all-time-popular');
  }

  logout() {
    this.authService.logout();
  }

  viewMovie(movie: IMovie) {
    this.moviesService.sendMovieDetails(movie);
    localStorage.setItem('reload', 'true')
    this.router.navigate(['/movie']);  
  }

  checkForReload() {
    if(localStorage.getItem('reload') == 'true') {
      window.location.reload()
      localStorage.setItem('reload', 'false')
    }
  }
}
