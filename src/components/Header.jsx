import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Fade } from "@mui/material";
import kettle from "../asserts/Kettle.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import sustain from "../asserts/Sustain.jpg";
import productIdentification from "../asserts/productIdentification.png";
import supplyChain from "../asserts/SupplyChain.jpg";
import complience from "../asserts/Complience.jpg";
import guidelines from "../asserts/GuideManual.jpg";
import endOfLife from "../asserts/EndOfLife.jpg";
import fairTrade from "../asserts/fairTrade.jpg";
import ecoFriendly from "../asserts/EcoFriendly.jpg";
import energySave from "../asserts/EnergySave.jpg";

const swipeItems = [
    {
        title: 'Social Sustainability',
        image: sustain,
    },
    {
        title: 'Product Identification',
        image: productIdentification,
    },
    {
        title: 'Supply Chain and Reverse Logistics',
        image: supplyChain,
    },
    {
        title: 'Compliance and Certifications',
        image: complience,
    },
    {
        title: 'Guidelines and Manuals',
        image: guidelines,
    },
    {
        title: 'End of Life Management',
        image: endOfLife,
    },

];

const certifications = [
    {
        alt: "Fair Trade Certificate",
        image: fairTrade
    },
    {
        alt: "Eco Friendly Certificate",
        image: ecoFriendly
    },
    {
        alt: "Energy Save Certificate",
        image: energySave
    },

]

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    // Auto-swipe with smooth transition
    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % swipeItems.length);
                setFadeIn(true);
            }, 300); // Wait for fade-out
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const goBack = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + swipeItems.length) % swipeItems.length);
            setFadeIn(true);
        }, 300);
    };

    const goNext = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % swipeItems.length);
            setFadeIn(true);
        }, 300);
    };

    return (
        <>
            <Box
                sx={{
                    height: '100vh',
                    width: '100%',
                    position: 'relative',
                    background: 'linear-gradient(to bottom, #f5f7fa, #c3cfe2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    overflow: 'hidden',
                    padding: '1rem', // Add padding for smaller screens
                }}
            >
                {/* Absolute-positioned Navbar goes on top (render this in App.jsx) */}

                {/* Top Half */}
                <Box
                    sx={{
                        height: 'auto', // Adjust height for better scaling
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        px: 2,
                        paddingBottom: '1rem', // Add spacing for better layout
                    }}
                >
                    <img
                        src={kettle}
                        alt="Electric Kettle"
                        style={{
                            width: 'min(200px, 50vw)', // Adjust width for smaller screens
                            marginBottom: '0.5rem',
                        }}
                    />

                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        ABC Electric Kettle
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Welcome to our Digital Product Passport!
                    </Typography>
                    <Typography
                        variant="body1"
                        fontStyle="italic"
                        sx={{ maxWidth: '600px', color: 'text.secondary' }}
                    >
                        Track your product’s sustainability, access eco-friendly tips, and stay connected for updates
                    </Typography>
                </Box>

                {/* Bottom Half - Carousel */}
                <Box
                    sx={{
                        height: 'auto', // Adjust height for better scaling
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap', // Allow wrapping for smaller screens
                    }}
                >
                    {/* Left Arrow */}
                    <IconButton onClick={goBack} sx={{ position: 'absolute', left: 16, zIndex: 2 }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <Fade in={fadeIn} timeout={500}>
                        {swipeItems[currentIndex] ? (
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    width: '90%', // Use percentage for responsive width
                                    maxWidth: '300px', // Limit max width
                                    height: 'auto', // Adjust height for better scaling
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    flexDirection: 'column',
                                }}
                            >
                                <img
                                    src={swipeItems[currentIndex].image}
                                    alt={swipeItems[currentIndex].title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',  // Crop and fill the container
                                        borderRadius: '12px',
                                    }}
                                />
                                <Typography variant="h6" fontWeight="bold" mt={2}>
                                    {swipeItems[currentIndex].title}
                                </Typography>
                            </Box>
                        ) : null}
                    </Fade>

                    {/* Right Arrow */}
                    <IconButton onClick={goNext} sx={{ position: 'absolute', right: 16, zIndex: 2 }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                }}
            >
                { certifications.map((cert, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'inline-block',
                            width: 'min(150px, 40vw)', // Adjust width for smaller screens
                            height: 'min(150px, 40vw)', // Adjust height for smaller screens
                            margin: '0.5rem', // Reduce margin for better spacing
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                            position: 'relative', // Added for positioning the watermark
                            mx: 15
                        }}
                    >
                        <img
                            src={cert.image}
                            alt={cert.alt}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Crop and fill the container
                                borderRadius: '12px',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
                                color: 'white',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                pointerEvents: 'none', // Ensures the watermark doesn't interfere with interactions
                            }}
                        >
                            For demonstration purpose only
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default Hero;
