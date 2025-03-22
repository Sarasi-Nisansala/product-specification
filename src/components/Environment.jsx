import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ElectricKettleDisposal = () => {
    const electricKettleDisposalData = {
        whyNotGarbage: {
            title: "Why You Shouldn't Throw Electric Kettles in the Garbage",
            reasons: [
                {
                    title: "E-Waste Regulations",
                    description:
                        "Many regions have laws governing electronic waste (e-waste). Electric kettles fall under this category due to their electrical components. Disposing of them in regular trash can lead to fines or penalties.",
                },
                {
                    title: "Environmental Impact",
                    description:
                        "Electric kettles contain materials that can leach harmful chemicals into the soil and water supply if they end up in landfills. Plastics can take hundreds of years to decompose, while metals can contaminate groundwater.",
                },
                {
                    title: "Resource Waste",
                    description:
                        "Many components of electric kettles are recyclable. Throwing them away means losing valuable resources that could be reused in new products.",
                },
            ],
        },
        environmentalBenefits: {
            title: "Environmental Benefits of Proper Disposal",
            intro:
                "Proper disposal methods not only help reduce waste but also offer several environmental benefits:",
            benefits: [
                {
                    title: "Conserves Resources",
                    description:
                        "Recycling helps conserve natural resources by reusing materials instead of extracting new ones.",
                },
                {
                    title: "Reduces Pollution",
                    description:
                        "Proper disposal minimizes pollution generated from manufacturing new products from raw materials.",
                },
                {
                    title: "Promotes Sustainable Practices",
                    description:
                        "Engaging in responsible disposal supports a circular economy where products are designed with their end-of-life in mind.",
                },
            ],
        },
    };

    return (
        <Box>
            {/* Section 1: Why You Shouldn't Throw Electric Kettles in the Garbage */}
            <Box
                sx={{
                    backgroundColor: '#f8f8f8',
                    borderRadius: '20px',
                    padding: '2rem',
                    maxWidth: '600px',
                    margin: '2rem auto',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    {electricKettleDisposalData.whyNotGarbage.title}
                </Typography>
                <List>
                    {electricKettleDisposalData.whyNotGarbage.reasons.map((reason, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemText primary={reason.title} secondary={reason.description} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Section 2: Environmental Benefits of Proper Disposal */}
            <Box
                sx={{
                    backgroundColor: '#f8f8f8',
                    borderRadius: '20px',
                    padding: '2rem',
                    maxWidth: '600px',
                    margin: '2rem auto',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    {electricKettleDisposalData.environmentalBenefits.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {electricKettleDisposalData.environmentalBenefits.intro}
                </Typography>
                <List>
                    {electricKettleDisposalData.environmentalBenefits.benefits.map((benefit, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemText primary={benefit.title} secondary={benefit.description} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default ElectricKettleDisposal;