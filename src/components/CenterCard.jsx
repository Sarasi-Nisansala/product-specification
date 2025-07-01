import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';

const RepairCenter = ({ name, address, phone, link }) => {
    return (
        <Card
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                boxShadow: 4,
                borderRadius: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <BusinessIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" fontWeight="bold">
                        {name}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                        {address}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon color="success" sx={{ mr: 1 }} />
                    <Typography variant="body1" fontWeight="medium">
                        {phone}
                    </Typography>
                </Box>
            </CardContent>
            <Box sx={{ px: 2, pb: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    href={link}
                    target="_blank"
                    fullWidth
                    sx={{ fontWeight: 'bold' }}
                >
                    View on Google Maps
                </Button>
            </Box>
        </Card>
    );
};

export default RepairCenter;