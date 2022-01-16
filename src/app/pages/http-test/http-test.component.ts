import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from '../../services/http-movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  errorMessage: string;
  constructor(private http: HttpMoviesService) { }

  ngOnInit(): void {
  }

  get() {
    this.http.getMovies().subscribe()
  }

  post() {
    const exampleMovie = {
      title: 'Krzyżacy',
      year: '1970',
      category: 'War',
      director: 'Jerzy Hoffman',
      plot: 'Kwiat rycesrstwa europejskiego dostaje w dupę od litewskiego kłusownika i jego brata, króla Polski',
      poster: 'https://i1.fdbimg.pl/x1/mpw3hk/335x507_klen2t.jpg',
      country: 'Poland',
      imdbRating: '10.0',
    }
    this.http.postMovie(exampleMovie).subscribe()
  }

  // modyfikując poprzez put w body trzeba przekazać cały obiekt (nawet jeśli zmienia sie tylko jedna właściwość)
  put() {
    const exampleMovie = {
      id: '54',
      title: 'Krzyżacy vs Terminator',
      year: '1972',
      category: 'War',
      director: 'Jerzy Hoffman',
      plot: 'Kwiat rycesrstwa europejskiego dostaje w dupę od litewskiego kłusownika i jego brata, króla Polski',
      poster: 'https://i1.fdbimg.pl/x1/mpw3hk/335x507_klen2t.jpg',
      country: 'Poland',
      imdbRating: '9.5',
      opinions: "jestem w szoku"
    }
    this.http.putMovie(exampleMovie).subscribe()
  }

  // aktualizuje obiekt jak PUT, ale w niej nie trzeba przesyłać całego obiektu (wystarczy tylko zmieniane właściwości)
  patch() {
    const exampleMovie: Partial<Movie> = {
      id: '55',
      title: 'Krzyżacy zemsta',
      year: '1989',
    }
    this.http.patchMovie(exampleMovie).subscribe()
  }

  delete() {
    const idExampleMovie = '54';
    this.http.deleteMovie(idExampleMovie).subscribe()
  }

  error() {
    this.http.makeError().subscribe({error: (err: string) => (this.errorMessage = err)})
  }

  headers() {
    this.http.headers().subscribe();
  }

  params() {
    this.http.params().subscribe();
  }
}
