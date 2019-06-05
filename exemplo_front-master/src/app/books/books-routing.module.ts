import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';

const routes: Routes = [
  { 
    path: 'books', 
    component: IndexComponent 
  },
  { 
    path: 'books/save', 
    component: SaveComponent 
  },
  { 
    path: 'books/save/:id', 
    component: SaveComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
