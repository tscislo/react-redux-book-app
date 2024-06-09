import {Book} from "../../books/book";
import {useCallback, useState} from "react";
import {BasketItem} from "../basket-item";
import {addToBasket} from "../basket-slice";
import {useAppDispatch} from "../../../app/hooks";

export const AddToBasketComponent = ({book}: { book: Book }) => {
    const [basketItem, addBasketItem] = useState<BasketItem>();
    const [quantity, setQuantity] = useState<number>(1);
    const dispatch = useAppDispatch();

    const add = useCallback(() => {
        dispatch(addToBasket({id: Math.round(Math.random() * 1000).toString(), book: book, quantity: quantity}));
    },[]);

    return (
        <div>
            Ilość: <input type="number"  value={quantity}
                          onChange={(event) => setQuantity(parseInt(event.target.value))}/>
            <button onClick={add}>Dodaj do koszyka</button>
        </div>
    )
}
