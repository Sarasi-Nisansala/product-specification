import React from 'react';
import { Box, Typography, Grid } from "@mui/material";
import kettle from "../asserts/Kettle.png";
import { CoffeeMaker } from '@mui/icons-material'; // Example icon

const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "45vh", // Increased height for better spacing
                backdropFilter: "blur(12px)", // Slightly stronger blur
                backgroundColor: "rgba(255, 255, 255, 0.3)", // Slightly more opaque
                padding: "2rem",
                borderRadius: "24px", // More rounded corners
                boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)", // More pronounced shadow
                textAlign: 'center', // Center text
                margin: '2rem auto', //Added
                maxWidth: '800px'
            }}
        >
            <Typography variant="h3" fontWeight="bold" color="black" gutterBottom style={{ textAlign: 'center' }}>
                Electric Kettle
            </Typography>
            <Grid container justifyContent="center" alignItems="center" spacing={4}>
                <Grid item>
                    <img
                        src={kettle}
                        alt="Electric Kettle"
                        style={{
                            width: "min(40vh, 100%)", // Responsive width, max 40vh
                            height: "auto",
                            borderRadius: "16px", // Add some border radius to the image
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Add a shadow to the image
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;
