
export default ({showHeroBanner}) => {
    return (
<section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="fa fa-bars"></i>
                            <span>Categorias</span>
                        </div>
                        <ul>
                            <li><a href="#">Carne Fresca</a></li>
                            <li><a href="#">Vegetales</a></li>
                            <li><a href="#">Frutas y Frutos secos</a></li>                            
                            <li><a href="#">Alimento marino</a></li>
                            <li><a href="#">Lacteos</a></li>
                            <li><a href="#">Comida rapida</a></li>
                            <li><a href="#">Tuberculos</a></li>
                            <li><a href="#">Papaya</a></li>
                    
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    Categorias
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">BUSCAR</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    { showHeroBanner && <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                        <div className="hero__text">
                            <span>FRUTA FRESCA</span>
                            <h2>Vegetales <br />100% Organicos</h2>
                            <p>Delivery</p>
                            <a href="#" className="primary-btn">COMPRA AHORA</a>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </section>
    ); 

}