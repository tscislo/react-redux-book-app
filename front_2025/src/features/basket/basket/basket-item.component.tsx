import {BasketItem} from "../basket-item";
import {useAppSelector} from "../../../app/hooks";
import {basketItemPrice} from "../basket-slice";
import {Link} from "react-router-dom";

export const BasketItemComponent = ({item}: { item: BasketItem }) => {
    const basketItemPriceSelected = useAppSelector((state) => basketItemPrice(state, item.id));

    return (
        <div>
            <div>
                <Link to={`/books/${item.book.id}`}>{item.book.title}</Link>
            </div>
            <div>
                <p>{item.book.price} * {item.quantity} = {basketItemPriceSelected}</p>
            </div>
        </div>
    )
}
