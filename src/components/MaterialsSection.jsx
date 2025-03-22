import MaterialTile from "./MaterialTile";
import {Box, Grid, Typography} from "@mui/material";
import componentImg1 from "../asserts/componrentsImg1.png"
import componentImg2 from "../asserts/componrentsImg2.png"
import componentImg3 from "../asserts/componrentsImg3.png"
import componentImg4 from "../asserts/componrentsImg4.png"

const MaterialsSection = () => {
    const materials = [
        { title: "Components", image: componentImg1 },
        { title: "Lid Parts", image: componentImg2 },
        { title: "Heating Element", image: componentImg3 },
        { title: "Handle Assembly", image: componentImg4 },
    ]
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                maxWidth: "800px",
                margin: "2rem auto",
            }}
        >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Products and Materials
            </Typography>
            <Typography variant="body1" color="gray" gutterBottom>
                Bill of Materials
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {materials.map((material, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <MaterialTile title={material.title} image={material.image} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MaterialsSection;