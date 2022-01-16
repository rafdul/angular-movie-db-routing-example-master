import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  model: Partial<Movie> = {};
  categories: string[] = [];
  years: string[] = [];

  constructor(private http: HttpService, private httpMoviesService: HttpMoviesService) { }

  ngOnInit(): void {
    this.http.getCategories().subscribe(categoriesFromHttp => this.categories = categoriesFromHttp);
    console.log('this.categories', this.categories);
    this.http.getYears().subscribe(yearsFromHttp => this.years = yearsFromHttp);
    console.log('this.years', this.years);
  }

  send() {
    console.log('---', this.model);
    this.httpMoviesService.postMovie(this.model as Movie).subscribe(
      result => console.log(result),
      error => console.error(error)
    )
  }

  printModel(what) {
    console.log(what);
  }

}
