import {Book} from './book';

export class Author {
    id:number;
    first_name: string;
    last_name: string;
    createdAt: string;
    updatedAt: string;
    Books : Array<Book>;
}