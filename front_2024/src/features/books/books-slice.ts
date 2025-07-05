import type {Book} from "./book";
import {createAppSlice} from "../../app/createAppSlice";

export interface BooksSliceState {
    books: Book[];
    status: "idle" | "loading" | "failed" | "loaded";
}

const initialState: BooksSliceState = {
    books: [],
    status: "idle",
}

export const createBooksSlice = createAppSlice({
    name: "books",
    initialState,
    reducers: create => ({
        fetchBooks: create.asyncThunk(
            async () => {
                const response = await fetch('http://localhost:3001/api/book');
                return await response.json();
            },
            {
                pending: state => {
                    state.status = "loading";
                },
                fulfilled: (state, action) => {
                    state.status = "loaded";
                    state.books = action.payload.data;
                },
                rejected: state => {
                    state.status = "failed";
                },
            }
        )
    }),
    selectors: {
        selectAllBooks: state => state.books,
        selectStatus: state => state.status,
    }
});

export const {
    selectAllBooks,
    selectStatus
} = createBooksSlice.selectors;

export const {
    fetchBooks
} = createBooksSlice.actions;
