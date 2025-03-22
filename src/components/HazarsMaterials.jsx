import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Collapse,
    IconButton,
    Tooltip,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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
                maxWidth: '600px',
                margin: '2rem auto',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <List>
                <ListItem disablePadding>
                    <Grid container alignItems="center">
                        <Grid item xs={6}>
                            <Typography variant="subtitle1">List of hazardous substances</Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                            <IconButton onClick={handleExpandClick} aria-label="expand">
                                {expanded ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </Grid>
                    </Grid>
                </ListItem>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {hazardousSubstances.map((substance, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemText primary={substance} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1">Average lifetime expectancy</Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                            <Tooltip title="This is the estimated lifespan of the product under normal usage.">
                                <Typography variant="body2">{lifetimeExpectancy}</Typography>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem disablePadding>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1">Availability of spare parts</Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                            <Tooltip title="Spare parts will be available for purchase for the next 5 years.">
                                <Typography variant="body2">{sparePartsAvailability}</Typography>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </Box>
    );
};

export default ProductDetailsSection;