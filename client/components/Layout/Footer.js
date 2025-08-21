export default ({currentUser}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                            <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                        </div>
                        <ul>
                            <li>Lima Peru</li>
                            
                            <li>Email: delyrapi@delyrapi.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div className="footer__widget">
                        <h6>Visita</h6>
                        <ul>
                            <li><a href="#">Nosotros</a></li>
                            <li><a href="#">Acerca de tu compra</a></li>
                            <li><a href="#">Seguridad</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Politicas de privacidad</a></li>
                            
                        </ul>
                        <ul>
                            <li><a href="#">Quienes somos</a></li>
                            <li><a href="#">Nuestro servicio</a></li>
                            
                            <li><a href="#">Contacto</a></li>
                            
                            <li><a href="#">Reseñas</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                        <h6>Newsletter</h6>
                        <p>Enterate de nuestras ofertas dejando tu email</p>
                        <form action="#">
                            <input type="text" placeholder="email"/>
                            <button type="submit" className="site-btn">Subscribe</button>
                        </form>
                        <div className="footer__widget__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright">
                        <div className="footer__copyright__text"><p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> Template hecho <i className="fa fa-heart" aria-hidden="true"></i> por <a href="https://colorlib.com" target="_blank">Colorlib</a>
  </p></div>
                        <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};