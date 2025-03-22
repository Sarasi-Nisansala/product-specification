import { Grid, Typography, Box } from "@mui/material";
import logo512 from "../asserts/logo512.png";

const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Typography variant="h2" fontWeight="bold" color="black" gutterBottom>
                Electric Kettle
            </Typography>
            <img src={logo512} alt="logo" style={{ width: "150px", height: "150px" }} />
        </Box>
    );
};

export default Header;
