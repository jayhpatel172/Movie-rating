import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { MoviesDataService } from '../movies-list/movies.service';
import { IMovie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit, OnDestroy {
  movieSub$: Subscription;
  movie: any;
  moviename: any;
  rating: any;
  userRating: number = 1;
  url:any;
  review:any;
  starCount:number = 5;
  submitForm: boolean = true;
  userName: string = '';
  userReview: string = '';

  constructor(
      private authService: AuthService,
      private moviesService: MoviesDataService
    ) { }

  ngOnInit(): void {
    this.movieSub$ = this.moviesService.movie$.subscribe((m)=> {
      this.movie = m;
      this.moviename = this.movie.name;
      this.rating = this.movie.rating;
      this.review = this.movie.review;
      this.url=this.movie.url;
    })
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }

  onRatingChanged(rating: number){
    console.log(rating);
    this.rating = rating;
  }

  onSubmit(form: NgForm) {
    this.submitForm = false;
    this.userName = form.value.name;
    this.userReview = form.value.review;
    console.log(form);  
  }

  updateUserRating(e: number) {
    this.userRating = e;
  }
}
