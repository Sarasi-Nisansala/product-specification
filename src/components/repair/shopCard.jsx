import React, { useState } from 'react';
import {
    Box, Card, CardContent, Typography, Button, Modal,
    TextField, Rating, Grid, MenuItem, Select, InputLabel, FormControl, CircularProgress
} from '@mui/material';
import { db } from '../../firebase'; // adjust the path
import { collection, addDoc } from 'firebase/firestore';
import {useNavigate} from "react-router-dom";

const style = {
    modalBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
    },
};

const RepairCard = ({ name, address, phone, rating, productId }) => {
    const [open, setOpen] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    const handleSubmit = async () => {
        try {
            if (!formData.Date || !formData.AppliType || !formData.Name || !formData.ContactNo) {
                alert('Please fill in all required fields.');
                return;
            }
            setLoading(true);
            await addDoc(collection(db, 'bookings'), {
                productId, // include productId as a field
                serviceCenter: name,
                address,
                phone,
                rating,
                ...formData,
                timestamp: new Date(),
            });

            setOpen(false);
            setLoading(false);
            setOpenSuccess(true);
            setFormData({});
        } catch (error) {
            console.error('Error saving booking:', error);
            alert('Failed to submit booking.');
        }
    };

    return (
        <>
            <Card sx={{ width: '100%', p: 2, '&:hover': { boxShadow: 6 } }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" fontWeight="bold" color="primary">{name}</Typography>
                            <Typography variant="body2">{address}</Typography>
                            <Typography variant="body2" color="textSecondary">{phone}</Typography>
                            <Rating value={rating} readOnly size="small" sx={{ mt: 1 }} />
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="flex-end">
                            <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
                                Book Now
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style.modalBox}>
                <Typography variant="h6" mb={2}>Book a Service at <strong>{name}</strong></Typography>

                <TextField
                    fullWidth
                    label="Preferred Repair Date"
                    placeholder="DD/MM/YYYY"
                    value={formData.Date}
                    onChange={handleChange('Date')}
                    sx={{ my: 1 }}
                />

                <FormControl fullWidth sx={{ my: 1 }}>
                    <InputLabel>Appliance Type</InputLabel>
                    <Select
                        value={formData.AppliType || ''}
                        onChange={handleChange('AppliType')}
                        label="Appliance Type"
                    >
                        {['Electric Kettle', 'Rice Cooker', 'Iron', 'Blender', 'Oven'].map((type) => (
                            <MenuItem key={type} value={type}>{type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    label="Appliance Model"
                    placeholder="e.g. Philips HD9303"
                    value={formData.Model}
                    onChange={handleChange('Model')}
                    sx={{ my: 1 }}
                />

                <FormControl fullWidth sx={{ my: 1 }}>
                    <InputLabel>Repair Type</InputLabel>
                    <Select
                        value={formData.RepairType || ''}
                        onChange={handleChange('RepairType')}
                        label="Repair Type"
                    >
                        <MenuItem value="Electrical">Electrical</MenuItem>
                        <MenuItem value="Mechanical">Mechanical</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    label="Problem Description"
                    multiline
                    rows={3}
                    placeholder="Briefly describe the issue"
                    value={formData.Description}
                    onChange={handleChange('Description')}
                    sx={{ my: 1 }}
                />

                <TextField
                    fullWidth
                    label="Your Name"
                    placeholder="e.g. John Doe"
                    value={formData.Name}
                    onChange={handleChange('Name')}
                    sx={{ my: 1 }}
                />

                <TextField
                    fullWidth
                    label="Contact Number"
                    placeholder="e.g. 0771234567"
                    value={formData.ContactNo}
                    onChange={handleChange('ContactNo')}
                    sx={{ my: 1 }}
                />

                <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit} disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Submit Booking'}
                </Button>
            </Box>
            </Modal>

            {/* Success Modal */}
            <Modal open={openSuccess} onClose={() => setOpenSuccess(false)}>
            <Box sx={style.modalBox}>
                <Typography variant="h6" gutterBottom>✅ Booking Confirmed!</Typography>
                <Typography>Your request has been successfully submitted. We'll contact you shortly.</Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => setOpenSuccess(false)}
                        >
                            Close
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => navigate(`/repairHistory`)}
                        >
                            View My Repairs
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            </Modal>
        </>
    );
};

export default RepairCard;