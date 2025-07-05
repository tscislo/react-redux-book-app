import {Book} from "../books/book";

export interface BasketItem {
    id: string;
    book: Book;
    quantity: number;
}
