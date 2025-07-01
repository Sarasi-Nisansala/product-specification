import Navbar from "../components/Navbar";
import {navBarSections} from "../configs/SectionConfig";
import Footer from "../components/Footer";
import DocumentSection from "../components/DocumentSection";
import {useEffect} from "react";
import {scrollToSection} from "../utils/helperMethods";
import {useLocation} from "react-router-dom";

const ManualsPage = () => {
    const location = useLocation();

    useEffect(() => {
        scrollToSection(location)
    }, [location]);

    return (
        <>
            <Navbar navBarSections={navBarSections} />
            <DocumentSection/>
            <Footer/>
        </>
    );
};

export default ManualsPage;