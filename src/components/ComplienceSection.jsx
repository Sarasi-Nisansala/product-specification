import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Grid, Avatar, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Example regulation icon
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // Example certification icon

const ComplianceSection = () => {
    const complianceData = {
        productRegulation: {
            title: 'Product-specific regulation',
            description: 'Complies with all relevant industry standards and safety regulations.',
            icon: <CheckCircleIcon color="primary" />,
            details: 'This product adheres to the following regulations: [List of specific regulations]',
        },
        certifications: [
            {
                name: 'ISO 9001',
                logo: 'https://via.placeholder.com/50', // Replace with ISO 9001 logo URL
                description: 'Certified for quality management systems.',
                icon: <VerifiedUserIcon color="success" />,
                details: 'ISO 9001 certification details: [Specific details]',
            },
            {
                name: 'CE Marking',
                logo: 'https://via.placeholder.com/50', // Replace with CE Marking logo URL
                description: 'Complies with European safety, health, and environmental protection requirements.',
                icon: <VerifiedUserIcon color="success" />,
                details: 'CE Marking details: [Specific details]',
            },
            // Add more certifications as needed
        ],
    };

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
                Compliance
            </Typography>

            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemText
                            primary={complianceData.productRegulation.title}
                            secondary={complianceData.productRegulation.description}
                            primaryTypographyProps={{ variant: 'subtitle1' }}
                        />
                        <Tooltip title={complianceData.productRegulation.details}>
                            {complianceData.productRegulation.icon}
                        </Tooltip>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemText primary="Certifications" primaryTypographyProps={{ variant: 'subtitle1' }} />
                    </ListItem>

                    <List component="div" disablePadding sx={{ pl: 4 }}>
                        {complianceData.certifications.map((cert, index) => (
                            <ListItem key={index} disablePadding>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Avatar src={cert.logo} alt={cert.name} variant="rounded" />
                                    </Grid>
                                    <Grid item xs>
                                        <ListItemText
                                            primary={cert.name}
                                            secondary={cert.description}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title={cert.details}>
                                            {cert.icon}
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))}
                    </List>
                </List>
            </Box>
        </Box>
    );
};

export default ComplianceSection;