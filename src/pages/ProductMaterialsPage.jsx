import Navbar from "../components/Navbar";
import {navBarSections} from "../configs/SectionConfig";
import Footer from "../components/Footer";
import MaterialsSection from "../components/MaterialsSection";
import MaterialComposition from "../components/MaterialComposition";
import RecycledContentSection from "../components/RecycledContent";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {scrollToSection} from "../utils/helperMethods";
import ProductDetailsSection from "../components/HazarsMaterials";

const ProductMaterialsPage = () => {
    const location = useLocation();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    return (
        <>
            <Navbar navBarSections={navBarSections} />
            <MaterialsSection/>
            <MaterialComposition />
            <RecycledContentSection percentage={62} amount={1.15} totalWeight={2.6}/>
            <ProductDetailsSection/>
            <Footer/>
        </>
    );
}

export default ProductMaterialsPage;