import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Trash2, Recycle } from 'lucide-react'; // Import icons

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
        <Box sx={{
            backgroundColor: '#f8f8f8',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '800px',
            margin: '2rem auto',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
            {/* Section 1: Why You Shouldn't Throw Electric Kettles in the Garbage */}
            <Card>
                <CardHeader
                    title={
                        <Typography variant="h4" fontWeight="bold" style={{ textAlign: 'left' }}>
                            {electricKettleDisposalData.whyNotGarbage.title}
                        </Typography>
                    }
                />
                <CardContent>

                    <List>
                        {electricKettleDisposalData.whyNotGarbage.reasons.map((reason, index) => (
                            <ListItem key={index} disablePadding>
                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item>
                                        {index === 0 && <Trash2 color="warning" size={24} />}
                                        {index === 1 && <Trash2 color="error" size={24} />}
                                        {index === 2 && <Trash2 color="secondary" size={24} />}
                                    </Grid>
                                    <Grid item xs>
                                        <ListItemText
                                            primary={
                                                <Typography variant="h6" fontWeight="semibold" style={{ textAlign: 'left' }}>
                                                    {reason.title}
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography variant="body1" color="textSecondary" style={{ textAlign: 'left' }}>
                                                    {reason.description}
                                                </Typography>
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>

            {/* Section 2: Environmental Benefits of Proper Disposal */}
            <Card sx={{ margin: '2rem auto', maxWidth: '800px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <CardHeader
                    title={
                        <Typography variant="h4" fontWeight="bold" style={{ textAlign: 'left' }}>
                            {electricKettleDisposalData.environmentalBenefits.title}
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography variant="body1" gutterBottom style={{ textAlign: 'left' }}>
                        {electricKettleDisposalData.environmentalBenefits.intro}
                    </Typography>
                    <List>
                        {electricKettleDisposalData.environmentalBenefits.benefits.map((benefit, index) => (
                            <ListItem key={index} disablePadding>
                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item>
                                        <Recycle color="success" size={24}/>
                                    </Grid>
                                    <Grid item xs>
                                        <ListItemText
                                            primary={  <Typography variant="h6" fontWeight="semibold" style={{textAlign: 'left'}}>
                                                {benefit.title}
                                            </Typography>}
                                            secondary={ <Typography variant="body1" color="textSecondary" style={{textAlign: 'left'}}>
                                                {benefit.description}
                                            </Typography>}
                                        />
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ElectricKettleDisposal;
