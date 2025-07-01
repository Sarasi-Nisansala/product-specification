import React, { useState } from 'react';
import { Box, Typography, Tooltip, styled, Fade } from '@mui/material';

// Custom tooltip content component
const ImpactTooltip = styled(Box)(({ theme }) => ({
    padding: '1rem',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    maxWidth: 250,
}));

export default function EnvironmentalLifespanImpactPage() {
    const [hovered, setHovered] = useState(null);

    const dataPoints = [
        {
            year: '3 years',
            position: '10%',
            content: (
                <ImpactTooltip>
                    <Typography fontWeight="bold">Depletion of elements</Typography>
                    <Typography>Human toxicity</Typography>
                    <Typography>Terrestrial ecotoxicity</Typography>
                    <Typography color="error">Increase in 4–6%</Typography>
                </ImpactTooltip>
            ),
        },
        {
            year: '4.4 years',
            position: '45%',
            content: (
                <ImpactTooltip>
                    <Typography fontWeight="bold">Average <u>life time</u></Typography>
                </ImpactTooltip>
            ),
        },
        {
            year: '7 years',
            position: '80%',
            content: (
                <ImpactTooltip>
                    <Typography fontWeight="bold">Depletion of elements</Typography>
                    <Typography>Human toxicity</Typography>
                    <Typography>Terrestrial ecotoxicity</Typography>
                    <Typography color="primary">Decrease in 3–5%</Typography>
                    <Typography>Global warming and primary energy demand</Typography>
                    <Typography color="primary">Decrease in 0.5%</Typography>
                </ImpactTooltip>
            ),
        },
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: '#f8f8f8',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 4,
            }}
        >
            <Typography variant="h4" gutterBottom fontWeight="bold">
                Variation of environmental impacts with life span
            </Typography>

            <Box
                sx={{
                    width: '100%',
                    maxWidth: 900,
                    height: 50,
                    borderRadius: 20,
                    background: 'linear-gradient(to right, red, yellow, green)',
                    position: 'relative',
                    marginTop: 6,
                }}
            >
                {dataPoints.map((point, index) => (
                    <Box
                        key={index}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: point.position,
                            transform: 'translate(-50%, -50%)',
                            width: 24,
                            height: 24,
                            backgroundColor: '#ccc',
                            borderRadius: '50%',
                            border: '2px solid #444',
                            cursor: 'pointer',
                            zIndex: 2,
                        }}
                    >
                        {hovered === index && (
                            <Fade in timeout={200}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '-140px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        zIndex: 5,
                                    }}
                                >
                                    {point.content}
                                </Box>
                            </Fade>
                        )}
                    </Box>
                ))}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: 900,
                    mt: 1,
                    px: 2,
                }}
            >
                {dataPoints.map((point, index) => (
                    <Typography key={index} fontSize="14px">
                        {point.year}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
}