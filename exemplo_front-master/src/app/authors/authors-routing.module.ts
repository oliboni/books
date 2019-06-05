import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';

const routes: Routes = [
  { 
    path: 'authors', 
    component: IndexComponent 
  },
  { 
    path: 'authors/save', 
    component: SaveComponent 
  },
  { 
    path: 'authors/save/:id', 
    component: SaveComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
