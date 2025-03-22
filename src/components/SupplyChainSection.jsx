import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, Card, CardContent, CardHeader } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // For suppliers
import RecyclingIcon from '@mui/icons-material/Recycling'; // For recycling partners
import StoreIcon from '@mui/icons-material/Store';       // For reselling

const SupplyChainSection = () => {
    const supplyChainItems = [
        {
            title: 'Suppliers of components',
            description: 'Our components are sourced from trusted suppliers who adhere to strict quality and sustainability standards.',
            action: 'View Suppliers',
            actionLink: '#suppliers', // Replace with actual link
            icon: LocalShippingIcon,
        },
        {
            title: 'Recycling partners',
            description: 'We collaborate with certified recycling partners to ensure responsible end-of-life management of our products.',
            action: 'Find Recycling Partners',
            actionLink: '#recycling-partners', // Replace with actual link
            icon: RecyclingIcon,
        },
        {
            title: 'Resell your product',
            description: 'Give your product a second life by reselling it. Explore our platform for easy resale options.',
            action: 'Resell Now',
            actionLink: '#resell', // Replace with actual link
            icon: StoreIcon,
        },
    ];

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
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Supply Chain and Reverse Logistics
            </Typography>

            <Box>
                {supplyChainItems.map((item, index) => (
                    <Card key={index} sx={{ mb: 2 }}>
                        <CardHeader
                            title={
                                <Box display="flex" alignItems="center" gap={1}>
                                    <item.icon color="primary" />
                                    <Typography variant="h6" fontWeight="semibold">{item.title}</Typography>
                                </Box>
                            }
                        />
                        <CardContent>
                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemText
                                    secondary={
                                        <Typography variant="body2" color="textSecondary">
                                            {item.description}
                                        </Typography>
                                    }
                                />
                                <Button
                                    variant="outlined"
                                    endIcon={<ArrowForwardIcon />}
                                    href={item.actionLink}
                                    sx={{ ml: 2 }}
                                >
                                    {item.action}
                                </Button>
                            </ListItem>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default SupplyChainSection;
