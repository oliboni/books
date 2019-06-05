import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
  {
    path: 'books-module',
    loadChildren: './books/books-routing.module#BooksRoutingModule'
  }, 
  {
    path: 'authors-module',
    loadChildren: './authors/authors-routing.module#AuthorsRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
