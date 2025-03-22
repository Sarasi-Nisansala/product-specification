import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // Lightbulb icon for "TRACED MATERIALS"
import ScaleIcon from '@mui/icons-material/Scale';       // Weight scale icon

const RecycledContentSection = ({ percentage, amount, totalWeight }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '800px',
                margin: '2rem auto',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                textAlign: 'center'
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom style={{ textAlign: 'left' }}>
                Recycled Content
            </Typography>

            <Card sx={{
                maxWidth: '400px',
                margin: '2rem auto',
                borderRadius: '16px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}>
                <CardContent>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-start' }}>
                        <EmojiObjectsIcon fontSize="medium" color="primary" />
                        <Typography variant="h6" fontWeight="semibold" gutterBottom style={{ textAlign: 'left' }}>
                            Traced Materials
                        </Typography>
                    </div>

                    <Box
                        sx={{
                            width: '200px',
                            height: '200px',
                            margin: '1rem auto',
                            position: 'relative',
                        }}
                    >
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                textColor: '#333',
                                pathColor: '#81c784',
                                trailColor: '#e0e0e0',
                                textSize: '1.2rem',
                            })}
                        />
                    </Box>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <Typography variant="body1" fontWeight="medium">Amount:</Typography>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                            <ScaleIcon fontSize="small" color="secondary" />
                            <Typography variant="body1">{amount} kg</Typography>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="body1" fontWeight="medium">Total Weight:</Typography>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                            <ScaleIcon fontSize="small" color="secondary" />
                            <Typography variant="body1">{totalWeight} kg</Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RecycledContentSection;
