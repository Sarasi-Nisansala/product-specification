import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from "@mui/material";

const materialData = {
    rawMaterials: [
        { name: "Stainless steel", weight: 645 },
        { name: "Brass", weight: 24 },
        { name: "Copper", weight: 19 },
        { name: "Aluminium", weight: "--" },
        { name: "Tin", weight: "--" },
        { name: "Silver", weight: "--" },
        { name: "Polypropylene (PP)", weight: 419 },
        { name: "Polyvinyl chloride", weight: 57 },
        { name: "Nylon", weight: 36 },
        { name: "Polyoxymethylene (POM)", weight: "--" },
        { name: "Polycarbonate", weight: "--" },
        { name: "Acrylonitrile butadiene styrene", weight: "--" },
        { name: "High density polyethylene", weight: 1 },
        { name: "Silicone", weight: "--" }
    ],
    packaging: [
        { name: "Low density polyethylene", weight: 13 },
        { name: "Cardboard boxes", weight: 500 }
    ]
};

const MaterialCompositionTable = () => {
    return (
        <Box
            sx={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                maxWidth: "600px",
                margin: "2rem auto",
            }}
        >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Material Composition
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Weight (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Raw Materials Section */}
                        <TableRow>
                            <TableCell colSpan={2} sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                                Raw Materials
                            </TableCell>
                        </TableRow>
                        {materialData.rawMaterials.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.weight}</TableCell>
                            </TableRow>
                        ))}

                        {/* Packaging Section */}
                        <TableRow>
                            <TableCell colSpan={2} sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                                Packaging
                            </TableCell>
                        </TableRow>
                        {materialData.packaging.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.weight}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default MaterialCompositionTable;
