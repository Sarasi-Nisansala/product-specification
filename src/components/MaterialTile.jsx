import {Box, Typography} from "@mui/material";

const MaterialTile = ({title, image}) => {
    return (
        <Box
            sx={{
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                maxWidth: "300px",
                textAlign: "center",
            }}
        >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                {title}
            </Typography>
            <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
        </Box>
    );
}

export default MaterialTile;