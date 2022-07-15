import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { IMovie } from '../movie/movie.model';
import data from '../movies-list/movies-list-data.json';
import { MoviesDataService } from '../movies-list/movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.sass']
})
export class AllMoviesComponent implements OnInit {
  list: any;
  movies: any;
  starCount:number = 5;

  constructor( 
    private authService: AuthService,
    private router: Router,
    private moviesService: MoviesDataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.list = params['type'];
        this.getMovies();
        this.checkForReload()
    });
  }

  private getMovies() {
    if(this.list == 'TRENDING') {this.movies = data.filter(m => m.catagory == 'trending');}
    if(this.list == 'POPULAR') {this.movies = data.filter(m => m.catagory == 'popular');}
    if(this.list == 'ALL TIME POPULAR') {this.movies = data.filter(m => m.catagory == 'all-time-popular');}
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

  logout() {
    this.authService.logout();
  }

}
