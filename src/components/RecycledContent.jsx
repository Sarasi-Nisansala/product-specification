import React from 'react';
import { Box, Typography } from '@mui/material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RecycledContentSection = ({ percentage, amount, totalWeight }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8', // Light background color
                borderRadius: '20px',
                padding: '3rem',
                maxWidth: '600px',
                margin: '2rem auto',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
                textAlign: 'center',
            }}
        >
            <Typography variant="h6" gutterBottom>
                Recycled content
            </Typography>

            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '2rem',
                    maxWidth: '300px',
                    margin: '2rem auto',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    position: 'relative', // For absolute positioning of the progress bar
                }}
            >
                <Typography variant="subtitle1" gutterBottom>
                    TRACED MATERIALS
                </Typography>

                <Box
                    sx={{
                        width: '150px',
                        height: '150px',
                        margin: '1rem auto',
                        position: 'relative', // For absolute positioning of the percentage text
                    }}
                >
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            textColor: '#333',
                            pathColor: '#673ab7', // Purple color for the progress bar
                            trailColor: '#d9d9d9', // Light gray for the trail
                        })}
                    />
                </Box>

                <Typography variant="body2">
                    Amount <span style={{ float: 'right' }}>{amount} kg</span>
                </Typography>
                <Typography variant="body2">
                    Total weight <span style={{ float: 'right' }}>{totalWeight} kg</span>
                </Typography>
            </Box>
        </Box>
    );
};

export default RecycledContentSection;