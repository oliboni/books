import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
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

  // tslint:disable-next-line:variable-name
  constructor(private _authorService: AuthorService, private _router: Router, private _activatedRoute: ActivatedRoute) { }


  submit() {
    if (this.author.id > 0) {
     this._authorService.update(this.author.id, this.author).subscribe(
       data => {
         console.log(data);
         this._router.navigate(['/authors']);
       }, error => {
         console.log(error);
       }
     );
    } else {
      this._authorService.create(this.author).subscribe(data => {
          console.log(data);
          this._router.navigate(['/authors']);
        }, error => {
          console.log(error);
        });
    }
  }

  back() {
    this._router.navigate(['/authors']);
  }

  ngOnInit() {
    const id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    if (Number(id) > 0) {
      this._authorService.get(id).subscribe(
        data => {
          this.author = data;
        },
        error => {
          console.log(error);
        }
      );
    }
    console.log(id);
  }

}
