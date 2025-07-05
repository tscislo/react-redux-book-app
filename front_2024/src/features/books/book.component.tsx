import {Book} from "./book";
import classes from "./book.component.module.css"
import {AddToBasketComponent} from "../basket/add-to-basket/add-to-basket.component";
import {Link} from "react-router-dom";

export const BookComponent = ({book}: { book: Book }) => {
    return (
        <div className={classes.book}>
            <h3><Link to={`/books/${book.id}`}>{book.title}</Link></h3>
            <p>{book.author}</p>
            <p>cena: {book.price} {book.currency}</p>
            <img src={book.cover_url} alt={book.title} width={'150px'}/>
            <AddToBasketComponent book={book}/>
        </div>
    )
}
