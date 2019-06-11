import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Author } from '../../models/author';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  providers: [BookService, AuthorService]
})
export class IndexComponent implements OnInit {

  public books = new Array<Book>();
  public authors = new Array<Author>();

  // tslint:disable-next-line:variable-name
  constructor(private _bookService: BookService, private _authorService: AuthorService) {}

  ngOnInit() {
    this._bookService.getAll().subscribe(data => {
      this.books = data;
    });
  }

}
