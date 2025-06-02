import React, { useState } from 'react';
import {
    Box, Card, CardContent, Typography, Button, Modal,
    TextField, Rating
} from '@mui/material';
import { db } from '../../firebase'; // adjust the path
import { doc, setDoc } from 'firebase/firestore';

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
    const [formData, setFormData] = useState({
        userName: '',
        userPhone: '',
        preferredDate: '',
    });

    const handleChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    const handleSubmit = async () => {
        try {
            await setDoc(doc(db, 'bookings', productId), {
                serviceCenter: name,
                address,
                phone,
                rating,
                ...formData,
                timestamp: new Date(),
            });

            alert('Booking submitted!');
            setOpen(false);
            setFormData({ userName: '', userPhone: '', preferredDate: null });
        } catch (error) {
            console.error('Error saving booking:', error);
            alert('Failed to submit booking.');
        }
    };

    return (
        <>
            <Card sx={{ width: '100%', minHeight: 200, p: 2 }}>
                <CardContent>
                    <Typography variant="h6" fontWeight="bold">{name}</Typography>
                    <Typography>{address}</Typography>
                    <Typography>{phone}</Typography>

                    <Box display="flex" alignItems="center" mt={1}>
                        <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                            Open in Maps
                        </Button>
                        <Rating value={rating} readOnly />
                    </Box>

                    <Box mt={2}>
                        <Button variant="contained" onClick={() => setOpen(true)}>
                            Book Now
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style.modalBox}>
                    <Typography variant="h6" mb={2}>Book Service</Typography>
                    <TextField
                        fullWidth
                        name="Date"
                        label="Date"
                        margin="normal"
                        value={formData.Date}
                        placeholder={"DD/MM/YYYY"}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        name="AppliType"
                        label="Type of Appliance"
                        margin="normal"
                        value={formData.AppliType}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        name="Model"
                        label="Model"
                        margin="normal"
                        value={formData.Model}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        name="RepairType"
                        label="Type of Repair"
                        margin="normal"
                        value={formData.RepairType}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        name="Description"
                        label="Description"
                        margin="normal"
                        value={formData.Description}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        name="Name"
                        label="Name"
                        margin="normal"
                        value={formData.Name}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        name="ContactNo"
                        label="Contact No"
                        margin="normal"
                        value={formData.ContactNo}
                        onChange={handleChange}
                    />
                    <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default RepairCard;