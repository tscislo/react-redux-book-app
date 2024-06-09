import {createBrowserRouter} from "react-router-dom";
import {BooksComponent} from "../features/books/books.component";
import {BookDetailsComponent} from "../features/book-details/book-details.component";
import {BasketComponent} from "../features/basket/basket/basket.component";


export const router = createBrowserRouter([
    {
        path : '/',
        element: <BooksComponent />
    },
    {
        path : '/books/:id',
        element: <BookDetailsComponent />
    },
    {
        path : '/basket',
        element: <BasketComponent />
    }
])
