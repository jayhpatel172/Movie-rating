import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
 { path: '' , component: WelcomeComponent },
 { path: 'signup' , component: SignupComponent },
 { path: 'login', component: LoginComponent },
 { path: 'movies-list', component: MoviesListComponent },
 { path: 'movie', component: MovieComponent },
 { path: 'all-movies/:type', component: AllMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
