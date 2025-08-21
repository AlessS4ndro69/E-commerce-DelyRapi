
//import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";
import client from "../buildClient";
import HeaderTop from "../components/Layout/HeaderTop";
import HeaderMenu from "../components/Layout/HeaderMenu";
import HeroCategories from "../components/Hero/HeroCategories";
import Categories from "../components/Categories/Categories";
import FeaturedSpad from "../components/Products/FeaturedSpad";
import Banner from "../components/Hero/Banner";
import LatestProduct from "../components/Products/LatestProduct";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Layout/Footer";




const LandingPage = ({ currentUser }) => {
    return (
        // <!-- Header Section Begin -->
        <>
        
        <section className="hero">
            <HeroCategories showHeroBanner={true}/>
        </section>
        <section className="categories">
            <Categories/>
        </section>
        <section className="featured spad">
            <FeaturedSpad/>
        </section>
        <div className="banner">
            <Banner/>
        </div>
        <section className="latest-product spad">
            <LatestProduct/>
        </section> 
        <section className="from-blog spad">
            <Blog/>
        </section>
        
        </>
        
    );
};

// export async function getServerSideProps(context) {
//     const request = client(context.req);
//     const res = await request.get("/api/tickets");

//     console.log("/api/tickes response: ", res.data);
//     return {
//         props: { tickets: res.data }, // will be passed to the page component as props
//     };
// }

export default LandingPage;
