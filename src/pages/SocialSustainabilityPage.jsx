import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, CardMedia, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FemaleIcon from '@mui/icons-material/Female';
import GroupsIcon from '@mui/icons-material/Groups';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import PlaceIcon from '@mui/icons-material/Place';
import {navBarSections} from "../configs/SectionConfig";

import fairTradeImg from '../asserts/fairTrade.jpg';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Replace with your actual image

const SocialSustainabilityPage = () => {
    return (
        <>
            <Navbar navBarSections={navBarSections} />
            <Box sx={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Social Sustainability
                </Typography>

                <List>
                    <ListItem>
                        <ListItemIcon><CheckCircleIcon sx={{ color: 'green' }} /></ListItemIcon>
                        <ListItemText primary="Fair Labor Practices" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><SafetyCheckIcon sx={{ color: '#f57c00' }} /></ListItemIcon>
                        <ListItemText primary="Worker Safety: B+" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><PlaceIcon sx={{ color: '#6a1b9a' }} /></ListItemIcon>
                        <ListItemText primary="42% Local Sourcing" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><FemaleIcon sx={{ color: '#ab47bc' }} /></ListItemIcon>
                        <ListItemText primary="45% Female Representation" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><GroupsIcon sx={{ color: '#1976d2' }} /></ListItemIcon>
                        <ListItemText primary="Community Support: Apprenticeship Program" />
                    </ListItem>
                </List>

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
                    Certifications
                </Typography>

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={fairTradeImg}
                                alt="Fair Trade"
                                sx={{ objectFit: 'contain', padding: 2 }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">
                                    Fair Trade ✅
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Fairtrade certification ensures products are produced with social,
                                    environmental, and economic standards in mind, guaranteeing producers
                                    a minimum price and a premium on sales.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">
                                    SA8000 ✅
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    The SA8000 Standard is based on internationally recognized standards of
                                    decent work, including the Universal Declaration of Human Rights,
                                    ILO conventions, and national laws.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default SocialSustainabilityPage;