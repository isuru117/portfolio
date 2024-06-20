import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import myImage from '../../assets/images/isuru.jpg';

const Introduction: React.FC = () => {
    return (
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: 1, padding: 4 }}>
                <Typography variant="h4" component="h1" sx={{ textAlign: 'left', marginBottom: 2 }}>
                    Welcome to My Portfolio
                </Typography>
                <Typography variant="body1" component="p" sx={{ textAlign: 'left' }}>
                    I am an experienced IT developer with a passion for creating innovative solutions in the field of technology.
                    With a strong background in software development and project management, I have successfully led and contributed
                    to various projects, ranging from mobile connectivity to real-time data logging and cloud infrastructure deployment.
                    My expertise lies in utilizing modern technologies to drive efficiency and enhance user experiences. Explore my
                    portfolio to learn more about my journey and the impactful projects I've been a part of.
                </Typography>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={myImage} alt="Introduction" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
        </Container>
    );
};

export default Introduction;
