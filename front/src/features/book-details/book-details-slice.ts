import {Book} from "../books/book";
import {createAppSlice} from "../../app/createAppSlice";

export interface BookDetailsSlice {
    book: Book | null,
    status: "idle" | "loading" | "failed" | "loaded";

}

export const initialState: BookDetailsSlice = {
    book: null,
    status: "idle",
}

export const createBookSlice = createAppSlice({
    name: "book",
    initialState,
    reducers: create => ({
        fetchBook: create.asyncThunk(
            async (bookId: string) => {
                const response = await fetch(`http://localhost:3001/api/book/${bookId}`);
                return await response.json();
            },
            {
                pending: state => {
                    state.status = "loading";
                },
                fulfilled: (state, action) => {
                    state.status = "loaded";
                    state.book = action.payload.data;
                },
                rejected: state => {
                    state.status = "failed";
                },
            }
        )
    }),
    selectors: {
        selectBook: state => state.book,
        selectStatus: state => state.status,
    }
});

export const {
    selectBook,
    selectStatus
} = createBookSlice.selectors;

export const {
    fetchBook
} = createBookSlice.actions;

