import {useAppSelector} from "../../../app/hooks";
import {selectBasket} from "../basket-slice";
import {BasketItemComponent} from "./basket-item.component";

export const BasketComponent = () => {
    const basket = useAppSelector(selectBasket);

    if(basket.length === 0) {
        return (
            <>
                <h1>Basket</h1>
                <p>Your basket is empty</p>
            </>
        )
    }

    return (
        <>
            <h1>Basket</h1>
            {basket.map(item => <BasketItemComponent key={item.book.id} item={item}/>)}
        </>
    )
}
