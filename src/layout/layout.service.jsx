import Checklist from '../assets/icon/icon_checklist.svg'
import userServ from '../assets/images/img_service.png'

export const Services = () => {
    return(
        <section className="container">
            <div className="section-service">
                <div className="section-service-image">
                    <img className="section-service-banner" src={userServ} alt="introdcution-pict" />
                </div>
                <div className="section-information-list">
                    <h2 className="section-service-title">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                    <p className="section-service-paragraph">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                        kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ul className="section-service-list">
                        <li className="section-list-style">
                            <i><img src={Checklist} /></i>
                            <span className="section-list-title">Sewa Mobil Dengan Supir di Bali 12 Jam</span>
                        </li>
                        <li className="section-list-style">
                            <i><img src={Checklist} /></i>
                            <span className="section-list-title">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
                        </li>
                        <li className="section-list-style">
                            <i><img src={Checklist} /></i>
                            <span className="section-list-title">Sewa Mobil Jangka Panjang Bulanan</span>
                        </li>
                        <li className="section-list-style">
                            <i><img src={Checklist} /></i>
                            <span className="section-list-title">Gratis Antar - Jemput Mobil di Bandara</span>
                        </li>
                        <li className="section-list-style">
                            <i><img src={Checklist} /></i>
                            <span className="section-list-title">Layanan Airport Transfer / Drop In Out</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services;