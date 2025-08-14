import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default ({currentUser}) => {

    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

    return (
        <div className="container">
            <div className="row">
                <div className="categories__slider owl-carousel">
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"tablet"}
                dotListClass="custom-dot-list-style"
                
                >
                
                            
                               <div className="categories__item set-bg" 
                                style={{padding:"1rem", backgroundImage: `url('/img/categories/cat-1.jpg')` }}> 
                                
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            
                            
                                <div className="categories__item set-bg" 
                                style={{ backgroundImage: `url('/img/categories/cat-2.jpg')` }}>
                                
                                    <h5><a href="#">Dried Fruit</a></h5>
                                </div>
                            
                            
                                <div className="categories__item set-bg" style={{ backgroundImage: `url('/img/categories/cat-3.jpg')` }}>
                                    <h5><a href="#">Vegetables</a></h5>
                                </div>
                            
                            
                                <div className="categories__item set-bg" style={{ backgroundImage: `url('/img/categories/cat-4.jpg')` }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            
                            
                                <div className="categories__item set-bg" style={{ backgroundImage: `url('/img/categories/cat-5.jpg')` }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            
                        
                        </Carousel>

                </div>
            </div>
        </div>
        // <div className="container">
        //     <div className="row">
        //         <div className="categories__slider owl-carousel">
        //             <div className="col-lg-3">
        //                 <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
        //                     <h5><a href="#">Fresh Fruit</a></h5>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3">
        //                 <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
        //                     <h5><a href="#">Dried Fruit</a></h5>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3">
        //                 <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
        //                     <h5><a href="#">Vegetables</a></h5>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3">
        //                 <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
        //                     <h5><a href="#">drink fruits</a></h5>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3">
        //                 <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
        //                     <h5><a href="#">drink fruits</a></h5>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    
    );
};