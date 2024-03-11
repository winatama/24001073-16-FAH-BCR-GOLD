import Facebook from '../assets/icon/icon_facebook.svg'
import Instagram from '../assets/icon/icon_instagram.svg'
import Twitter from '../assets/icon/icon_twitter.svg'
import Mail from '../assets/icon/icon_mail.svg'

export const Footer = () => {
    return(
        <footer className="container footer-banner">
            <div className="footer-address">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-list">
                <p>Our Service</p>
                <p>Why Us</p>
                <p>Testimonials</p>
                <p>FAQ</p>
            </div>
            <div className="footer-socmed">
                <p>Connect With Us</p>   
                <ul className="footer-list-socmed">
                    <li className="icon-list-style">
                        <img src={Facebook}/>
                    </li>
                    <li className="icon-list-style">
                        <img src={Instagram}/>
                    </li>
                    <li className="icon-list-style">
                        <img src={Twitter}/>
                    </li>
                    <li className="icon-list-style">
                        <img src={Mail}/>
                    </li>
                    <li className="icon-list-style">
                        <img src={Twitter}/>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright">
                <p>Copyright Binar 2022</p>
                <div className="header-logo"></div>
            </div>
        </footer>
    )
}

export default Footer;