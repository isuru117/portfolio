import React from 'react';
import { Container, Typography } from '@mui/material';

const Introduction: React.FC = () => {
    return (
        <Container id="introduction">
            <Typography variant="h2" gutterBottom>
                Welcome to My Bio
            </Typography>
            <Typography variant="body1">
                Hello! I'm [Your Name], a [Your Profession]. Welcome to my personal bio website where you can learn more about my work and connect with me.
            </Typography>
        </Container>
    );
};

export default Introduction;
