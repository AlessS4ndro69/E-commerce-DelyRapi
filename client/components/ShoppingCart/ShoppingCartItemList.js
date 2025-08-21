import { useState } from "react";
import { useCartStore } from '../../store/cartStore';

export default (props) => {
    

    const {id, title, price, stock, qty, image } = props;
    const [count, setCount] = useState(qty);

    const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);

    return (
    <tr>
        <td className="shoping__cart__item">
            <img src={ `img/cart/${image}`} alt=""/>
            <h5>{title}</h5>
        </td>
        <td className="shoping__cart__price">
            ${parseFloat(price)}
        </td>
        <td className="shoping__cart__quantity">
            <div className="quantity">
                <div className="pro-qty">
                    <span 
                        className="dec qtybtn"
                        onClick={() => {
                            //setCount(Math.max(1, count - 1));
                            updateItemQuantity(id, Math.max(1, qty - 1));
                        }}    
                    >-</span>
                    <input type="text" value={qty}/>
                    <span
                     className="inc qtybtn"
                     onClick={() =>{
                        //setCount(Math.min(stock, count + 1));
                        updateItemQuantity(id, Math.min(stock, qty + 1));
                     }}
                     >+</span>
                </div>
            </div>
        </td>
        <td className="shoping__cart__total">
            {price * qty}
        </td>
        <td className="shoping__cart__item__close">
            <span className="icon_close"></span>
        </td>
    </tr>
    );
} ;