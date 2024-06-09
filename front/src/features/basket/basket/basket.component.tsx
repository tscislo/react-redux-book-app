import {useAppSelector} from "../../../app/hooks";
import {numberOfBooksInBasket, selectBasket} from "../basket-slice";
import {BasketItemComponent} from "./basket-item.component";
import {Link} from "react-router-dom";

export const BasketComponent = () => {
    const basket = useAppSelector(selectBasket);
    const books = useAppSelector(numberOfBooksInBasket);

    if(basket.length === 0) {
        return (
            <>
                <h1>Koszyk</h1>
                <p>Koszyk jest pusty!</p>
            </>
        )
    }

    return (
        <>
            <h1>Koszyk</h1>
            <p>Wszystkich książek w koszyku: {books}</p>
            {basket.map(item => <BasketItemComponent key={item.id} item={item}/>)}
            <Link to={"/order"}>Zamów</Link>
        </>
    )
}
