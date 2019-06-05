import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.sass'],
  providers: [AuthorService]
})
export class SaveComponent implements OnInit {

  public author = new Author();

  constructor(private _authorService: AuthorService) { }

  submit() {
   this._authorService.create(this.author).subscribe(data => {
     console.log(data)
   })
  }

  ngOnInit() {
  }

}
