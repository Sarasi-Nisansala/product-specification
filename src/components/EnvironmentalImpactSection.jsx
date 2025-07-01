import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table
} from '@mui/material';
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const EnvironmentalImpactSection = () => {
    const resourceData = [
        { name: 'Raw materials', value: 12, color: '#F6C300' },
        { name: 'Manufacturing', value: 8, color: '#00194A' },
        { name: 'Transportation', value: 4, color: '#BFD7ED' },
        { name: 'Usage phase', value: 75, color: '#3BD6F1' },
        { name: 'End of life', value: 1, color: '#06358EFF' },
    ];

    const impactDataPie = [
        { name: 'Raw materials', value: 80, color: '#DD6E2E' },
        { name: 'Manufacturing', value: 12, color: '#F6C300' },
        { name: 'Transportation', value: 4, color: '#A0C980' },
        { name: 'Usage phase', value: 1, color: '#06358EFF' },
        { name: 'End of life', value: 3, color: '#6B4E16' },
    ];

    const renderCustomizedLabel = ({ percent }) => `${(percent * 100).toFixed(0)}%`;

    const impactData = {
        resourceConsumption: 'Moderate',
        emissionDetails: 'Air: Low, Water: Medium, Soil: Low',
        climateIndicators: 'Slight increase in global temperature',
        environmentalFootprint: 'Medium',
        carbonFootprint: {
            value: '100g',
            co2e: 'CO₂e',
            description: 'for 100g of this Product',
            rating: {
                value: 3,
                color: 'orange',
            },
        },
        ecoLabels: 'Eco Label A, Sustainability Score: 85, Planet Score: B',
    };

    const lifecycleImpactTable = [
        { short: 'ADP e. (ng Sb eq.)', full: 'Abiotic Depletion Potential (elemental abiotic resources)', value: '1200' },
        { short: 'ADP f. (GJ)', full: 'Abiotic Depletion Potential (fossil abiotic resources)', value: '4.7' },
        { short: 'AP (g SO2 eq.)', full: 'Acidification Potential', value: '2100' },
        { short: 'EP (g PO4 eq.)', full: 'Eutrophication Potential', value: '1480' },
        { short: 'FAETP (kg DCB eq.)', full: 'Freshwater Aquatic Ecotoxicity Potential', value: '255' },
        { short: 'GWP (kg CO2 eq.)', full: 'Global Warming Potential', value: '400' },
        { short: 'HTP (kg DCB eq.)', full: 'Human Toxicity Potential', value: '347' },
        { short: 'MAETP (t DCB eq.)', full: 'Marine Aquatic Ecotoxicity Potential', value: '760' },
        { short: 'ODP (mg R11 eq.)', full: 'Ozone Depletion Potential', value: '21.1' },
        { short: 'POCP (g C2H4 eq.)', full: 'Photochemical Ozone Creation Potential', value: '124' },
        { short: 'TETP (kg DCB eq.)', full: 'Terrestrial Ecotoxicity Potential', value: '10.6' },
        { short: 'PED (GJ)', full: 'Primary Energy Demand', value: '10.5' },
    ];

    const generateRatingStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                style={{ color: i < rating ? 'green' : 'lightgray', fontSize: '1.5em' }}
            >
                ★
            </span>
        ));
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: '#f8f8f8',
                padding: { xs: 2, sm: 4 },
                overflowX: 'hidden',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    maxWidth: '1200px',
                    margin: 'auto',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Environmental Impact (LCA)
                </Typography>

                <Box mb={4}>
                    <Typography variant="subtitle1" gutterBottom>
                        Resource consumption through Life cycle stages
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={resourceData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                innerRadius={60}
                                dataKey="value"
                            >
                                {resourceData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>

                <Box mb={4}>
                    <Typography variant="subtitle1" gutterBottom>
                        Environmental Impact through Life cycle stages
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={impactDataPie}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                innerRadius={60}
                                dataKey="value"
                            >
                                {impactDataPie.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>

                <List>
                    <ListItem disablePadding>
                        <ListItemText primary="Resource consumption" secondary={impactData.resourceConsumption} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="Emission to air, water, soil in life cycle stages" secondary={impactData.emissionDetails} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="Climate changes indicators" secondary={impactData.climateIndicators} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="Environmental footprint" secondary={impactData.environmentalFootprint} />
                    </ListItem>
                </List>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="h6">Carbon footprint</Typography>
                    <Box
                        sx={{
                            width: '200px',
                            height: '30px',
                            background: 'linear-gradient(to right, green, yellow, orange, red)',
                            margin: '1rem auto',
                            borderRadius: '5px',
                            position: 'relative',
                        }}
                    >
                        <Typography
                            sx={{
                                position: 'absolute',
                                left: '0.5rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            {impactData.carbonFootprint.value}
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {impactData.carbonFootprint.co2e}
                    </Typography>
                    <Typography variant="body2">{impactData.carbonFootprint.description}</Typography>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="h6">Eco label, Sustainability score, Planet score</Typography>
                    <Typography variant="body1">{impactData.ecoLabels}</Typography>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Box
                        sx={{
                            width: '100px',
                            height: '80px',
                            backgroundColor: 'lightgreen',
                            borderRadius: '10px',
                            margin: '1rem auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            CO₂
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        Climate Rating
                    </Typography>
                    <Box sx={{ mt: 1 }}>{generateRatingStars(impactData.carbonFootprint.rating.value)}</Box>
                </Box>

                {/* ✅ Lifespan Timeline Visualization */}
                <Box
                    sx={{
                        mt: 6,
                        p: 3,
                        borderRadius: '20px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Variation of environmental impacts with life span
                    </Typography>

                    <Box sx={{ position: 'relative', mt: 6, height: 80, width: '100%' }}>
                        {/* Gradient Color Bar */}
                        <Box
                            sx={{
                                width: '100%',
                                height: '16px',
                                borderRadius: '10px',
                                background: 'linear-gradient(to right, red, yellow, green)',
                                mx: 'auto',
                            }}
                        />

                        {/* Markers with tooltips */}
                        {[
                            {
                                year: '3 years',
                                position: '10%',
                                info: (
                                    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 3, maxWidth: 300 }}>
                                        <Typography>Depletion of elements</Typography>
                                        <Typography>Human toxicity</Typography>
                                        <Typography>Terrestrial ecotoxicity</Typography>
                                        <Typography color="error">Increase in 4–6%</Typography>
                                    </Box>
                                ),
                            },
                            {
                                year: '4.4 years',
                                position: '45%',
                                info: (
                                    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 3, maxWidth: 300 }}>
                                        <Typography>Average life time</Typography>
                                    </Box>
                                ),
                            },
                            {
                                year: '7 years',
                                position: '80%',
                                info: (
                                    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 3, maxWidth: 300 }}>
                                        <Typography>Depletion of elements</Typography>
                                        <Typography>Human toxicity</Typography>
                                        <Typography>Terrestrial ecotoxicity</Typography>
                                        <Typography color="primary">Decrease in 3–5%</Typography>
                                        <Typography>Global warming and primary energy demand</Typography>
                                        <Typography color="primary">Decrease in 0.5%</Typography>
                                    </Box>
                                ),
                            },
                        ].map((point, index) => (
                            <Box key={index} sx={{ position: 'absolute', left: point.position, top: '0', transform: 'translateX(-50%)' }}>
                                <Box
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        bgcolor: '#ccc',
                                        borderRadius: '50%',
                                        border: '2px solid #444',
                                        cursor: 'pointer',
                                        '&:hover > div': {
                                            display: 'block',
                                        },
                                    }}
                                >
                                    {/* Tooltip */}
                                    <Box
                                        sx={{
                                            display: 'none',
                                            position: 'absolute',
                                            top: '-160px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            zIndex: 10,
                                        }}
                                    >
                                        {point.info}
                                    </Box>
                                </Box>

                                {/* Year Label */}
                                <Typography variant="body2" mt={1} textAlign="center">
                                    {point.year}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box
                    sx={{
                        mt: 6,
                        p: 3,
                        borderRadius: '20px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Life Cycle Environmental Impacts (Average Lifetime: 4.4 years)
                    </Typography>

                    <Box mt={4}>
                        <Typography variant="h6" gutterBottom>
                            Environmental Impacts Table
                        </Typography>
                        <TableContainer component={Paper} sx={{ mb: 4 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Impact Category</strong></TableCell>
                                        <TableCell><strong>Full Name</strong></TableCell>
                                        <TableCell><strong>Impact</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {lifecycleImpactTable.map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell>{row.short}</TableCell>
                                            <TableCell>{row.full}</TableCell>
                                            <TableCell>{row.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default EnvironmentalImpactSection;