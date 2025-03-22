import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Grid, Avatar, Tooltip, Card, CardContent, CardHeader } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

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
                logo: 'https://worldvectorlogo.com/logo/iso-9001-sgs',
                description: 'Certified for quality management systems.',
                icon: <VerifiedUserIcon color="success" />,
                details: 'ISO 9001 certification details: [Specific details]',
            },
            {
                name: 'CE Marking',
                logo: 'https://www.alamy.com/ce-mark-symbol-for-conformite-europeenne-clean-label-product-information-vector-illustration-sign-image423468265.html',
                description: 'Complies with European safety, health, and environmental protection requirements.',
                icon: <VerifiedUserIcon color="success" />,
                details: 'CE Marking details: [Specific details]',
            },
        ],
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
                Compliance
            </Typography>

            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography variant="h6" fontWeight="semibold" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                        {complianceData.productRegulation.title}
                    </Typography>
                    <Grid container alignItems="center" gap={2}>
                        <Grid item xs>
                            <Typography variant="body1" color="textSecondary">
                                {complianceData.productRegulation.description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Tooltip title={complianceData.productRegulation.details}>
                                {complianceData.productRegulation.icon}
                            </Tooltip>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <Typography variant="h6" fontWeight="semibold" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                        Certifications
                    </Typography>
                    <List>
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
                </CardContent>
            </Card>
        </Box>
    );
};

export default ComplianceSection;
