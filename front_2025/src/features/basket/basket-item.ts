import type { Book } from "../../api/api-slice.ts"


export interface BasketItem {
    id: string;
    book: Book;
    quantity: number;
}
