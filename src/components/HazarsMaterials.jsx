import React, { useState } from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemText, Collapse, IconButton, Tooltip, Card, CardContent, CardHeader } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

const ProductDetailsSection = () => {
    const hazardousSubstances = [
        'Lead',
        'Mercury',
        'Cadmium',
        'Hexavalent Chromium',
        'Polybrominated Biphenyls (PBBs)',
        'Polybrominated Diphenyl Ethers (PBDEs)',
    ];

    const lifetimeExpectancy = '4.4 years';
    const sparePartsAvailability = 'Available for 5 years';

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                Product Details
            </Typography>

            <Card sx={{ mb: 3 }}>
                <CardHeader
                    title={
                        <Grid container alignItems="center" gap={1}>
                            <WarningAmberIcon color="warning" />
                            <Typography variant="subtitle1" fontWeight="semibold">Hazardous Substances</Typography>
                        </Grid>
                    }
                    action={
                        <IconButton onClick={handleExpandClick} aria-label="expand">
                            {expanded ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    }
                />
                <CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <List>
                            {hazardousSubstances.map((substance, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemText primary={substance} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                    {!expanded && (
                        <Typography variant="body2" color="text.secondary">
                            Click to see the list of hazardous substances.
                        </Typography>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="Lifetime and Spare Parts" style={{ textAlign: 'left' }}/>
                <CardContent>
                    <List>
                        <ListItem disablePadding>
                            <Grid container alignItems="center">
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" fontWeight="semibold">Average lifetime expectancy</Typography>
                                </Grid>
                                <Grid item xs={6} textAlign="right">
                                    <Tooltip title="This is the estimated lifespan of the product under normal usage.">
                                        <Grid container alignItems="center" justifyContent="flex-end" gap={1}>
                                            <InfoOutlined color="info" fontSize="small" />
                                            <Typography variant="body2">{lifetimeExpectancy}</Typography>
                                        </Grid>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem disablePadding>
                            <Grid container alignItems="center">
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" fontWeight="semibold">Availability of spare parts</Typography>
                                </Grid>
                                <Grid item xs={6} textAlign="right">
                                    <Tooltip title="Spare parts will be available for purchase for the next 5 years.">
                                        <Grid container alignItems="center" justifyContent="flex-end" gap={1}>
                                            <InfoOutlined color="info" fontSize="small" />
                                            <Typography variant="body2">{sparePartsAvailability}</Typography>
                                        </Grid>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ProductDetailsSection;
