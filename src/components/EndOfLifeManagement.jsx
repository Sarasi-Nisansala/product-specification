import React, { useState } from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Button,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Card,
    CardContent,
    CardHeader
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; // For recycling
import StoreIcon from '@mui/icons-material/Store';       // For resellers

const EndOfLifeManagement = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState({ title: '', content: '' });

    const handleOpenDialog = (title, content) => {
        setDialogContent({ title, content });
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleResellOnEbay = () => {
        window.open('https://www.ebay.com', '_blank');
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
                End of Life Management
            </Typography>

            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography variant="h6" fontWeight="semibold" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                        Disposal Guide
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText primary="Step 1:" secondary="Unplug and clean the kettle thoroughly." />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="Step 2:" secondary="Separate components if possible." />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="Step 3:" secondary="Find local recycling centers." />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>

            <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() =>
                            handleOpenDialog(
                                'Find Resellers',
                                'Contact information, Location on map etc. (Dummy data for now)'
                            )
                        }
                        startIcon={<StoreIcon />}
                    >
                        Find Resellers
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() =>
                            handleOpenDialog(
                                'Find Recyclers',
                                'Contact information, Location on map etc. (Dummy data for now)'
                            )
                        }
                        startIcon={<DeleteForeverIcon />}
                    >
                        Find Recyclers
                    </Button>
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleResellOnEbay}
                        endIcon={<ArrowForwardIcon />}
                        style={{ backgroundColor: '#4285F4', color: 'white' }}
                    >
                        Resell on eBay
                    </Button>
                </Grid>
            </Grid>

            <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {dialogContent.title}
                </DialogTitle>
                <DialogContent id="alert-dialog-description">
                    <DialogContentText>
                        {dialogContent.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default EndOfLifeManagement;