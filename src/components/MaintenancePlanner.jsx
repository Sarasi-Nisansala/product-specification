import React, { useState } from 'react';
import {
    Container, Grid, Paper, Typography, TextField, MenuItem,
    Button, Box, Divider, Chip, Alert, Stack
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { differenceInYears, addYears, format } from 'date-fns';

const COMPONENTS = {
    heating: { name: "Heating Element", lifespan: 4.0 },
    thermostat: { name: "Thermostat", lifespan: 4.4 },
    cord: { name: "Power Cord", lifespan: 4.5 },
    contacts: { name: "Electrical Contacts", lifespan: 4.7 },
    fuse: { name: "Thermal Fuse", lifespan: 5.0 },
    control: { name: "Temperature Control", lifespan: 5.5 },
    body: { name: "Body/Lid/Handle", lifespan: 6.0 }
};

const BASE_LIFESPAN = 4.0;
const MAX_LIFESPAN = 7.0;

export default function MaintenancePlanner() {
    const [purchaseDate, setPurchaseDate] = useState(new Date('2021-01-15'));
    const [currentDate, setCurrentDate] = useState(new Date());
    const [repairType, setRepairType] = useState('');
    const [extended, setExtended] = useState(null);

    const calculate = () => {
        if (!(purchaseDate instanceof Date) || !(currentDate instanceof Date)) return;

        const age = (currentDate - purchaseDate) / (1000 * 60 * 60 * 24 * 365.25);
        let extendedLifespan = BASE_LIFESPAN;

        if (repairType && COMPONENTS[repairType]) {
            extendedLifespan = COMPONENTS[repairType].lifespan;
        }

        const extension = Math.max(0, extendedLifespan - BASE_LIFESPAN);

        setExtended({
            currentAge: parseFloat(age.toFixed(2)),
            base: BASE_LIFESPAN,
            extended: extendedLifespan,
            extension
        });
    };

    const downloadReport = () => {
        if (!extended) return;

        let content = `Electric Kettle Maintenance Report\n`;
        content += `===================================\n\n`;
        content += `Purchase Date: ${format(purchaseDate, 'yyyy-MM-dd')}\n`;
        content += `Current Date: ${format(currentDate, 'yyyy-MM-dd')}\n`;
        content += `Current Age: ${extended.currentAge} years\n`;
        content += `Base Lifespan: ${extended.base} years\n`;
        content += `Extended Lifespan: ${extended.extended} years\n`;
        content += `Lifetime Extension: +${extended.extension} years\n\n`;

        content += `Maintenance Schedule\n`;
        content += `====================\n`;

        for (const [key, comp] of Object.entries(COMPONENTS)) {
            const date = addYears(purchaseDate, comp.lifespan);
            content += `- ${comp.name}: ${format(date, 'MMM dd, yyyy')}\n`;
        }

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'kettle_maintenance_report.txt';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Container maxWidth="lg">
                <Box mt={4} mb={2}>
                    <Typography variant="h4" fontWeight="bold">Kettle Maintenance Planner</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Optimize your kettle's lifespan with planned maintenance
                    </Typography>
                </Box>

                <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                    <Grid container spacing={3}>
                        {/* Input Section */}
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>Basic Info</Typography>
                            <DatePicker
                                label="Purchase Date"
                                value={purchaseDate}
                                onChange={(date) => date && setPurchaseDate(date)}
                                slotProps={{ textField: { fullWidth: true } }}
                            />
                            <Box mt={2}>
                                <DatePicker
                                    label="Current Date"
                                    value={currentDate}
                                    onChange={(date) => date && setCurrentDate(date)}
                                    slotProps={{ textField: { fullWidth: true } }}
                                />
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    select
                                    label="Select Repair"
                                    fullWidth
                                    value={repairType}
                                    onChange={(e) => setRepairType(e.target.value)}
                                >
                                    <MenuItem value="">-- Select --</MenuItem>
                                    {Object.entries(COMPONENTS).map(([key, val]) => (
                                        <MenuItem key={key} value={key}>{val.name}</MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box mt={3}>
                                <Button fullWidth variant="contained" onClick={calculate}>Calculate</Button>
                            </Box>
                            {extended && (
                                <Box mt={2}>
                                    <Button fullWidth variant="outlined" onClick={downloadReport}>
                                        Download Report
                                    </Button>
                                </Box>
                            )}
                        </Grid>

                        {/* Result Section */}
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>Results</Typography>
                            {extended && (
                                <>
                                    <Alert severity="info" sx={{ mb: 2 }}>
                                        <strong>Current Age:</strong> {extended.currentAge} years |{" "}
                                        <strong>Base Lifespan:</strong> {extended.base} years |{" "}
                                        <strong>Extended:</strong> {extended.extended} years |{" "}
                                        <strong>Extension:</strong> +{extended.extension} years
                                    </Alert>

                                    {/* Timeline Bar */}
                                    <Box>
                                        <Typography gutterBottom>Lifespan Timeline</Typography>
                                        <Box position="relative" height={30} borderRadius={2} bgcolor="#e0e7ff">
                                            <Box
                                                position="absolute"
                                                left="0"
                                                height="100%"
                                                bgcolor="#4CAF50"
                                                width={`${(BASE_LIFESPAN / MAX_LIFESPAN) * 100}%`}
                                                borderRadius="16px 0 0 16px"
                                            />
                                            <Box
                                                position="absolute"
                                                left={`${(BASE_LIFESPAN / MAX_LIFESPAN) * 100}%`}
                                                height="100%"
                                                bgcolor="#FFC107"
                                                width={`${((extended.extended - BASE_LIFESPAN) / MAX_LIFESPAN) * 100}%`}
                                                borderRadius="0 16px 16px 0"
                                            />
                                            <Box
                                                position="absolute"
                                                left={`${(extended.currentAge / MAX_LIFESPAN) * 100}%`}
                                                height="100%"
                                                width="2px"
                                                bgcolor="#E91E63"
                                            />
                                        </Box>
                                        <Box display="flex" justifyContent="space-between" mt={1}>
                                            {Array.from({ length: 8 }, (_, i) => (
                                                <Typography key={i} variant="caption">{i} yr</Typography>
                                            ))}
                                        </Box>
                                        {/* Legend */}
                                        <Stack direction="row" spacing={2} mt={2} alignItems="center" flexWrap="wrap">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={20} height={20} borderRadius={1} bgcolor="#4CAF50" />
                                                <Typography variant="body2">Base Lifespan</Typography>
                                            </Box>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={20} height={20} borderRadius={1} bgcolor="#FFC107" />
                                                <Typography variant="body2">Extended Lifespan</Typography>
                                            </Box>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={4} height={20} bgcolor="#E91E63" />
                                                <Typography variant="body2">Current Age</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>

                                    {/* Schedule */}
                                    <Divider sx={{ my: 3 }} />
                                    <Typography variant="subtitle1" gutterBottom>Maintenance Schedule</Typography>
                                    <Grid container spacing={2}>
                                        {Object.entries(COMPONENTS).map(([key, val]) => {
                                            const date = addYears(purchaseDate, val.lifespan);
                                            return (
                                                <Grid item xs={12} sm={6} md={4} key={key}>
                                                    <Paper variant="outlined" sx={{ p: 2 }}>
                                                        <Typography fontWeight="bold" gutterBottom>{val.name}</Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Recommended at {val.lifespan} years
                                                        </Typography>
                                                        <Chip
                                                            label={format(date, 'MMM dd, yyyy')}
                                                            color="primary"
                                                            variant="outlined"
                                                            size="small"
                                                            sx={{ mt: 1 }}
                                                        />
                                                    </Paper>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </LocalizationProvider>
    );
}