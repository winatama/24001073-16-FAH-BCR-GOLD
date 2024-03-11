import { useState } from 'react';
import CarBanner from '../assets/images/img_car.png'
const urlLink = [{
    link: "#",
    navName: 'Our Services'
}, {
    link: "#",
    navName: 'Why Us'
}, {
    link: "#",
    navName: 'Testimonials'
}, {
    link: "#",
    navName: 'FAQ'
}];

export const Header = () => {
    const [open, setOpen] = useState (false);

    const toggle = () => {
        setOpen(!open);
    }

    console.log(open);
    return(
        <header className="container header-banner">
            <div className="header-nav">
                <div className="header-logo"></div>
                <ul className="header-navlink">
                    {urlLink?.map((item, index) => (
                        <li key={index}>{item?.navName}</li>
                    ))}
                </ul>
                <div className="btn-responsive"> 
                    <button onClick={toggle} type='button' className="btn-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    {open && <div id="toggle" className="responsive-nav">
                        <ul className="navbar">
                            <li>
                                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                    <span>BCR</span>
                                    <button onClick={toggle} style={{border:0, background:'white', fontSize:24}}><i className="fa fa-times"></i></button>
                                </div>
                            </li>
                            {urlLink?.map((item, index) => (
                                <li key={index}>{item?.navName}</li>
                            ))}
                        </ul>
                    </div>}
                </div>
            </div>

            <div className="hero-banner">
                <div className="hero-description">
                    <h1 className="hero-title">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="hero-paragraph">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik 
                        dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                        untuk sewa mobil selama 24 jam.</p>
                    <div className="btn-mulai-sewa">
                        <button className="hero-btn-banner">Mulai Sewa Mobil</button>
                    </div>
                </div>
                <div className="hero-banner-car-grid">
                    <div className="hero-banner-car">
                        <img className='car-banner' src={CarBanner} alt="hero-banner-pict"/>
                    </div>
                </div>
            </div>
    </header>
    )
}

export default Header;