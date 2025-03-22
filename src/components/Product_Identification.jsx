import React from 'react';
import { Box, Typography } from "@mui/material";
import { Info, LocationOn, CalendarMonth, Scale } from '@mui/icons-material';

const ProductInfo = () => {
    const productDetails = [
        { label: "Model", value: "EK-2025", icon: <Info /> },
        { label: "Facility", value: "Factory A", icon: <Info /> },
        { label: "Location", value: "New York, USA", icon: <LocationOn /> },
        { label: "Manufactured Date", value: "March 2025", icon: <CalendarMonth /> },
        { label: "Weight", value: "1.2 kg", icon: <Scale /> },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                maxWidth: "800px",
                margin: "2rem auto",
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom style={{ textAlign: 'left' }}>
                Product Identification
            </Typography>
            {productDetails.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mb: 1.2 }}>
                    {item.icon}
                    <Typography variant="body1" fontWeight="semibold">
                        {item.label}:
                    </Typography>
                    <Typography variant="body1">{item.value}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default ProductInfo;
