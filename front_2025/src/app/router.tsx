import { createBrowserRouter } from "react-router"
import { BasketComponent } from "../features/basket/basket/basket.component.tsx"
import { BookDetailsComponent } from "../features/book-details/book-details.component.tsx"
import { BooksComponent } from "../features/books/books.component.tsx"
import { OrderComponent } from "../features/order/order.component.tsx"

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
  },
  {
    path : '/order',
    element: <OrderComponent />
  }
])
