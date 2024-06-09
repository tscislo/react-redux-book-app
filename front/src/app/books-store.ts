import {combineSlices, configureStore} from "@reduxjs/toolkit"
import {createBooksSlice} from "../features/books/books-slice";

const booksReducer = combineSlices(createBooksSlice);
export type BooksRootState = ReturnType<typeof booksReducer>

export const booksStore = configureStore({
    reducer: booksReducer,
})
