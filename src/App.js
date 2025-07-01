import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import BookARepair from "./pages/bookARepair";
import Home from "./pages/Home";
import RepairHistoryPage from "./pages/repairHistory";
import ResellCenterPage from "./pages/ResellCenterPage";
import RecycleCenterPage from "./pages/RecycleCentersPage";
import {ProductProvider} from "./context/productContext";
import CustomerRegistration from "./components/CustomerRegisteration";
import CustomerRegisterPage from "./pages/CustomerRegisterPage";
import EnvImpactPage from "./pages/EnvImpactPage";
import MaterialsSection from "./components/MaterialsSection";
import Product_Identification from "./components/Product_Identification";
import EndOfLifePage from "./pages/EndOfLifePage";
import ProductMaterialsPage from "./pages/ProductMaterialsPage";
import SocialSustainabilityPage from "./pages/SocialSustainabilityPage";
import ManualsPage from "./pages/ManualsPage";
import CompliencePage from "./pages/CompliencePage";

function App() {

    return (
        <ProductProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resellCenter" element={<ResellCenterPage />} />
                    <Route path="/recycleCenterPage" element={<RecycleCenterPage />} />
                    <Route path="/envImpact" element={<EnvImpactPage />} />
                    <Route path="/repair" element={<BookARepair />} />
                    <Route path="/repairHistory" element={<RepairHistoryPage />} />
                    <Route path="/customerHistory" element={<CustomerRegisterPage />} />
                    <Route path="/productIdentification" element={<Product_Identification />} />
                    <Route path="/productMaterials" element={<ProductMaterialsPage />} />
                    <Route path="/endOfLife" element={<EndOfLifePage />} />
                    <Route path="/socialSustainability" element={<SocialSustainabilityPage />} />
                    <Route path="/manuals" element={<ManualsPage />} />
                    <Route path="/complience" element={<CompliencePage />} />
                    <Route path="/test" element={<Product_Identification />} />
                </Routes>
            </Router>
        </ProductProvider>
    );
}

export default App;