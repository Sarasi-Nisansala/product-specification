import EndOfLifeManagement from "../components/EndOfLifeManagement";
import EnvironmentalImpactSection from "../components/EnvironmentalImpactSection";
import RecycledContentSection from "../components/RecycledContent";
import ElectricKettleDisposal from "../components/Environment";
import Navbar from "../components/Navbar";
import { navBarSections } from "../configs/SectionConfig";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {scrollToSection} from "../utils/helperMethods";

const EndOfLifePage = () => {
    const location = useLocation();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    return (
        <>
            <Navbar navBarSections={navBarSections} />
            <EndOfLifeManagement/>
            <RecycledContentSection percentage={62} amount={1.15} totalWeight={2.6}/>
            <ElectricKettleDisposal/>
            <Footer/>
        </>
    );
}

export default EndOfLifePage;