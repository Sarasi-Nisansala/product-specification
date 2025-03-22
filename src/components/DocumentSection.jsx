import React, { useState } from 'react';
import {
    Box,
    Typography,
    Link,
    Modal,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Tooltip,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/CloudDownload'; // Import download icon

const DocumentSection = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const handleOpenModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const documentLinks = [
        {
            title: 'Installation guideline (wenama interface ekkt ynn one)',
            modalContent: (
                <div>
                    <Typography variant="body2">
                        <strong>Step 1:</strong> Unpack the device carefully.
                    </Typography>
                    <Typography variant="body2">
                        <strong>Step 2:</strong> Connect the power cord to the socket.
                    </Typography>
                    <Typography variant="body2">
                        <strong>Step 3:</strong> Turn on the device using the power button.
                    </Typography>
                    <Typography variant="body2">
                        <strong>Note:</strong> Ensure proper ventilation during installation.
                    </Typography>
                </div>
            ),
            downloadLink: '#installation-guideline',
        },
        {
            title: 'Product manual',
            modalContent: (
                <div>
                    <Typography variant="body2">
                        This manual provides detailed information about the product's features and usage.
                    </Typography>
                    <Typography variant="body2">
                        Refer to the troubleshooting section for common issues and solutions.
                    </Typography>
                    <Typography variant="body2">
                        For warranty information, please visit our website.
                    </Typography>
                </div>
            ),
            downloadLink: '#product-manual',
        },
        {
            title: 'Safety instructions',
            modalContent: (
                <div>
                    <Typography variant="body2">
                        <strong>Warning:</strong> Keep away from water.
                    </Typography>
                    <Typography variant="body2">
                        <strong>Caution:</strong> Do not disassemble the device.
                    </Typography>
                    <Typography variant="body2">
                        Use only approved accessories.
                    </Typography>
                </div>
            ),
            downloadLink: '#safety-instructions',
        },
        {
            title: 'Guideline for maintenance',
            modalContent: (
                <div>
                    <Typography variant="body2">
                        Clean the device with a soft, dry cloth.
                    </Typography>
                    <Typography variant="body2">
                        Check for loose connections regularly.
                    </Typography>
                    <Typography variant="body2">
                        Do not use harsh chemicals for cleaning.
                    </Typography>
                </div>
            ),
            downloadLink: '#maintenance-guideline',
        },
        {
            title: 'Guidelines for non-destructive disassembly',
            modalContent: (
                <div>
                    <Typography variant="body2">
                        Use a Phillips screwdriver to remove the back panel.
                    </Typography>
                    <Typography variant="body2">
                        Disconnect the internal cables carefully.
                    </Typography>
                    <Typography variant="body2">
                        Refer to the diagram for component locations.
                    </Typography>
                </div>
            ),
            downloadLink: '#disassembly-guideline',
        },
        {
            title: 'Instruction for Efficient energy use',
            modalContent: (
                <div>
                    <Typography variant="body2">
                        Turn off the device when not in use.
                    </Typography>
                    <Typography variant="body2">
                        Use the energy-saving mode.
                    </Typography>
                    <Typography variant="body2">
                        Adjust the brightness settings.
                    </Typography>
                </div>
            ),
            downloadLink: '#energy-use-instruction',
        },
    ];

    const youtubeVideoLink = 'https://www.youtube.com/watch?v=q5tnNVPqN10';
    const videoUnavailableMessage = 'Video unavailable - This video is private';
    const videoTitle = 'Samsonite Eco Spinner - A step further in our responsible journey';
    const videoDate = 'Apr 16, 2021';

    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '700px',
                margin: '2rem auto',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box sx={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
                <Typography variant="h6" gutterBottom>
                    Documents and Media
                </Typography>
            </Box>
            <Typography variant="subtitle1" gutterBottom>
                Parts Identification
            </Typography>

            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                }}
            >
                {/* Replace with your image URL */}
                <img
                    src="https://i.imgur.com/your_environmental_impacts_image.png"
                    alt="Environmental Impacts"
                    style={{ maxWidth: '100%' }}
                />
            </Box>
            <List>
                {documentLinks.map((doc, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => handleOpenModal(doc.title, doc.modalContent)}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    {doc.title}
                                </Link>
                            }
                            secondary={
                                <Tooltip title="Download">
                                    <IconButton href={doc.downloadLink} size="small">
                                        <DownloadIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                    </ListItem>
                ))}
            </List>

            <Box sx={{ padding: '1rem', borderBottom: '1px solid #e0e0e0', marginTop: '1rem' }}>
                <Typography variant="body2">
                    <Link href={youtubeVideoLink} target="_blank" rel="noopener noreferrer">
                        {youtubeVideoLink} (Add this video like this)
                    </Link>
                </Typography>

                <Box
                    sx={{
                        backgroundColor: '#e0e0e0',
                        padding: '1rem',
                        marginTop: '1rem',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="body2">{videoUnavailableMessage}</Typography>
                </Box>

                <Typography variant="subtitle1" marginTop={2}>
                    {videoTitle}
                </Typography>
                <Typography variant="body2">{videoDate}</Typography>

                <Button
                    variant="text"
                    startIcon={<PlayArrowIcon />}
                    sx={{ marginTop: '1rem' }}
                    onClick={() => window.open(youtubeVideoLink, '_blank')}
                >
                    Watch full video >
                </Button>
            </Box>

            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {modalTitle}
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalContent}
                    </Box>
                    <Button onClick={handleCloseModal} sx={{ marginTop: 2 }}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default DocumentSection;