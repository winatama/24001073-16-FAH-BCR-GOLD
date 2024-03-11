import Header from "../layout/layout.header";
import Services from "../layout/layout.service";
import Carousel from "./layout.carousel";
import Faq from "./layout.faq";
import Footer from "./layout.footer";
import Whyus from "./layout.whyus";

const Layout = () => {
    return <>
        <Header/>
        <Services/>
        <Whyus/>
        <Carousel/>
        <Faq/>
        <Footer/>
    </>
}

export default Layout