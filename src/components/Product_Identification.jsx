import {Box, Typography} from "@mui/material";

const ProductInfo = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                maxWidth: "400px",
                margin: "2rem auto",
            }}
        >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Product Identification
            </Typography>
            <Typography><strong>Model:</strong> EK-2025</Typography>
            <Typography><strong>Facility:</strong> Factory A</Typography>
            <Typography><strong>Location:</strong> New York, USA</Typography>
            <Typography><strong>Manufactured Date:</strong> March 2025</Typography>
            <Typography><strong>Weight:</strong> 1.2 kg</Typography>
        </Box>
    );
};

export default ProductInfo;