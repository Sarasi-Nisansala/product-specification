import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import RepairCenter from '../components/CenterCard';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {navBarSections} from "../configs/SectionConfig";

const recyclingCenters = [
    {
        name: 'Ceylon Waste Management (CWM) E-Waste Processing Factory',
        address: '68E, Senevirathnarama Road, Kelanimulla',
        phone: '0114 336 336',
        link: 'https://g.co/kgs/UfFazKd',
    },
    {
        name: 'Green wave lanka Pvt Ltd - E - Waste Recycling center ♻️',
        address: 'Eksath Mawatha, Kadawatha',
        phone: '077 500 5486',
        link: 'https://g.co/kgs/kyP86QE',
    },
    {
        name: 'N S Green Links Lanka (Pvt) Ltd.',
        address: '259, Wawagedara, Divulapitiya 11250',
        phone: '0312 283 205',
        link: 'https://g.co/kgs/8aK5TP7',
    },
    {
        name: 'EcoBiz World (Pvt) Ltd, E-Waste (Electronic Scrap) Recycling in Sri Lanka',
        address: 'NO. 621/3 Wekanda Rd, 11670',
        phone: '0113 055 857',
        link: 'https://g.co/kgs/BWqTZnN',
    },
];

const RecycleCenterPage = () => {
    return (
        <>
            <Navbar navBarSections={navBarSections} />
            <Box
                sx={{
                    width: '100%',
                    minHeight: '100vh',
                    px: { xs: 2, sm: 4, md: 8 },
                    py: 4,
                    background: 'linear-gradient(to bottom, #e3f2fd, #bbdefb)',
                    boxSizing: 'border-box',
                    overflowX: 'hidden',
                }}
            >
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    textAlign="center"
                    gutterBottom
                    sx={{
                        mb: 6,
                        color: '#0d47a1',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    }}
                >
                    📍 Find Recycle Partners
                </Typography>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {recyclingCenters.map((center, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{ display: 'flex' }}
                        >
                            <RepairCenter
                                name={center.name}
                                address={center.address}
                                phone={center.phone}
                                link={center.link}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer/>
        </>
    );
};

export default RecycleCenterPage;