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
            name: 'Colombo Tech Repairs',
            address: '45 Galle Road, Colombo 03',
            phone: '011-2345678',
            rating: 5,
        },
        {
            name: 'Kandy Gadget Fix',
            address: '12 Temple Street, Kandy',
            phone: '081-2233445',
            rating: 4,
        },
        {
            name: 'Jaffna Smart Services',
            address: '88 Main Street, Jaffna Town',
            phone: '021-4567890',
            rating: 4,
        },
        {
            name: 'Matara Mobile Repairs',
            address: '10 Beach Road, Matara',
            phone: '041-3344556',
            rating: 3,
        },
        {
            name: 'Galle Tech Zone',
            address: '27 Lighthouse Street, Galle Fort',
            phone: '091-2233445',
            rating: 5,
        },
        {
            name: 'Kurunegala Repair Hub',
            address: '76 Town Hall Road, Kurunegala',
            phone: '037-2223344',
            rating: 4,
        },
        {
            name: 'Anuradhapura Gadget Care',
            address: '20 Mihindu Mawatha, Anuradhapura',
            phone: '025-3456789',
            rating: 3,
        },
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