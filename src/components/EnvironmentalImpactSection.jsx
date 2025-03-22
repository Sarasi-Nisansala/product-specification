import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import LCA from '../asserts/LCA.jpg';

const EnvironmentalImpactSection = () => {
    const impactData = {
        resourceConsumption: 'Moderate',
        emissionDetails: 'Air: Low, Water: Medium, Soil: Low',
        climateIndicators: 'Slight increase in global temperature',
        environmentalFootprint: 'Medium',
        carbonFootprint: {
            value: '100g',
            co2e: 'CO₂e',
            description: 'for 100g of this Product',
            rating: {
                value: 3, // Out of 5 stars
                color: 'orange', // Example: color based on rating
            },
        },
        ecoLabels: 'Eco Label A, Sustainability Score: 85, Planet Score: B',
    };

    const generateRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} style={{ color: i < rating ? 'green' : 'lightgray', fontSize: '1.5em' }}>
          ★
        </span>
            );
        }
        return stars;
    };

    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '800px',
                margin: '2rem auto',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom style={{ textAlign: 'left' }}>
            Environmental Impact (LCA)
            </Typography>

            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                }}
            >
                {/* Replace with your image URL */}
                <img
                    src={LCA}
                    alt="Environmental Impacts"
                    style={{ maxWidth: '100%' }}
                />
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemText primary="Resource consumption" secondary={impactData.resourceConsumption} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Emission to air, water, soil in life cycle stages" secondary={impactData.emissionDetails} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Climate changes indicators" secondary={impactData.climateIndicators} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Environmental footprint" secondary={impactData.environmentalFootprint} />
                </ListItem>
            </List>

            <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                <Typography variant="h6">Carbon footprint</Typography>
                <Box
                    sx={{
                        width: '200px',
                        height: '30px',
                        background: 'linear-gradient(to right, green, yellow, orange, red)',
                        margin: '1rem auto',
                        borderRadius: '5px',
                        position: 'relative',
                    }}
                >
                    <Typography
                        sx={{
                            position: 'absolute',
                            left: '0.5rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        {impactData.carbonFootprint.value}
                    </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {impactData.carbonFootprint.co2e}
                </Typography>
                <Typography variant="body2">{impactData.carbonFootprint.description}</Typography>
            </Box>

            <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                <Typography variant="h6">Eco label, Sustainability score, Planet score</Typography>
                <Typography variant="body1">{impactData.ecoLabels}</Typography>
            </Box>

            <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                <Box
                    sx={{
                        width: '100px',
                        height: '80px',
                        backgroundColor: 'lightgreen',
                        borderRadius: '10px',
                        margin: '1rem auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        CO₂
                    </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Climate Rating
                </Typography>
                <Box sx={{ marginTop: '0.5rem' }}>{generateRatingStars(impactData.carbonFootprint.rating.value)}</Box>
            </Box>
        </Box>
    );
};

export default EnvironmentalImpactSection;