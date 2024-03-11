import complete from '../assets/icon/icon_complete.svg';
import price from '../assets/icon/icon_price.svg';
import i24hrs from '../assets/icon/icon_24hrs.svg';
import profs from '../assets/icon/icon_professional.svg';

export const Whyus = () => {
    return(
        <section className="container section-whyus">
        <div className="section-box-whyus-content">
            <h2 className="section-whyus-title">Why Us?</h2>
            <p className="section-whyus-paragraph">Mengapa harus pilih Binar Car Rental</p>
            <div className="section-whyus-grid">
                <div className="section-box-whyus">
                    <span className="section-whyus-icon"><img src={complete} alt="ic-balls"/></span>
                    <h3 className="section-whyus-title">Mobil Lengkap</h3>
                    <p className="section-whyus-paragraph">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
                <div className="section-box-whyus">
                    <span className="section-whyus-icon"><img src={price} alt="ic-balls"/></span>
                    <h3 className="section-whyus-title">Mobil Lengkap</h3>
                    <p className="section-whyus-paragraph">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
                <div className="section-box-whyus">
                    <span className="section-whyus-icon"><img src={i24hrs} alt="ic-balls"/></span>
                    <h3 className="section-whyus-title">Mobil Lengkap</h3>
                    <p className="section-whyus-paragraph">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
                <div className="section-box-whyus">
                    <span className="section-whyus-icon"><img src={profs} alt="ic-balls"/></span>
                    <h3 className="section-whyus-title">Mobil Lengkap</h3>
                    <p className="section-whyus-paragraph">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
            </div>
        </div>
    </section>    
    )
}

export default Whyus;