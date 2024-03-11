export const Faq = () => {
    return(
        <section className="container">
       <div className="section-faq">
            <div className="section-faq-text">
                <h2 className="section-faq-title">Frequently Asked Question</h2>
                <p className="section-faq-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="faq-information-list">
                <li className="faq-list-box">
                    <span>Apa saja syarat yang dibutuhkan?</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
                <li className="faq-list-box">
                    <span>Berapa hari minimal sewa mobil lepas kunci?</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
                <li className="faq-list-box">
                    <span>Berapa hari sebelumnya sabaiknya booking sewa mobil?</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
                <li className="faq-list-box">
                    <span>Apakah Ada biaya antar-jemput?</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
                <li className="faq-list-box">
                    <span>Bagaimana jika terjadi kecelakaan</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
            </div>
       </div> 
    </section>
    )
}

export default Faq;