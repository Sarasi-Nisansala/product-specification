import React from 'react';
import {Grid, Container, Typography, Button} from '@mui/material';
import RepairCard from "../components/repair/shopCard";
import {useNavigate, useParams} from "react-router-dom";

const BookARepair = () => {
    const {productId} = useParams();
    const navigate = useNavigate();

    const handleHistoryClick = () => {
        navigate(`/repairHistory/${productId}`);
    };

    const data = [
        {
            name: 'Jeewantha Repairs',
            address: '123 Main St, Kandy District',
            phone: '077-1234567',
            rating: 4,
        },
        {
            name: 'Jeewantha Repairs',
            address: '123 Main St, Kandy District',
            phone: '077-1234567',
            rating: 4,
        },
        {
            name: 'Jeewantha Repairs',
            address: '123 Main St, Kandy District',
            phone: '077-1234567',
            rating: 4,
        },
        {
            name: 'Jeewantha Repairs',
            address: '123 Main St, Kandy District',
            phone: '077-1234567',
            rating: 4,
        },
        // Add 3–4 more objects for a full row
    ];

    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                <Grid item xs={6} display="flex" justifyContent="start" alignItems="center">
                    <Typography variant="h4" color="primary">
                        Book a Repair Service
                    </Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end" alignItems="center">
                    <Button onClick={handleHistoryClick} variant="outlined">
                        Show Repair History
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={2} mt={2}>
                {data.map((item, index) => (
                    <Grid item md={12} key={index}>
                        <RepairCard {...item} productId={productId} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BookARepair;