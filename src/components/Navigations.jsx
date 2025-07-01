import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RecyclingIcon from '@mui/icons-material/Recycling';

const navigationItems = [
    { label: 'Customer Registration', icon: <PersonAddIcon fontSize="large" />, route: '/customerHistory' },
    { label: 'Find Suppliers of Components', icon: <BuildIcon fontSize="large" />, route: '/find-suppliers' },
    { label: 'Repair Your Product', icon: <HandymanIcon fontSize="large" />, route: '/repair' },
    { label: 'Resell Your Product', icon: <ShoppingCartIcon fontSize="large" />, route: '/resellCenter' },
    { label: 'Find Recycling Partners', icon: <RecyclingIcon fontSize="large" />, route: '/recycleCenterPage' },
];

const Navigations = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: '100%',
                padding: 2,
                background: 'linear-gradient(to bottom, #e3f2fd, #bbdefb)', // Light gradient background
                alignItems: 'center',
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                {navigationItems.map((item, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            maxWidth: index < 3 ? '33.33%' : '50%', // 3 cards in the first row, 2 in the second
                        }}
                    >
                        <Card
                            sx={{
                                width: '100%',
                                maxWidth: 350, // Increased size
                                height: 200, // Fixed height for larger squares
                                textAlign: 'center',
                                boxShadow: 3,
                                borderRadius: 2,
                                transition: 'transform 0.3s, box-shadow 0.3s', // Smooth hover animation
                                '&:hover': {
                                    transform: 'scale(1.05)', // Slightly enlarge on hover
                                    boxShadow: '0 6px 25px rgba(0, 0, 0, 0.3)', // Add shadow on hover
                                },
                            }}
                        >
                            <CardActionArea
                                onClick={() => navigate(item.route)}
                                sx={{
                                    height: '100%', // Make the entire card clickable
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                    {item.icon}
                                </Box>
                                <Typography variant="h6" fontWeight="bold">
                                    {item.label}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Navigations;