import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  providers: [AuthorService]
})
export class IndexComponent implements OnInit {

  public authors = new Array<Author>();

  constructor(private _authorService: AuthorService) { }

  ngOnInit() {
    this._authorService.getAll().subscribe(data => {
      this.authors = data
    })

  }

}
