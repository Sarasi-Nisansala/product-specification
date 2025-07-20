import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useEffect} from "react";
import {scrollToSection} from "../utils/helperMethods";
import {useLocation} from "react-router-dom";
import { navBarSections } from "../configs/SectionConfig";
import MaintenancePlanner from "../components/MaintenancePlanner";

const MaintenancePage = () => {
    const location = useLocation();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    return (
        <>
            <Navbar navBarSections={navBarSections} />
            <MaintenancePlanner/>
            <Footer/>
        </>
    );
}

export default MaintenancePage;