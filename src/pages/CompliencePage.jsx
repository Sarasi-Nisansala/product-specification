import Navbar from "../components/Navbar";
import ComplianceSection from "../components/ComplienceSection";
import Footer from "../components/Footer";
import {useEffect} from "react";
import {scrollToSection} from "../utils/helperMethods";
import {useLocation} from "react-router-dom";
import { navBarSections } from "../configs/SectionConfig";

const CompliencePage = () => {
    const location = useLocation();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    return (
        <>
        <Navbar navBarSections={navBarSections} />
            <ComplianceSection/>
            <Footer/>
        </>
    );
}

export default CompliencePage;