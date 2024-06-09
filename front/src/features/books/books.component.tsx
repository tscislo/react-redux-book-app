import {fetchBooks, selectAllBooks, selectStatus} from "./books-slice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

export const BooksComponent = () => {
    const books = useAppSelector(selectAllBooks);
    const status = useAppSelector(selectStatus)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>Books</h2>
            <button onClick={() => dispatch(fetchBooks())}>Fetch books</button>
            {status === "loading" && <div>Loading...</div>}
            {status === "failed" && <div>Error</div>}
            {status === 'loaded' &&
                books.map(book => <div key={book.id}>{book.title}</div>)}
        </div>
    )
}