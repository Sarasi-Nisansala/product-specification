import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import RepairCenter from '../components/CenterCard';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {navBarSections} from "../configs/SectionConfig";

const repairCenters = [
    {
        name: 'Technic Electronic and Electricals',
        address: '7H4Q+RJ5, Kandy',
        phone: '070 566 7309',
        link: 'https://g.co/kgs/ho7tkpf',
    },
    {
        name: 'Nisansa Electronics',
        address: '53, 79 Anagarika Dharmapala Mawatha, Kandy 20000',
        phone: '071 018 9989',
        link: 'https://g.co/kgs/UHoUd3f',
    },
    {
        name: 'Bandula Electronics',
        address: '347-1 Peradeniya Rd, Kandy 20000',
        phone: '0812 205 158',
        link: 'https://g.co/kgs/n61bwJX',
    },
    {
        name: 'Nandana Electricals And Repairs',
        address: '193 William Gopallawa Mawatha, Kandy 20000',
        phone: '077 609 6378',
        link: 'https://g.co/kgs/ERPYCAx',
    },
];

const RepairCentersPage = () => {
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
                    📍 Resell Your Product
                </Typography>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {repairCenters.map((center, index) => (
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

export default RepairCentersPage;