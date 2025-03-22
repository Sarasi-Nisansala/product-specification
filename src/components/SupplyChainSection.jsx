import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SupplyChainSection = () => {
    const supplyChainItems = [
        {
            title: 'Suppliers of components',
            description: 'Our components are sourced from trusted suppliers who adhere to strict quality and sustainability standards.',
            action: 'View Suppliers',
            actionLink: '#suppliers', // Replace with actual link
        },
        {
            title: 'Recycling partners',
            description: 'We collaborate with certified recycling partners to ensure responsible end-of-life management of our products.',
            action: 'Find Recycling Partners',
            actionLink: '#recycling-partners', // Replace with actual link
        },
        {
            title: 'Resell your product',
            description: 'Give your product a second life by reselling it. Explore our platform for easy resale options.',
            action: 'Resell Now',
            actionLink: '#resell', // Replace with actual link
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '700px',
                margin: '2rem auto',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="h6" gutterBottom>
                Supply chain and reverse logistics
            </Typography>

            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <List>
                    {supplyChainItems.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemText
                                primary={item.title}
                                secondary={item.description}
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
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default SupplyChainSection;