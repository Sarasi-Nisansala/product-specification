import React from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
    const faqs = [
        {
            question: 'Can I throw my electric kettle in regular trash?',
            answer:
                'No, electric kettles should be recycled or donated instead of being thrown in regular trash due to their electronic components.',
        },
        {
            question: 'Where can I recycle my electric kettle?',
            answer:
                'You can recycle your electric kettle at local e-waste recycling centers or through manufacturer take-back programs.',
        },
        {
            question: 'What should I do if my kettle is still working?',
            answer:
                'If your kettle is functional, consider donating it to local charities or thrift stores that accept small appliances.',
        },
        {
            question: 'Are there hazardous materials in electric kettles?',
            answer:
                "Electric kettles generally do not contain hazardous materials; however, it's always good practice to check with your local recycling center for specific guidelines.",
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '600px',
                margin: '2rem auto',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="h6" gutterBottom>
                FAQ
            </Typography>
            {faqs.map((faq, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
                        <Typography variant="subtitle1">{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default FAQSection;