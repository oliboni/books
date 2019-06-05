import {Author} from './author'

export class Book {
    id: number;
    title: string;
    issn: string;
    id_author: number;
    createdAt: string;
    updatedAt: string;
    Author: Author
}