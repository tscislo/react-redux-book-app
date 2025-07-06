import { createBrowserRouter } from "react-router"
import { BookDetailsComponent } from "../features/book-details/book-details.component.tsx"
import { BooksComponent } from "../features/books/books.component.tsx"

export const router = createBrowserRouter([
  {
    path : '/',
    element: <BooksComponent />
  },
  {
    path : '/books/:id',
    element: <BookDetailsComponent />
  },
  // {
  //   path : '/basket',
  //   element: <BasketComponent />
  // },
  // {
  //   path : '/order',
  //   element: <OrderComponent />
  // }
])
