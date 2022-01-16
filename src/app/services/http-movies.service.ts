import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../models/movie';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpMoviesService {
  private url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  // Prosta wersja zapytania get z HttpClient, zwraca od razu body (w pełni wystarczająca do pobierania json)
  // getMovies(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.url + 'movies')
  //     .pipe(tap(console.log));
  // }

  // Bardziej złożona wersja get, body jest jedną z wielu informacji w HttpResponse
  // przydaje się do bardziej złożonych danych niż json (np. grafiki)
  // można pobrać dodatkowe informacje (jest to kwestia dodania jakichś options do get np. w postaci observe:'response')
  getMovies(): Observable<HttpResponse<Movie[]>> {
    return this.http
      .get<HttpResponse<Movie[]>>(this.url, { observe: 'response' })
      .pipe(
        tap(console.log),
        map(x => ({ body: x.body, status: x.status })),
        tap(console.log)
      );
  }

  postMovie(movie: Movie): Observable<Movie[]> {
    return this.http.post<Movie>(this.url, movie).pipe(tap(console.log));
  }

  putMovie(movie: Movie): Observable<Movie[]> {
    return this.http
      .put<Movie>(this.url + '/' + movie.id, movie)
      .pipe(tap(console.log));
  }

  patchMovie(movie: Partial<Movie>): Observable<Movie[]> {
    return this.http
      .patch<Partial<Movie>>(this.url + '/' + movie.id, movie)
      .pipe(tap(console.log));
  }

  deleteMovie(id: string): Observable<Movie[]> {
    return this.http.delete<Movie>(this.url + '/' + id).pipe(tap(console.log));
  }

  makeError(): Observable<HttpErrorResponse> {
    return this.http
      .delete(this.url + '/' + 999)
      .pipe(tap(console.log), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name} \n` +
        `Message: ${error.message} \n` +
        `Status: ${error.status} \n`
    );
    return throwError('Ojj, coś poszło nie tak...');
  }

  headers(): Observable<HttpResponse<Movie[]>> {
    const myHeaders = new HttpHeaders({
      Authorizations: 'my_token',
      'Content-Type': 'application/json',
      'X-wlasny-naglowek': 'dzikie weze'
    });

    return this.http
      .get<Movie[]>(this.url, { observe: 'response', headers: myHeaders })
      .pipe(
        tap((res: HttpResponse<Movie[]>) => {
          console.log(res.headers);
          console.log(res.headers.keys());
          console.log(res.headers.get('cache-control'));
          console.log(res.headers.get('content-type'));
          console.log(res.headers.get('expires'));
          console.log(res.headers.get('pragma'));
        })
      );
  }

  params(): Observable<Movie> {
    const myParams = new HttpParams()
      .set('_sort', 'title')
      .set('_order', 'desc')

    return this.http.get<Movie[]>(this.url, {params: myParams})
      .pipe(tap(console.log))
  }
}
