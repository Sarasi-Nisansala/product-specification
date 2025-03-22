import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  } from '@mui/material';
import {
    Inventory2,
    ShoppingBagOutlined
} from '@mui/icons-material'; // Import icons from Material UI

const PackagingRecyclingSection = () => {
    const packagingData = [
        {
            type: 'Folding box with interior protective carton boards',
            description: 'Cardboard box with offset printing. Single-walled cardboard with mixed fiber.',
            material: 'PAP 21',
            icon: <Inventory2 size="large" />,
        },
        {
            type: 'Bag to protect the appliance',
            description: 'Low density polyethylene (LDPE)',
            material: 'PE-LD 04',
            icon: <ShoppingBagOutlined size="large" />,
        },
        // Add more packaging items as needed
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '800px',
                margin: '2rem auto',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom style={{ textAlign: 'left' }}>
                Information Relevant to Packaging Recycling
            </Typography>

            <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                <Table aria-label="packaging recycling table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Packaging Type</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Description</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Material</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Recycling Guide</TableCell>
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
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        {row.icon}
                                    </Box>
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
