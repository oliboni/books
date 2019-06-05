import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthorsRoutingModule } from './authors-routing.module';
import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [IndexComponent, SaveComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    FormsModule
  ]
})
export class AuthorsModule { }
