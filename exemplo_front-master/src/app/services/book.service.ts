import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { }

  getAll():Observable<Book[]> {
    return this._http.get<Book[]>('http://localhost:3000/books');
  }

  create(book: Book):Observable<Book> {
    return this._http.post<Book>('http://localhost:3000/books', Book);
  }

}
