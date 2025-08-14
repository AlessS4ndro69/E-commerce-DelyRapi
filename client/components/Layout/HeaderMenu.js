import { useCartStore } from '../../store/cartStore';
import {useState} from 'react';
import ShoppingCartModal from '../ShoppingCart/ShoppingCartModal';

export default ({currentUser}) => {
    const [showModal, setShowModal] = useState(false);
    const itemsCount = useCartStore((state) =>
        state.items.reduce((sum, i) => sum + i.qty, 0)
    );

    console.log("itemsCount is: ", itemsCount); 

    return (
<div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><a href="./index.html">Home</a></li>
                            <li><a href="./shop-grid.html">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li>
                                <button                                 
                                onClick={() => {
                                            console.log("login clicked");
                                            setShowModal(true);
                                        }}
                                ><i className="fa fa-heart"></i> <span>{itemsCount}</span>
                                </button>
                            </li>
                            <li>
                                <button
                                onClick={() => {                                          
                                            setShowModal(true);
                                        }}
                                ><i className="fa fa-shopping-bag"></i> <span>{itemsCount}</span>
                                </button>
                            </li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
            <ShoppingCartModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};