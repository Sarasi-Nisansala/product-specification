import React from 'react';
import { Box, Typography, Card, CardContent, CardHeader } from "@mui/material";
import MaterialTile from "./MaterialTile";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import components from "../asserts/components.jpeg";
import lidParts from "../asserts/Lid parts.png";
import handleParts from "../asserts/handle parts.png";
import innerWires from "../asserts/innser wires.png";
import baseParts from "../asserts/base parts.png";
import powerCode from "../asserts/power code.png";
import heatingPlate from "../asserts/heating plate.png";
import housingBody from "../asserts/housing body.png";
import {navBarSections} from "../configs/SectionConfig";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1600 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1600, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const MaterialsSection = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#f8f8f8',
                    padding: "2rem",
                    borderRadius: "16px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    maxWidth: "1200px",
                    margin: "2rem auto",
                }}
                id='billMaterials'
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="left">
                    Products and Materials
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom textAlign="left">
                    Bill of Materials
                </Typography>

                <Carousel
                    responsive={responsive}
                    swipeable
                    draggable
                    showDots={true}
                    arrows
                    infinite
                    autoPlay={true}
                    keyBoardControl
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                >
                    {materials.map((material, index) => (
                        <Box key={index} px={1} my={4} mx={2}>
                            <Card elevation={3}>
                                <CardHeader
                                    title={
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {material.title}
                                        </Typography>
                                    }
                                />
                                <CardContent>
                                    <MaterialTile image={material.image} />
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </>
    );
};

export default MaterialsSection;