import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="preloader">
                    <div className="spin">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>
                </div>


                <header className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="/">
                                        <img src="https://communioncc.org/img/cc_image/cclog.png" alt="Logo" className="logostyle" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="bar-icon"></span>
                                        <span className="bar-icon"></span>
                                        <span className="bar-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ml-auto">
                                            {/* <li className="nav-item active">
                                                <a data-scroll-nav="0" href="#home">Home</a>
                                            </li> */}
                                            <li className="nav-item">
                                                <a data-scroll-nav="0" href="https://communioncc.org/about" target="_blank" rel="noreferrer">About Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-scroll-nav="0" href="#" rel="noreferrer">Schedule</a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-scroll-nav="0" href="https://communioncc.org/media" target="_blank" rel="noreferrer">Messages Preached</a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-scroll-nav="0" href="#showcase">Listen to Radio</a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-scroll-nav="0" href="https://communioncc.org/contact" target="_blank" rel="noreferrer">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>


                <section id="home" className="slider-area pt-100">
                    <div className="container-fluid position-relative">
                        <div className="slider-active">
                            <div className="single-slider">
                                <div className="slider-bg">
                                    <div className="row no-gutters align-items-center ">
                                        <div className="col-lg-4 col-md-5">
                                            <div className="slider-product-image d-none d-md-block">
                                                <img src="https://res.cloudinary.com/communioncc/image/upload/v1632866135/cc_files/ccradio/2.jpg" alt="Slider" />
                                                {/* <div className="slider-discount-tag">
<p>-50% <br /> OFF</p>
</div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-7">
                                            <div className="slider-product-content">
                                                <h1 className="slider-title mb-10" data-animation="fadeInUp" data-delay="0.9s"><span>Devotionals</span> <br /> <small>with</small> Tope <span>Awofisayo</span></h1>
                                                <p className="mb-10" data-animation="fadeInUp" data-delay="0.9s">Join us 6:00am daily for devotionals.</p>
                                                <a className="main-btn disp-0" href="https://uideck.com/products/furnish-free-furniture-website-template/" rel="nofollow" data-animation="fadeInUp" data-delay="1.5s">Download Now! <i className="lni lni-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slider">
                                <div className="slider-bg">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-lg-4 col-md-5">
                                            <div className="slider-product-image d-none d-md-block">
                                                <img src="https://res.cloudinary.com/communioncc/image/upload/v1632866135/cc_files/ccradio/4.jpg" alt="Slider" />
                                                {/* <div className="slider-discount-tag">
<p>-20% <br /> OFF</p>
</div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-7">
                                            <div className="slider-product-content">
                                                <h1 className="slider-title mb-10" data-animation="fadeInUp" data-delay="0.9s"><span>Stand</span> up! <span>LIVE</span> <small>featuring</small> <br /> <span>Comedy</span> <small>and</small> more!</h1>
                                                <p className="mb-10" data-animation="fadeInUp" data-delay="0.9s">Receive premium entertainment including comedy, sport, music and so on.</p>
                                                <a className="main-btn disp-0" href="https://uideck.com/products/furnish-free-furniture-website-template/" rel="nofollow" data-animation="fadeInUp" data-delay="1.5s">Learn More <i className="lni lni-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slider">
                                <div className="slider-bg">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-lg-4 col-md-5">
                                            <div className="slider-product-image d-none d-md-block">
                                                <img src="https://res.cloudinary.com/communioncc/image/upload/v1632866135/cc_files/ccradio/3.jpg" alt="Slider" />
                                                {/* <div className="slider-discount-tag">
<p>FREE<br /> QUOTE</p>
</div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-7">
                                            <div className="slider-product-content">
                                                <h1 className="slider-title mb-10" data-animation="fadeInUp" data-delay="0.3s"><span>Spiritual</span> Songs <br /> <small>of</small> <span>WORSHIP</span></h1>
                                                <p className="mb-25" data-animation="fadeInUp" data-delay="0.9s">Dig deep into the spirit with Spiritual Songs!</p>
                                                <a className="main-btn disp-0" href="#contact" data-animation="fadeInUp" data-delay="1.5s">Contact Us <i className="lni lni-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-social">
                            <div className="row justify-content-end">
                                <div className="col-lg-7 col-md-6">
                                    <ul className="social text-right">
                                        <li><a href="https://www.facebook.com/communioncc/" target="_blank" rel="noreferrer"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="https://twitter.com/CommunionCC_?s=20" target="_blank" rel="noreferrer"><i className="lni lni-twitter-original"></i></a></li>
                                        <li><a href="https://instagram.com/communioncc_" target="_blank" rel="noreferrer"><i className="lni lni-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="showcase" className="showcase-area pt-100 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="showcase-title pt-25">
                                    <h2 className="title">Listen to Radio</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="showcase-title pt-25 disp-0">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="showcase-active mt-65">
                                    <div className="single-showcase">
                                        {/* <img src="https://preview.uideck.com/items/furnish-opl/assets/images/showcase/t-1.jpg" alt="Testimonial" /> */}
                                        <iframe title="ccmixlr" src="https://mixlr.com/users/7718856/embed?autoplay=true" width="100%" height="200px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe>
                                    </div>

                                </div>
                            </div>

                                <div className="col-lg-12 pt-10">
                                    <center>
                                        <a className="main-btn text-center" href="https://mixlr.com/communioncc" target="_blank" rel="nofollow" data-animation="fadeInUp" data-delay="1.5s">Follow Us on Mixlr <i className="lni lni-chevron-right"></i></a>
                                    </center>
                                </div>

                        </div>
                    </div>
                </section>



                <section id="discount-product" className="discount-product pt-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 disp-0">
                                <div className="single-discount-product mt-30">
                                    <div className="product-image">
                                        <img src="https://www.delamar.de/wp-content/uploads/2016/12/podcast_equipment.jpg" alt="Product" />
                                    </div>
                                    <div className="product-content">
                                        <h4 className="content-title mb-15">Devotionals, News, <br /> Podcasts and lots <br />more!</h4>
                                        <a href="https://mixlr.com/communioncc" target="_blank" rel="noreferrer">Follow Us <i className="lni lni-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 disp-0">
                                <div className="single-discount-product mt-30">
                                    <div className="product-image">
                                        <img src="https://th.bing.com/th/id/OIP.byV_O-LAPB2ulQ6IZYJKGAHaEK?pid=ImgDet&w=1024&h=576&rs=1" alt="Product" />
                                    </div>
                                    <div className="product-content">
                                        <h4 className="content-title mb-15">Comedy, Drama, <br /> Relationships <br />and Meet Ups</h4>
                                        <a href="https://mixlr.com/communioncc" target="_blank" rel="noreferrer">Follow Us <i className="lni lni-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="product" className="product-area pt-100 pb-130 disp-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="collection-menu text-center mt-30">
                                    <h4 className="collection-tilte">OUR COLLECTION</h4>
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="active" id="v-pills-furniture-tab" data-toggle="pill" href="#v-pills-furniture" role="tab" aria-controls="v-pills-furniture" aria-selected="true">Furniture</a>
                                        <a id="v-pills-decorative-tab" data-toggle="pill" href="#v-pills-decorative" role="tab" aria-controls="v-pills-decorative" aria-selected="false">Decorative</a>
                                        <a id="v-pills-lighting-tab" data-toggle="pill" href="#v-pills-lighting" role="tab" aria-controls="v-pills-lighting" aria-selected="false">Lighting</a>
                                        <a id="v-pills-outdoor-tab" data-toggle="pill" href="#v-pills-outdoor" role="tab" aria-controls="v-pills-outdoor" aria-selected="false">Outdoor</a>
                                        <a id="v-pills-storage-tab" data-toggle="pill" href="#v-pills-storage" role="tab" aria-controls="v-pills-storage" aria-selected="false">Storage</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-furniture" role="tabpanel" aria-labelledby="v-pills-furniture-tab">
                                        <div className="product-items mt-30">
                                            <div className="row product-items-active">
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Fibre Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$49.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-20%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$129.00</span>
                                                            <span className="discount-price">$159.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-3.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-10%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">ClassNameic Wardrobe</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni-star"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$89.00</span>
                                                            <span className="discount-price">$129.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-decorative" role="tabpanel" aria-labelledby="v-pills-decorative-tab">
                                        <div className="product-items mt-30">
                                            <div className="row product-items-active">
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-3.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-lighting" role="tabpanel" aria-labelledby="v-pills-lighting-tab">
                                        <div className="product-items mt-30">
                                            <div className="row product-items-active">
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-3.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-outdoor" role="tabpanel" aria-labelledby="v-pills-outdoor-tab">
                                        <div className="product-items mt-30">
                                            <div className="row product-items-active">
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-3.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-storage" role="tabpanel" aria-labelledby="v-pills-storage-tab">
                                        <div className="product-items mt-30">
                                            <div className="row product-items-active">
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-3.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-1.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/product/p-2.jpg" alt="Product" /></a>
                                                            <div className="product-discount-tag">
                                                                <p>-60%</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
                                                            <ul className="rating">
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                                <li><i className="lni lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">$59.00</span>
                                                            <span className="discount-price">$69.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="service" className="services-area pt-125 pb-130 disp-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title pb-30">
                                    <h5 className="mb-15">Our Story</h5>
                                    <h3 className="title mb-15">Build Your Sweet Home</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="services-left mt-45">
                                    <div className="services">
                                        <img src="https://preview.uideck.com/items/furnish-opl/assets/images/services/services.jpg" alt="" />
                                        <a href="#" className="main-btn mt-30">Read More <i className="lni lni-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="services-right mt-45">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 col-sm-8">
                                            <div className="single-services text-center">
                                                <div className="services-icon">
                                                    <i className="lni-grid-alt"></i>
                                                </div>
                                                <div className="services-content mt-20">
                                                    <h5 className="title mb-10">Furnitures</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor.</p>
                                                </div>
                                            </div>
                                            <div className="single-services text-center mt-30">
                                                <div className="services-icon">
                                                    <i className="lni-ruler-pencil"></i>
                                                </div>
                                                <div className="services-content mt-20">
                                                    <h5 className="title mb-10">Decoration</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-8">
                                            <div className="single-services text-center mt-30">
                                                <div className="services-icon">
                                                    <i className="lni-customer"></i>
                                                </div>
                                                <div className="services-content mt-20">
                                                    <h5 className="title mb-10">Consultancy</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor.</p>
                                                </div>
                                            </div>
                                            <div className="single-services text-center mt-30">
                                                <div className="services-icon">
                                                    <i className="lni-support"></i>
                                                </div>
                                                <div className="services-content mt-20">
                                                    <h5 className="title mb-10">Custom Orders</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section id="team" className="team-area pt-125 pb-130 disp-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center pb-25">
                                    <h3 className="title mb-15">Our Expert Team</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-6 col-sm-8">
                                <div className="single-temp text-center mt-30">
                                    <div className="team-image">
                                        <img src="https://preview.uideck.com/items/furnish-opl/assets/images/team/t-1.jpg" alt="Team" />
                                    </div>
                                    <div className="team-content mt-30">
                                        <h4 className="title mb-10"><a href="#">Celina Gomez</a></h4>
                                        <span>FOUNDER</span>
                                        <ul className="social mt-15">
                                            <li><a href="https://www.facebook.com/communioncc/" target="_blank" rel="noreferrer"><i className="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="https://twitter.com/CommunionCC_?s=20" target="_blank" rel="noreferrer"><i className="lni lni-twitter-original"></i></a></li>
                                            <li><a href="https://instagram.com/communioncc_" target="_blank" rel="noreferrer"><i className="lni lni-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-8">
                                <div className="single-temp text-center mt-30">
                                    <div className="team-image">
                                        <img src="https://preview.uideck.com/items/furnish-opl/assets/images/team/t-2.jpg" alt="Team" />
                                    </div>
                                    <div className="team-content mt-30">
                                        <h4 className="title mb-10"><a href="#">Patric Green</a></h4>
                                        <span>Consultant</span>
                                        <ul className="social mt-15">
                                            <li><a href="https://www.facebook.com/communioncc/" target="_blank" rel="noreferrer"><i className="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="https://twitter.com/CommunionCC_?s=20" target="_blank" rel="noreferrer"><i className="lni lni-twitter-original"></i></a></li>
                                            <li><a href="https://instagram.com/communioncc_" target="_blank" rel="noreferrer"><i className="lni lni-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-8">
                                <div className="single-temp text-center mt-30">
                                    <div className="team-image">
                                        <img src="https://preview.uideck.com/items/furnish-opl/assets/images/team/t-3.jpg" alt="Team" />
                                    </div>
                                    <div className="team-content mt-30">
                                        <h4 className="title mb-10"><a href="#">Mark Parker</a></h4>
                                        <span>Business Manager</span>
                                        <ul className="social mt-15">
                                            <li><a href="https://www.facebook.com/communioncc/" target="_blank" rel="noreferrer"><i className="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="https://twitter.com/CommunionCC_?s=20" target="_blank" rel="noreferrer"><i className="lni lni-twitter-original"></i></a></li>
                                            <li><a href="https://instagram.com/communioncc_" target="_blank" rel="noreferrer"><i className="lni lni-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-8">
                                <div className="single-temp text-center mt-30">
                                    <div className="team-image">
                                        <img src="https://preview.uideck.com/items/furnish-opl/assets/images/team/t-4.jpg" alt="Team" />
                                    </div>
                                    <div className="team-content mt-30">
                                        <h4 className="title mb-10"><a href="#">Daryl Dixon</a></h4>
                                        <span>Marketing Manager</span>
                                        <ul className="social mt-15">
                                            <li><a href="https://www.facebook.com/communioncc/" target="_blank" rel="noreferrer"><i className="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="https://twitter.com/CommunionCC_?s=20" target="_blank" rel="noreferrer"><i className="lni lni-twitter-original"></i></a></li>
                                            <li><a href="https://instagram.com/communioncc_" target="_blank" rel="noreferrer"><i className="lni lni-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="testimonial" className="testimonial-area pt-200 disp-0">
                    <div className="testimonial-bg bg_cover"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-8">
                                <div className="testimonial-content">
                                    <div className="testimonial-active">
                                        <div className="single-testimonial">
                                            <i className="lni-quotation"></i>
                                            <p className="mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
                                            <h6 className="title">Roma De Suza</h6>
                                            <span>- CEO, Tesla</span>
                                        </div>
                                        <div className="single-testimonial">
                                            <i className="lni-quotation"></i>
                                            <p className="mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
                                            <h6 className="title">Lisa White</h6>
                                            <span>- Designer, Walmart</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-4">
                                <div className="testimonial-play text-right d-none d-md-block">
                                    <a className="Video-popup" href="https://www.youtube.com/watch?v=l8ccw7BMrMA"><i className="lni-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="blog" className="blog-area pt-125 disp-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center pb-25">
                                    <h3 className="title mb-15">From The Blog</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog mt-30">
                                    <div className="blog-image">
                                        <img src="https://preview.uideck.com/items/furnish-opl/assets/images/blog/b-1.jpg" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="content">
                                            <h4 className="title"><a href="#">Rowan an orangutan known & loved</a></h4>
                                            <span>25 JULY, 2022</span>
                                        </div>
                                        <div className="meta d-flex justify-content-between align-items-center">
                                            <div className="meta-admin d-flex align-items-center">
                                                <div className="image">
                                                    <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/blog/admin.jpg" alt="Admin" /></a>
                                                </div>
                                                <div className="admin-title">
                                                    <h6 className="title"><a href="#">J. PARKER</a></h6>
                                                </div>
                                            </div>
                                            <div className="meta-icon">
                                                <ul>
                                                    <li><a href="#"><i className="lni-share"></i></a></li>
                                                    <li><a href="#"><i className="lni-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog mt-30">
                                    <div className="blog-image">
                                        <img src="https://preview.uideck.com/items/furnish-opl/assets/images/blog/b-2.jpg" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="content">
                                            <h4 className="title"><a href="#">Rowan an orangutan known & loved</a></h4>
                                            <span>25 JULY, 2022</span>
                                        </div>
                                        <div className="meta d-flex justify-content-between align-items-center">
                                            <div className="meta-admin d-flex align-items-center">
                                                <div className="image">
                                                    <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/blog/admin.jpg" alt="Admin" /></a>
                                                </div>
                                                <div className="admin-title">
                                                    <h6 className="title"><a href="#">J. PARKER</a></h6>
                                                </div>
                                            </div>
                                            <div className="meta-icon">
                                                <ul>
                                                    <li><a href="#"><i className="lni-share"></i></a></li>
                                                    <li><a href="#"><i className="lni-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog mt-30">
                                    <div className="blog-image">
                                        <img src="https://preview.uideck.com/items/furnish-opl/assets/images/blog/b-3.jpg" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="content">
                                            <h4 className="title"><a href="#">Rowan an orangutan known & loved</a></h4>
                                            <span>25 JULY, 2022</span>
                                        </div>
                                        <div className="meta d-flex justify-content-between align-items-center">
                                            <div className="meta-admin d-flex align-items-center">
                                                <div className="image">
                                                    <a href="#"><img src="https://preview.uideck.com/items/furnish-opl/assets/images/blog/admin.jpg" alt="Admin" /></a>
                                                </div>
                                                <div className="admin-title">
                                                    <h6 className="title"><a href="#">J. PARKER</a></h6>
                                                </div>
                                            </div>
                                            <div className="meta-icon">
                                                <ul>
                                                    <li><a href="#"><i className="lni lni-share"></i></a></li>
                                                    <li><a href="#"><i className="lni lni-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="contact" className="contact-area pt-115 disp-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="contact-title text-center">
                                    <h2 className="title">Get In Touch</h2>
                                </div>
                            </div>
                        </div>
                        <div className="contact-box mt-70">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-info pt-25">
                                        <h4 className="info-title">Contact Info</h4>
                                        <ul>
                                            <li>
                                                <div className="single-info mt-30">
                                                    <div className="info-icon">
                                                        <i className="lni lni-phone-handset"></i>
                                                    </div>
                                                    <div className="info-content">
                                                        <p>+88 1234 56789</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-info mt-30">
                                                    <div className="info-icon">
                                                        <i className="lni lni-envelope"></i>
                                                    </div>
                                                    <div className="info-content">
                                                        <p><a href="https://preview.uideck.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d8bbb7b6acb9bbac98a1b7adaab5b9b1b4f6bbb7b5">[email&#160;protected]</a></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-info mt-30">
                                                    <div className="info-icon">
                                                        <i className="lni lni-home"></i>
                                                    </div>
                                                    <div className="info-content">
                                                        <p>203, Envato Labs, Behind Alis Steet,Australia</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="contact-form">
                                        <form id="contact-form" action="https://preview.uideck.com/items/furnish-opl/assets/contact.php" method="post" data-toggle="validator">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="single-form form-group">
                                                        <input type="text" name="name" placeholder="Enter Your Name" data-error="Name is required." required="required" />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="single-form form-group">
                                                        <input type="email" name="email" placeholder="Enter Your Email" data-error="Valid email is required." required="required" />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="single-form form-group">
                                                        <textarea name="message" placeholder="Enter Your Message" data-error="Please,leave us a message." required="required"></textarea>
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <p className="form-message"></p>
                                                <div className="col-lg-12">
                                                    <div className="single-form form-group">
                                                        <button className="main-btn" type="submit">CONTACT NOW</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="footer" className="footer-area">
                    <div className="container">
                        <div className="footer-widget pt-75 pb-120">
                            <div className="row">
                                <div className="col-lg-6 col-md-5 col-sm-7">
                                    <div className="footer-logo mt-40">
                                        <a href="/">
                                            <img src="https://communioncc.org/img/cc_image/ccc_logo.png" alt="Logo" className="footerLogo" />
                                        </a>
                                        <p className="mt-10">Our church exists to help people discover and fulfil their God-given purposes in Christ on the earth.</p>
                                        <p className="mt-10">
                                            <a href="https://communioncc.org" target="_blank" rel="noreferrer">https://communioncc.org</a>
                                        </p>
                                        <ul className="footer-social mt-25">
                                            <li><a href="https://www.facebook.com/communioncc/" target="_blank" rel="noreferrer"><i className="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="https://twitter.com/CommunionCC_?s=20" target="_blank" rel="noreferrer"><i className="lni lni-twitter-original"></i></a></li>
                                            <li><a href="https://instagram.com/communioncc_" target="_blank" rel="noreferrer"><i className="lni lni-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-5 disp-0">
                                    <div className="footer-link mt-50">
                                        <h5 className="f-title">Quick Links</h5>
                                        <ul>
                                            <li><a href="https://communioncc.org" target="_blank" rel="noreferrer">Main Site</a></li>
                                            <li><a href="https://communioncc.org/about" target="_blank" rel="noreferrer">About Us</a></li>
                                            <li><a href="https://communioncc.org/media" target="_blank" rel="noreferrer">Messages Preached</a></li>
                                            <li><a href="https://communioncc.org/contact" target="_blank" rel="noreferrer">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-5 disp-0">
                                    <div className="footer-link mt-50">
                                        <h5 className="f-title">Others</h5>
                                        <ul>
                                            <li><a href="http://lifechannel.communioncc.org/">Life Channel Ministry</a></li>
                                            <li><a href="http://lifechannel.communioncc.org/index.html#care">Care Foundation</a></li>
                                            <li><a href="https://communioncc.org/calendar">Calendar</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5 col-sm-7">
                                    <div className="footer-info mt-50">
                                        <h5 className="f-title">Contact Info</h5>
                                        <ul>
                                            <li>
                                                <div className="single-footer-info mt-20">
                                                    <span>Phone :</span>
                                                    <div className="footer-info-content">
                                                        <p>+234 811 660 6997</p>
                                                        <p>+234 803 585 8047</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-footer-info mt-20">
                                                    <span>Email :</span>
                                                    <div className="footer-info-content">
                                                        <p><a href="#" className="__cf_email__" data-cfemail="9bf8f4f5effaf8efdbe2f4eee9f6faf2f7b5f8f4f6">admin@communioncc.org</a></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-footer-info mt-20">
                                                    <span>Address :</span>
                                                    <div className="footer-info-content">
                                                        <p>Communion Christian Centre, 1st floor Big Treat Building Plot 5, Lateef Jakande Road Agidingbi, By Omole Junction, Ikeja.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-copyright pt-15 pb-15">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright text-center">
                                        <p>©2021 Powered by  <a href="https://communioncc.org/" rel="nofollow" >Communion</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <a href="#" className="back-to-top"><i className="lni lni-chevron-up"></i></a>
            </div>
        );
    }
};

export default Home;