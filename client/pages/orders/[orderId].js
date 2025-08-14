import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import StripeCheckout from "react-stripe-checkout";
import useRequest from "../../hooks/useRequest";
import client from "../../buildClient";

//import { CheckoutProvider } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';
//import { PaymentElement } from '@stripe/react-stripe-js';

//const stripePromise = loadStripe("pk_test_51Rju3GPOayCIPWLcv8uyylmd9ksZHrLKQbW3MUeHjxb1jCVe2HDqKavEKHX7UaKE4MJyo3TpZJx0NISeRX1tuq0W008iQhhVn7");

const Order = ({ order, currentUser }) => {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(0);
    //const [clientSecret, setClientSecret] = useState("");

    const { sendRequest, errors } = useRequest({
        body: {
            orderId: order.id,
        },
        method: "post",
        url: "/api/payments",
        onSuccess: (data) => {
            console.log(data);
            router.push("/orders");
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const msLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (timeLeft < 0) {
        return <h1>Time to purchase the ticket expired. Try again</h1>;
    }
    //const fetchClientSecret = () => {
    //    sendRequest()
    //        .then(response => {
    //            return response.clientSecret
    //        })
    //}

    return (
        <div>
            Time left to pay: {timeLeft} seconds
            <h3>Order Details: </h3>
            <p>
                <em> OrderId: </em> {order.id}
            </p>
            <p>
                <em> Ticket: </em> {order.ticket.title} for Rs
                {order.ticket.price}
            </p>
            <StripeCheckout
                token={({ id }) => sendRequest({ token: id })}
                stripeKey="pk_test_51Rju3GPOayCIPWLcv8uyylmd9ksZHrLKQbW3MUeHjxb1jCVe2HDqKavEKHX7UaKE4MJyo3TpZJx0NISeRX1tuq0W008iQhhVn7"
                amount={order.ticket.price * 100}
                email={currentUser.email}
            />
            {/*<button onSuccess={() => fetchClientSecret() }>Pagar</button>*/}
            {/*{clientSecret && <CheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>*/}
            {/*    <PaymentElement />*/}
            {/*    <button>Confirmar</button>*/}
            {/*</CheckoutProvider>}*/}
            {errors}
        </div>
    );
};

export async function getServerSideProps(context) {
    const request = client(context.req);
    const res = await request.get(`/api/orders/${context.params.orderId}`);

    return {
        props: { order: res.data }, // will be passed to the page component as props
    };
}

export default Order;
