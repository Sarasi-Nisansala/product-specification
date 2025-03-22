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
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        window.open('https://www.ebay.com', '_blank'); // Open eBay in a new tab
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
                End of life management
            </Typography>

            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="subtitle1" gutterBottom>
                    Step-by-Step Guide to Dispose of Your Electric Kettle
                </Typography>

                <List>
                    <ListItem disablePadding>
                        <ListItemText primary="Unplug and clean the kettle thoroughly. Ensure it is clean and free of any water or residuals." />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="Separate components if possible" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="Finding Local Recycling Centers (Check our easy recycling locator to find your local reuse, recycling points)" />
                    </ListItem>
                </List>

                <Grid container spacing={2} justifyContent="center" marginTop={2}>
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
                        >
                            Find Recyclers
                        </Button>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" marginTop={3}>
                    <Grid item xs={12} sm={6}>
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

                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>{dialogContent.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{dialogContent.content}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
};

export default EndOfLifeManagement;