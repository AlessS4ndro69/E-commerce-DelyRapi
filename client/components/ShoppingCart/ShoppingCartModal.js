import { useState, useEffect } from 'react';
import useRequest from "../../hooks/useRequest";
import Link from "next/link";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useRouter } from "next/router";
import ShoppingCartItemList from './ShoppingCartItemList';
import { useCartStore } from '../../store/cartStore';

export default ({ isOpen, onClose }) => {
    const [total, setTotal] = useState(0);
    const [Subtotal, setSubtotal] = useState(0);
    const [loading, setLoading] = useState(false);
    
    const addItem = useCartStore((state) => state.addItem);
    const items = useCartStore((state) => state.items);

    return (
        <Dialog open={isOpen} onClose={onClose} >
            <div className="modal-cart"> {/* //// importante  */}
        
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items && items.map((item) => {
                                    return (
                                        <ShoppingCartItemList 
                                        key={item.id}
                                        id={item.id}
                                        title={item.title} 
                                        price={item.price} 
                                        stock={item.stock}
                                        qty = {item.qty }
                                        image={item.image}  
                                        handleTotalPrice={(n) => setTotal(n + total)}
                                        />
                                    );
                                })}                                                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__btns">
                        <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                        <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__continue">
                        <div className="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code"/>
                                <button type="submit" className="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Cart Total</h5>
                        {
                            <ul>
                            <li>Subtotal <span>${
                            items
                            .map(it => it.qty * it.price)
                            .reduce((a, b) => a + b, 0)
                            
                            }</span></li>
                            <li>Total <span>${
                            items
                            .map(it => it.qty * it.price)
                            .reduce((a, b) => a + b, 0)
                            
                            }</span></li>
                        </ul>
                        }
                        
                        <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Dialog>

    ); 

}