
import ProductCard from "./ProductCard";

export default ({ currentUser }) => {

    const ProductsList = [{
        id: "1",
        title: "Camaron Red Rio",
        price: 30.00,
        qty: 1,
        className: "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat",
        backgroundImage: "/img/featured/feature-1.jpg",
        stock: 10
    },
{
        id: "2",
        title: "Camaron Red Rio",
        price: 20.00,
        qty: 1,
        className: "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat",
        backgroundImage: "/img/featured/feature-2.jpg",
        stock: 20
    },
{
        id: "3",
        title: "Camaron Red Rio",
        price: 1.00,
        qty: 1,
        className: "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat",
        backgroundImage: "/img/featured/feature-3.jpg",
        stock: 15
    },
{
        id: "4",
        title: "Camaron Red Rio",
        price: 30.00,
        qty: 1,
        className: "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat",
        backgroundImage: "/img/featured/feature-4.jpg",
        stock: 10
    },
{
        id: "5",
        title: "Camaron Red Rio",
        price: 30.00,
        qty: 1,
        className: "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat",
        backgroundImage: "/img/featured/feature-5.jpg",
        stock: 10
    },
{
        id: "6",
        title: "Camaron Red Rio",
        price: 30.00,
        qty: 1,
        className: "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat",
        backgroundImage: "/img/featured/feature-6.jpg",
        stock: 10
    },
{
        id: "7",
        title: "Camaron Red Rio",
        price: 30.00,
        qty: 1,
        className: "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat",
        backgroundImage: "/img/featured/feature-7.jpg",
        stock: 10
    }]

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row featured__filter">
                {ProductsList && ProductsList.map((item) => {
                    return (
                        <ProductCard 
                            key={item.id}
                            className={item.className}
                            backgroundImage={item.backgroundImage}
                            product={item}
                        />
                    );
                })}

                {/* <ProductCard 
                    className = {"col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"}
                    backgroundImage = {'/img/featured/feature-1.jpg'}
                    product = {Product}
                />
                <ProductCard 
                    className = {"col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood"}
                    backgroundImage = {'/img/featured/feature-2.jpg'}
                    product = {Product}
                />
                <ProductCard 
                    className = {"col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat"}
                    backgroundImage = {'/img/featured/feature-3.jpg'}
                    product = {Product}
                />
                <ProductCard 
                    className = {"col-lg-3 col-md-4 col-sm-6 mix fastfood oranges"}
                    backgroundImage = {'/img/featured/feature-4.jpg'}
                    product = {Product}
                />
                <ProductCard 
                    className = {"col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables"}
                    backgroundImage = {'/img/featured/feature-5.jpg'}
                    product = {Product}
                />
                <ProductCard 
                    className = {"col-lg-3 col-md-4 col-sm-6 mix oranges fastfood"}
                    backgroundImage = {'/img/featured/feature-6.jpg'}
                    product = {Product}
                />
                <ProductCard 
                    className = {"col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables"}
                    backgroundImage = {'/img/featured/feature-7.jpg'}
                    product = {Product}
                />
                <ProductCard 
                    className = {"col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables"}
                    backgroundImage = {'/img/featured/feature-8.jpg'}
                    product = {Product}
                /> */}                
            </div>
        </div>
    );
    
};