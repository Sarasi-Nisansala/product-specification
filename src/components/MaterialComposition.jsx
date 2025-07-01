import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from "@mui/material";
import {Construction, Scale, Inventory} from '@mui/icons-material'; // Icons

const materialData = {
    rawMaterials: [
        { name: "Stainless steel", weight: 645 },
        { name: "Brass", weight: 24 },
        { name: "Copper", weight: 19 },
        { name: "Polypropylene (PP)", weight: 419 },
        { name: "Polyvinyl chloride", weight: 57 },
        { name: "Nylon", weight: 36 },
        { name: "High density polyethylene", weight: 1 },
    ],
    packaging: [
        { name: "Low density polyethylene", weight: 13 },
        { name: "Cardboard boxes", weight: 500 }
    ]
};

const MaterialCompositionTable = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                maxWidth: "1200px",
                margin: "2rem auto",
            }}
            id='materialComposition'
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom style={{ textAlign: 'left' }}>
                Material Composition
            </Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold", fontSize: '1.1rem' }}>Category</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: '1.1rem' }}>Weight (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Raw Materials Section */}
                        <TableRow>
                            <TableCell
                                colSpan={2}
                                sx={{
                                    fontWeight: "bold",
                                    backgroundColor: "#f5f5f5",
                                    paddingLeft: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Construction color="primary" fontSize="medium" />
                                <Typography variant="h6" fontWeight="semibold">
                                    Raw Materials
                                </Typography>

                            </TableCell>
                        </TableRow>
                        {materialData.rawMaterials.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                        <Scale fontSize="small" color="secondary" />
                                        {item.weight}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}

                        {/* Packaging Section */}
                        <TableRow>
                            <TableCell
                                colSpan={2}
                                sx={{
                                    fontWeight: "bold",
                                    backgroundColor: "#f5f5f5",
                                    paddingLeft: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}

                            >
                                <Inventory color="primary" fontSize="medium"/>
                                <Typography variant="h6" fontWeight="semibold">
                                    Packaging
                                </Typography>
                            </TableCell>
                        </TableRow>
                        {materialData.packaging.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                        <Scale fontSize="small" color="secondary" />
                                        {item.weight}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default MaterialCompositionTable;
