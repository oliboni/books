import { Component, OnInit } from '@angular/core';
import { BookService} from '../../services/book.service';
import {Book} from '../../models/book';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.sass'],
  providers: [BookService]
})
export class SaveComponent implements OnInit {

  public book = new Book();

  constructor(private _BookService: BookService) { }

  submit(){
    this._BookService.create(this.book).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
