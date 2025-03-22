import React, { useState } from 'react';
import { Box, Typography, Link, Modal, Button, List, ListItem, ListItemText, IconButton, Tooltip, Card, CardContent, CardHeader, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import PartsID from '../asserts/PartsID.png';

const DocumentSection = () => {

    const documentLinks = [
        {
            title: 'Installation Guideline',
            modalContent: (
                <List>
                    <ListItem><ListItemText primary="Step 1:" secondary="Unpack the device carefully." /></ListItem>
                    <ListItem><ListItemText primary="Step 2:" secondary="Connect the power cord to the socket." /></ListItem>
                    <ListItem><ListItemText primary="Step 3:" secondary="Turn on the device using the power button." /></ListItem>
                    <ListItem><ListItemText primary="Note:" secondary="Ensure proper ventilation during installation." /></ListItem>
                </List>
            ),
            downloadLink: 'https://drive.google.com/uc?export=download&id=1xZu3NJpbX51TwmhZS0RriTInZNo6dka8',
            viewLink: 'https://docs.google.com/document/d/1xZu3NJpbX51TwmhZS0RriTInZNo6dka8/edit?usp=sharing&ouid=115409419910619215682&rtpof=true&sd=true'
        },
        {
            title: 'Product Manual',
            modalContent: (
                <List>
                    <ListItem><ListItemText primary="Description:" secondary="Provides detailed product features and usage." /></ListItem>
                    <ListItem><ListItemText primary="Troubleshooting:" secondary="Refer to this section for common issues and solutions." /></ListItem>
                    <ListItem><ListItemText primary="Warranty:" secondary="Visit our website for warranty information." /></ListItem>
                </List>
            ),
            downloadLink: 'https://drive.google.com/uc?export=download&id=1ny8RMJpb_ZG0LAHScwQQyRYtdEHuN83z',
            viewLink: 'https://docs.google.com/document/d/1ny8RMJpb_ZG0LAHScwQQyRYtdEHuN83z/edit?usp=sharing&ouid=115409419910619215682&rtpof=true&sd=true'
        },
        {
            title: 'Safety Instructions',
            modalContent: (
                <List>
                    <ListItem><ListItemText primary="Warning:" secondary="Keep away from water." /></ListItem>
                    <ListItem><ListItemText primary="Caution:" secondary="Do not disassemble the device." /></ListItem>
                    <ListItem><ListItemText primary="Important:" secondary="Use only approved accessories." /></ListItem>
                </List>
            ),
            downloadLink: 'https://drive.google.com/uc?export=download&id=11ulR8dPOUajXm1snX0bnSAA0paNt_TSo',
            viewLink: 'https://docs.google.com/document/d/11ulR8dPOUajXm1snX0bnSAA0paNt_TSo/edit?usp=sharing&ouid=115409419910619215682&rtpof=true&sd=true'
        },
        {
            title: 'Guideline for Maintenance',
            modalContent: (
                <List>
                    <ListItem><ListItemText primary="Cleaning:" secondary="Clean with a soft, dry cloth." /></ListItem>
                    <ListItem><ListItemText primary="Connections:" secondary="Check for loose connections regularly." /></ListItem>
                    <ListItem><ListItemText primary="Chemicals:" secondary="Do not use harsh chemicals." /></ListItem>
                </List>
            ),
            downloadLink: 'https://drive.google.com/uc?export=download&id=12kk_DXnpw9NfeseGuuloc9LIPyAD2smL',
            viewLink: 'https://docs.google.com/document/d/12kk_DXnpw9NfeseGuuloc9LIPyAD2smL/edit?usp=sharing&ouid=115409419910619215682&rtpof=true&sd=true'
        },
        {
            title: 'Guidelines for Non-Destructive Disassembly',
            modalContent: (
                <List>
                    <ListItem><ListItemText primary="Step 1:" secondary="Use a Phillips screwdriver to remove the back panel." /></ListItem>
                    <ListItem><ListItemText primary="Step 2:" secondary="Disconnect internal cables carefully." /></ListItem>
                    <ListItem><ListItemText primary="Reference:" secondary="Refer to the diagram for component locations." /></ListItem>
                </List>
            ),
            downloadLink: 'https://drive.google.com/uc?export=download&id=1VbJnVDuDk_W4jkgiPDhTxtLJj9mHUJEc',
            viewLink: 'https://docs.google.com/document/d/1VbJnVDuDk_W4jkgiPDhTxtLJj9mHUJEc/edit?usp=sharing&ouid=115409419910619215682&rtpof=true&sd=true'
        },
        {
            title: 'Instructions for Efficient Energy Use',
            modalContent: (
                <List>
                    <ListItem><ListItemText primary="Usage:" secondary="Turn off the device when not in use." /></ListItem>
                    <ListItem><ListItemText primary="Mode:" secondary="Use the energy-saving mode." /></ListItem>
                    <ListItem><ListItemText primary="Settings:" secondary="Adjust the brightness settings." /></ListItem>
                </List>
            ),
            downloadLink: 'https://drive.google.com/uc?export=download&id=1Cu1xT46Aba96dmFpBcuNBSMwq9FJcGYC',
            viewLink: 'https://docs.google.com/document/d/1Cu1xT46Aba96dmFpBcuNBSMwq9FJcGYC/edit?usp=sharing&ouid=115409419910619215682&rtpof=true&sd=true'
        },
    ];

    const youtubeVideoLink = 'https://www.youtube.com/watch?v=q5tnNVPqN10';

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
                Documents and Media
            </Typography>

            <Typography variant="h6" fontWeight="semibold" style={{ textAlign: 'left', marginTop: '2rem', marginBottom: '1rem' }}>
                Parts Identification
            </Typography>
            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <img
                        src={PartsID}
                        alt="Parts Identification"
                        style={{ maxWidth: '100%', borderRadius: '12px' }}
                    />
                </CardContent>
            </Card>

            <Typography variant="h6" fontWeight="semibold" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Document Links
            </Typography>

            <List>
                {documentLinks.map((doc, index) => (
                    <ListItem key={index} disablePadding>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Link
                                    href={doc.viewLink}
                                    component="button"
                                    variant="body1"
                                    sx={{ cursor: 'pointer', textAlign: 'left' }}
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent default button behavior
                                        window.open(doc.viewLink, '_blank', 'noopener,noreferrer'); // Open in new tab
                                    }}
                                >
                                    {doc.title}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Download from Google Drive">
                                    <IconButton
                                        href={doc.downloadLink}
                                        target="_blank"  // Open in a new tab
                                        rel="noopener noreferrer" // Best practice for security with target="_blank"
                                        size="small"
                                    >
                                        <DownloadIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>

            <Card sx={{ mt: 4, boxShadow: 'none' }}>
                <CardContent>
                    <Typography variant="h6" fontWeight="semibold" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                        Video
                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: '#e0e0e0',
                            padding: '1rem',
                            marginTop: '1rem',
                            textAlign: 'center',
                            borderRadius: '8px'
                        }}
                    >
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/q5tnNVPqN10?si=Qzd-qaIH5ESM8xgY"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </Box>
                    <Button
                        variant="text"
                        startIcon={<PlayArrowIcon/>}
                        sx={{marginTop: '1rem'}}
                        onClick={() => window.open(youtubeVideoLink, '_blank')}
                    >
                        Watch on Youtube
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default DocumentSection;
