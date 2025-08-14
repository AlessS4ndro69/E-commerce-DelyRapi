import { useState } from 'react';
import Link from 'next/link';
import AuthModal from '../Auth/AuthModal';
import { useUser } from "../../context/UserContext";

export default () => {
    const [showModal, setShowModal] = useState(false);
     const currentUser = useUser();

    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> {currentUser?.email}</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-pinterest-p"></i></a>
                            </div>
                            <div className="header__top__right__language">
                                <img src="img/language.png" alt=""/>
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>      
                            <div className="header__top__right__auth">
                                {currentUser ? (
                                    <Link href="/auth/signOut">
                                        <a>
                                            <i className="fa fa-user"></i>
                                            <span>Logout</span>
                                        </a>
                                    </Link>
                                ) : (
                                    <button
                                        className="btn-auth"
                                        onClick={() => {
                                            console.log("login clicked");
                                            setShowModal(true);
                                        }}
                                    >
                                        <i className="fa fa-user"></i>
                                        <span>Login</span>
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
             <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} isLoggedIn ={currentUser ? true: false} />
        </div>

    );
};