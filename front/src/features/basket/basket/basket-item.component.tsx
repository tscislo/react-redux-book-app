import {BasketItem} from "../basket-item";
import {useAppSelector} from "../../../app/hooks";
import {basketItemPrice} from "../basket-slice";

export const BasketItemComponent = ({item}: { item: BasketItem }) => {
    const basketItemPriceSelected = useAppSelector((state) => basketItemPrice(state, item.id));

    return (
        <div>
            <div>
                {item.book.title}
            </div>
            <div>
                <p>{item.book.price} * {item.quantity} = {basketItemPriceSelected}</p>
            </div>
        </div>
    )
}
