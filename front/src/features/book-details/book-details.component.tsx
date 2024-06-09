import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchBook, selectBook, selectStatus} from "./book-details-slice";
import {useEffect} from "react";
import {useParams} from "react-router";

export const BookDetailsComponent = () => {
    const {id} = useParams();
    const book = useAppSelector(selectBook);
    const status = useAppSelector(selectStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBook(id as string))
    }, []);

    return (
        <div>
            {status === "loading" && <div>Loading...</div>}
            {status === "failed" && <div>Error</div>}
            {status === 'loaded' && book && <div>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>stron: {book.pages}</p>
                <p>cena: {book.price} {book.currency}</p>
                <img src={book.cover_url} alt={book.title} width={'150px'}/>
            </div>}
        </div>
    )
};
