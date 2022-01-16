import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { AppRoutingModule } from './app-routing.module';
import { YearsComponent } from './pages/years/years.component';
import { MoviesInYearsComponent } from './pages/years/movies-in-years/movies-in-years.component';
import { HttpTestComponent } from './pages/http-test/http-test.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MoviesComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    MoviesInCategoryComponent,
    MovieCoverComponent,
    YearsComponent,
    MoviesInYearsComponent,
    HttpTestComponent,
    AddMovieComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, RouterModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
