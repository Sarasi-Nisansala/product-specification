import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import CustomerRegistration from "../components/CustomerRegisteration";
import {navBarSections} from "../configs/SectionConfig";
import {useProduct} from "../context/productContext";

const CustomerRegisterPage = () => {
    const { productId } = useProduct();

    return (
        <>
            <Navbar navBarSections={navBarSections}/>
            <CustomerRegistration productId={productId} />
            <Footer />
        </>
    );
}

export default CustomerRegisterPage;