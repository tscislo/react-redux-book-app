import {fetchBooks, selectAllBooks, selectStatus} from "./books-slice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useEffect} from "react";
import {BookComponent} from "./book.component";
import classes from "./books.component.module.css"
import {BasketCartComponent} from "../basket/basket-cart/basket-cart";

export const BooksComponent = () => {
    const books = useAppSelector(selectAllBooks);
    const status = useAppSelector(selectStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    return (
        <div className={classes.books}>
            <BasketCartComponent/>
            {status === "loading" && <div>Loading...</div>}
            {status === "failed" && <div>Error</div>}
            {status === 'loaded' &&
                books.map(book => <BookComponent key={book.id} book={book}></BookComponent>)}
        </div>
    )
}
