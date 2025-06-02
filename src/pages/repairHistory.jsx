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
} from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // adjust path as needed

const RepairHistoryPage = () => {
    const { productId } = useParams();
    const [bookingData, setBookingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooking = async () => {
            setLoading(true);
            try {
                const docRef = doc(db, "bookings", productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setBookingData(docSnap.data());
                } else {
                    setBookingData(null);
                }
            } catch (err) {
                console.error("Failed to fetch booking:", err);
                setError("Failed to load booking history.");
            } finally {
                setLoading(false);
            }
        };

        fetchBooking();
    }, [productId]);

    if (loading) return <Box mt={4} textAlign="center"><CircularProgress /></Box>;

    if (error) return <Box mt={4}><Alert severity="error">{error}</Alert></Box>;

    if (!bookingData) return <Box mt={4}><Alert severity="info">No repair history found for this product.</Alert></Box>;

    return (
        <Box p={3}>
            <Typography variant="h5" gutterBottom>Repair History</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {bookingData.serviceCenter}
                            </Typography>
                            <Typography><strong>Address:</strong> {bookingData.address}</Typography>
                            <Typography><strong>Phone:</strong> {bookingData.phone}</Typography>
                            <Typography><strong>User:</strong> {bookingData.userName}</Typography>
                            <Typography><strong>User Phone:</strong> {bookingData.userPhone}</Typography>
                            <Typography><strong>Preferred Date:</strong> {bookingData.preferredDate}</Typography>
                            <Typography><strong>Rating:</strong> {bookingData.rating}</Typography>
                            <Typography variant="body2" color="text.secondary" mt={2}>
                                <em>Booked on: {bookingData.timestamp?.toDate().toLocaleString()}</em>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RepairHistoryPage;