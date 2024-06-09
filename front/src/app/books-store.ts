import {combineSlices, configureStore} from "@reduxjs/toolkit"
import {createBooksSlice} from "../features/books/books-slice";
import {createBasketSlice} from "../features/basket/basket-slice";
import {createBookSlice} from "../features/book-details/book-details-slice";

const rootReducer = combineSlices(createBooksSlice, createBasketSlice, createBookSlice);
export type BooksRootState = ReturnType<typeof rootReducer>

export const booksStore = configureStore({
    reducer: rootReducer,
})
