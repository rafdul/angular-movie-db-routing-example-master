import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';


const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:category', component: MoviesInCategoryComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
