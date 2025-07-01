import React from 'react';
import Navbar from "../components/Navbar";
import { navBarSections } from "../configs/SectionConfig";
import Footer from "../components/Footer";
import EnvironmentalImpactSection from "../components/EnvironmentalImpactSection";
import { Box, Typography, Fade } from "@mui/material";
import { useState } from "react";

const EnvImpactPage = () => {
    const [hovered, setHovered] = useState(null);

    const dataPoints = [
        {
            year: '3 years',
            position: '10%',
            content: (
                <Box sx={{ p: 2, bgcolor: '#fff', borderRadius: 2, boxShadow: 2, maxWidth: 250 }}>
                    <Typography fontWeight="bold">Depletion of elements</Typography>
                    <Typography>Human toxicity</Typography>
                    <Typography>Terrestrial ecotoxicity</Typography>
                    <Typography color="error">Increase in 4–6%</Typography>
                </Box>
            ),
        },
        {
            year: '4.4 years',
            position: '45%',
            content: (
                <Box sx={{ p: 2, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>
                    <Typography fontWeight="bold">Average <u>life time</u></Typography>
                </Box>
            ),
        },
        {
            year: '7 years',
            position: '80%',
            content: (
                <Box sx={{ p: 2, bgcolor: '#fff', borderRadius: 2, boxShadow: 2, maxWidth: 250 }}>
                    <Typography fontWeight="bold">Depletion of elements</Typography>
                    <Typography>Human toxicity</Typography>
                    <Typography>Terrestrial ecotoxicity</Typography>
                    <Typography color="primary">Decrease in 3–5%</Typography>
                    <Typography>Global warming and primary energy demand</Typography>
                    <Typography color="primary">Decrease in 0.5%</Typography>
                </Box>
            ),
        },
    ];

    return (
        <>
            <Navbar navBarSections={navBarSections} />
            <EnvironmentalImpactSection />
            <Footer />
        </>
    );
};

export default EnvImpactPage;