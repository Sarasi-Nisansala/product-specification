import React from 'react';
import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                textAlign: 'center',
                padding: '1rem 0',
                backgroundColor: '#f5f5f5',
                borderTop: '1px solid #ddd',
            }}
        >
            <Typography variant="body1" fontWeight="bold">
                ABC Electronics
            </Typography>
            <Typography variant="body2" color="text.secondary" display="flex" justifyContent="center" alignItems="center">
                <CopyrightIcon fontSize="small" sx={{ marginRight: '0.25rem' }} />
                {new Date().getFullYear()} All rights reserved
            </Typography>
        </Box>
    );
};

export default Footer;