import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import RepairCenter from '../components/CenterCard';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {navBarSections} from "../configs/SectionConfig";

const sparePartCenters = [
    {
        name: 'Kandy Spare Parts Hub',
        address: 'No. 45, Katugastota Road, Kandy 20000',
        phone: '076 123 4567',
        link: 'https://g.co/kgs/spare1',
    },
    {
        name: 'Lanka Tech Components',
        address: '21A George E De Silva Mawatha, Kandy',
        phone: '077 234 7890',
        link: 'https://g.co/kgs/spare2',
    },
    {
        name: 'K-Tech Spares & Solutions',
        address: 'No. 5, Peradeniya-Badulla-Chenkaladi Hwy, Kandy',
        phone: '078 567 8901',
        link: 'https://g.co/kgs/spare3',
    },
    {
        name: 'QuickFix Spare Parts Center',
        address: '2nd Floor, City Center, Dalada Veediya, Kandy',
        phone: '070 678 9123',
        link: 'https://g.co/kgs/spare4',
    },
];

const SuppliersOfComponents = () => {
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
                    📍 Find Suppliers of Components
                </Typography>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {sparePartCenters.map((center, index) => (
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

export default SuppliersOfComponents;