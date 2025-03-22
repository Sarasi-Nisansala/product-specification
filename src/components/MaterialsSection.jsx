import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardHeader } from "@mui/material";
import MaterialTile from "./MaterialTile"; // Assuming MaterialTile is in the same directory
import components from "../asserts/Components.png"; // Corrected import paths
import lidParts from "../asserts/Components.png";
import handleParts from "../asserts/handle parts.png";
import innerWires from "../asserts/innser wires.png";
import baseParts from "../asserts/base parts.png";
import powerCode from "../asserts/power code.png";
import heatingPlate from "../asserts/heating plate.png";
import housingBody from "../asserts/housing body.png";

const MaterialsSection = () => {
    const materials = [
        { title: "Components", image: components },
        { title: "Lid Parts", image: lidParts },
        { title: "Handle Parts", image: handleParts },
        { title: "Inner Wires, Controller & Switch", image: innerWires },
        { title: "Base Parts", image: baseParts },
        { title: "Power Cord, Kettle Bottom", image: powerCode },
        { title: "Heating Plate", image: heatingPlate },
        { title: "Housing Body", image: housingBody },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                maxWidth: "800px",
                margin: "2rem auto",
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom style={{ textAlign: 'left' }}>
                Products and Materials
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ textAlign: 'left' }}>
                Bill of Materials
            </Typography>
            <Grid container spacing={3}>
                {materials.map((material, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <Card elevation={3}>
                            <CardHeader title={
                                <Typography variant="h7" fontWeight="semibold" style={{textAlign: 'left'}}>
                                    {material.title}
                                </Typography>}
                            />
                            <CardContent>
                                <MaterialTile  image={material.image} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MaterialsSection;
