import React, { use, useState } from "react";
import { useRouter } from "next/router";
import useRequest from "../../hooks/useRequest";
import { useCartStore } from '../../store/cartStore';

export default (props) => {
    const {className, backgroundImage, product} = props;
    const addItem = useCartStore((state) => state.addItem);

    const router = useRouter();    
    const title = product.id; // TODO: Refactor tickets service
    const price = product.price;

    const { sendRequest, errors } = useRequest({
        body: { title, price },
        url: "/api/tickets",
        method: "post",
        onSuccess: () => {
            router.push("/");
        },
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(`Producto añadido al carrito con ${title} y ${price}`);
        await sendRequest();
        addItem(product);
        
        console.log(useCartStore.getState().items);
    };
    return (

        <div className={className} data-product-id={product.id}>
            <div className="featured__item" data-testid="product-id" >
                <div className="featured__item__pic set-bg"
                style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <ul className="featured__item__pic__hover">
                         {[
                            { icon: "fa-heart", label: "Añadir a favoritos" },
                            { icon: "fa-retweet", label: "Compartir" },
                            { icon: "fa-shopping-cart", label: "Añadir al carrito" },
                        ].map((item, idx) => (
                        <li key={idx}>
                            <button 
                            aria-label={item.label}
                            onClick={onSubmit}
                            >
                            <i className={`fa ${item.icon}`}></i>
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="featured__item__text">                    
                    <h6><a href="#">{product.title}</a></h6>
                    <h5>${product.price}</h5>
                </div>
                {errors}
            </div>
        </div>
    );

}