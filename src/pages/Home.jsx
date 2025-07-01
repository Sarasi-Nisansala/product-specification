import React, {useEffect} from "react";
import FAQSection from "../components/FAQ";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";
import {navBarSections} from "../configs/SectionConfig";
import {useProduct} from "../context/productContext";
import {useLocation, useSearchParams} from "react-router-dom";
import Product_Identification from "../components/Product_Identification";
import ProductInfo from "../components/Product_Identification";
import {scrollToSection} from "../utils/helperMethods";

const Home = () => {
    const [searchParams] = useSearchParams();
    const { productId, setProductId } = useProduct();
    const location = useLocation();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    useEffect(() => {
        if(!productId || productId === ""){
            const id = searchParams.get('productId');
            if (id) {
                setProductId(id);
            }
        }
    }, [searchParams, setProductId]);

    const sections = [
        {label: 'Product Identification', component: <ProductInfo/>, id: 'productIdentification'},
        {label: 'Navigations', component: <Navigations/>, id: 'navigations'},
        {label: 'FAQ', component: <FAQSection/>, id: 'faq'},
    ];

    return (
        <>
            <Navbar navBarSections={navBarSections} />
            <Header />
            {sections.map((section) => (
                <div key={section.id} id={section.id}>
                    {section.component}
                </div>
            ))}
            <Footer/>
        </>
    );
}

export default Home;