import {combineSlices, configureStore} from "@reduxjs/toolkit"
import {createBooksSlice} from "../features/books/books-slice";
import {createBasketSlice} from "../features/basket/basket-slice";
import {createBookSlice} from "../features/book-details/book-details-slice";

const rootReducer = combineSlices(createBooksSlice, createBasketSlice, createBookSlice);
export type BooksRootState = ReturnType<typeof rootReducer>

export const setupStore = (preloadedState?: Partial<BooksRootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
