import Star from '../assets/images/img_star.png';
import Male from '../assets/images/img_malephoto.png';
import Female from '../assets/images/img_femalephoto.png';

export const Carousel = () => {
    return(
        <section className="carousel">
            <div className="section-carousel-title">
                <h2>Testimonials</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <div>
                <div className="section-box container">
                    <div className="section-carousel">
                        <div className="section-carousel-box">
                            <div className="section-carousel-component">
                                <img src={Male} alt="human-pict"/>
                                <div className="section-content-text">
                                    <div>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                    </div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="text-carousel">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-carousel">
                        <div className="section-carousel-box">
                            <div className="section-carousel-component">
                                <img src={Male} alt="human-pict"/>
                                <div className="section-content-text">
                                    <div>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                    </div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="text-carousel">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-carousel">
                        <div className="section-carousel-box">
                            <div className="section-carousel-component">
                                <img src={Female} alt="human-pict"/>
                                <div className="section-content-text">
                                    <div>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                        <img src={Star}/>
                                    </div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="text-carousel">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="carousel-nav">
                    <span className="icon-left"><i className="fa fa-chevron-left"></i></span>
                    <span className="icon-right"><i className="fa fa-chevron-right"></i></span>
                </div>
            </div>
            <section className="container section-sewa-mobil">
                <div className="section-card-sewa-mobil">
                    <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
                    <div className="paragraph-text-block">
                        <p className="paragraph-text">Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="btn-center">
                        <button className="hero-btn-banner">Mulai Sewa Mobil</button>
                    </div>
                </div>
            </section>
        {/* </div> */}
    </section>
    )
}

export default Carousel;