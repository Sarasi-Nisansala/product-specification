import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    CircularProgress,
    Alert,
    Container,
    Divider,
} from '@mui/material';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const RepairHistoryPage = () => {
    const { productId } = useParams();
    const [bookingData, setBookingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            setLoading(true);
            try {
                const bookingsRef = collection(db, 'bookings');
                const q = query(bookingsRef, where('productId', '==', productId), orderBy('timestamp', 'desc'));
                const querySnapshot = await getDocs(q);

                const bookings = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setBookingData(bookings);
            } catch (err) {
                console.error('Failed to fetch bookings:', err);
                setError('Failed to load booking history. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [productId]);

    if (loading) {
        return (
            <Box mt={6} textAlign="center">
                <CircularProgress />
                <Typography variant="body1" mt={2}>Loading repair history...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box mt={4}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    if (!bookingData || bookingData.length === 0) {
        return (
            <Box mt={4}>
                <Alert severity="info">No repair history found for this product yet.</Alert>
            </Box>
        );
    }

    return (
        <Container sx={{ mt: 4, mb: 6 }}>
            <Typography variant="h4" color="primary" gutterBottom>
                Repair History
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Below are the details of all repair services associated with Product ID: <strong>{productId}</strong>
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={3}>
                {bookingData.map((booking) => (
                    <Grid item xs={12} md={12} key={booking.id}>
                        <Card elevation={3} sx={{ borderRadius: 3, p: 1 }}>
                            <CardContent>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    {booking.RepairType} Repair at {booking.serviceCenter}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    Booking ID: {booking.id}
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography><strong>Booked On:</strong> {booking.timestamp?.toDate().toLocaleString()}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography><strong>Repair Date:</strong> {booking.Date}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography><strong>Appliance Type:</strong> {booking.AppliType}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography><strong>Model:</strong> {booking.Model}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography><strong>Issue Description:</strong> {booking.Description}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default RepairHistoryPage;