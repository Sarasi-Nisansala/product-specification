import React from 'react';
import './App.css';
import Header from "./components/Header";
import ProductInfo from "./components/Product_Identification";
import MaterialsSection from "./components/MaterialsSection";
import MaterialCompositionTable from "./components/MaterialComposition";
import RecycledContentSection from "./components/RecycledContent";
import ProductDetailsSection from "./components/HazarsMaterials";
import FAQSection from "./components/FAQ";
import ElectricKettleDisposal from "./components/Environment";
import EndOfLifeManagement from "./components/EndOfLifeManagement";
import DocumentSection from "./components/DocumentSection";
import SupplyChainSection from "./components/SupplyChainSection";
import EnvironmentalImpactSection from "./components/EnvironmentalImpactSection";
import ComplianceSection from "./components/ComplienceSection";
import PackagingRecyclingSection from "./components/PackagingRecyclingSection";
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
    const sections = [
        { label: 'Product Info', component: <ProductInfo />, id: 'productInfo' },
        { label: 'Materials', component: <MaterialsSection />, id: 'materials' },
        { label: 'Material Composition', component: <MaterialCompositionTable />, id: 'materialComposition' },
        { label: 'Recycled Content', component: <RecycledContentSection percentage={62} amount={1.15} totalWeight={2.6} />, id: 'recycledContent' },
        { label: 'Hazardous Materials', component: <ProductDetailsSection />, id: 'hazardousMaterials' },
        { label: 'Supply Chain', component: <SupplyChainSection />, id: 'supplyChain' },
        { label: 'Environmental Impact', component: <EnvironmentalImpactSection />, id: 'environmentalImpact' },
        { label: 'Compliance', component: <ComplianceSection />, id: 'compliance' },
        { label: 'Documents', component: <DocumentSection />, id: 'documents' },
        { label: 'End of Life', component: <EndOfLifeManagement />, id: 'endOfLife' },
        { label: 'Packaging', component: <PackagingRecyclingSection />, id: 'packaging' },
        { label: 'Environment', component: <ElectricKettleDisposal />, id: 'environment' },
        { label: 'FAQ', component: <FAQSection />, id: 'faq' },
    ];

    return (
        <>
            {/*<Navbar sections={sections} /> /!* Use the Navbar component *!/*/}
            <Header />
            {sections.map((section) => (
                <div key={section.id} id={section.id}>
                    {section.component}
                </div>
            ))}
        </>
    );
}

export default App;