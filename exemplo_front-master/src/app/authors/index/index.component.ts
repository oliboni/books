import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';
import {Book} from '../../models/book';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  providers: [AuthorService]
})
export class IndexComponent implements OnInit {

  public authors = new Array<Author>();
  public books: Book[] = new Array<Book>();

  // tslint:disable-next-line:variable-name
  constructor(private _authorService: AuthorService) { }

  delete(id: number, key: number) {
    this._authorService.delete(id).subscribe(
      data => {
        this.authors.splice(key, 1);
      },
      error => {
        console.log(error.error);
      }
    );
  }

  setBooks(books: Book[]) {
    this.books = books;
  }

  ngOnInit() {
    this._authorService.getAll().subscribe(data => {
      this.authors = data;
    });

  }

}
