import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';

const PackagingRecyclingSection = () => {
    const packagingData = [
        {
            type: 'Folding box with interior protective carton boards',
            description: 'Cardboard box with offset printing. Single-walled cardboard with mixed fiber.',
            material: 'PAP 21',
            icon: 'https://i.imgur.com/your_cardboard_icon.png', // Replace with your cardboard icon URL
        },
        {
            type: 'Bag to protect the appliance',
            description: 'Low density polyethylene (LDPE)',
            material: 'PE-LD 04',
            icon: 'https://i.imgur.com/your_plastic_bag_icon.png', // Replace with your plastic bag icon URL
        },
        // Add more packaging items as needed
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
                Information relevant to packaging recycling
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="packaging recycling table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Packaging type / part</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Packaging part description</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Material type(s)</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Icon</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {packagingData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.type}
                                </TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>
                                    <Avatar src={row.icon} alt={row.material} variant="rounded" sx={{ width: 50, height: 50 }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PackagingRecyclingSection;