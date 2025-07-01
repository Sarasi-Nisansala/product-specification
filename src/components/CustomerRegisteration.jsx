import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Backdrop, CircularProgress
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useParams } from 'react-router-dom';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function CustomerRegistration({productId}) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        serialNo: '',
        country: '',
        district: '',
        purchaseDate: new Date()
    });
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        const data = {
            ...form,
            productId,
            purchaseDate: form.purchaseDate.toISOString()
        };
        await addDoc(collection(db, 'registrations'), data);
        setForm({ name: '', email: '', serialNo: '', country: '', district: '', purchaseDate: new Date() });
        fetchHistory();
    };

    const fetchHistory = async () => {
        const q = query(collection(db, 'registrations'), where('productId', '==', productId));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => doc.data());
        setHistory(data);
        setLoading(false);
    };

    useEffect(() => {
        if (productId) {
            setLoading(true);
            fetchHistory();
        }
    }, [productId]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Container maxWidth="md">
                {/* Loading Screen */}
                <Backdrop open={loading} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <CircularProgress color="inherit" />
                </Backdrop>

                <Box mt={4}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Customer Registration Portal
                    </Typography>

                    <Paper elevation={4} sx={{ borderRadius: 4, p: 4, mb: 4 }}>
                        <Typography variant="h6" gutterBottom>Customer Registration</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Full Name" fullWidth value={form.name} onChange={e => handleChange('name', e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Email" fullWidth value={form.email} onChange={e => handleChange('email', e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Product Serial No" fullWidth value={form.serialNo} onChange={e => handleChange('serialNo', e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Country" fullWidth value={form.country} onChange={e => handleChange('country', e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="District" fullWidth value={form.district} onChange={e => handleChange('district', e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DatePicker
                                    label="Date of Purchase"
                                    value={form.purchaseDate}
                                    onChange={(newValue) => newValue && handleChange('purchaseDate', newValue)}
                                    slotProps={{ textField: { fullWidth: true } }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={handleSubmit}>Register</Button>
                            </Grid>
                        </Grid>
                    </Paper>

                    {history.length > 0 && (
                        <>
                            <Typography variant="h6" gutterBottom>Purchase History</Typography>
                            <TableContainer component={Paper} elevation={2} sx={{ mb: 5 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#1976d2' }}>
                                            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Buyer’s Name</TableCell>
                                            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Email</TableCell>
                                            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Date of Purchase</TableCell>
                                            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Country</TableCell>
                                            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>District</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {history.map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell>{row.name}</TableCell>
                                                <TableCell>{row.email}</TableCell>
                                                <TableCell>{new Date(row.purchaseDate).toLocaleDateString()}</TableCell>
                                                <TableCell>{row.country}</TableCell>
                                                <TableCell>{row.district}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    )}
                </Box>
            </Container>
        </LocalizationProvider>
    );

}
