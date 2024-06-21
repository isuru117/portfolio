import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import myImage from '../../assets/images/isuru.png';
import backgroundImage from '../../assets/images/bridge.jpg';

const Introduction: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setShowArrow(false);
            } else {
                setShowArrow(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box 
            sx={{ 
                position: 'relative', 
                minHeight: '100vh', 
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <Box 
                sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    bottom: 0, 
                    left: 0, 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
                }} 
            />
            <Container 
                sx={{ 
                    position: 'relative', 
                    display: 'flex', 
                    flexDirection: isMobile ? 'column' : 'row', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    minHeight: '100vh', 
                    color: 'white', 
                    padding: 2 
                }}
            >
                <Box 
                    sx={{ 
                        flex: 1, 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        order: isMobile ? 0 : 1, 
                        padding: 1 
                    }}
                >
                    <img src={myImage} alt="Introduction" style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
                <Box 
                    sx={{ 
                        flex: 1, 
                        padding: 1, 
                        order: isMobile ? 1 : 0 
                    }}
                >
                    <Typography variant="h4" component="h1" sx={{ textAlign: 'left', marginBottom: 2 }}>
                        Hello! My name is Isuru Edirisinghe
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'left' }}>
                        I am an experienced IT developer with a passion for creating innovative solutions in the field of technology.
                        With a strong background in software development and project management, I have successfully led and contributed
                        to various projects, ranging from mobile connectivity to real-time data logging and cloud infrastructure deployment.
                        My expertise lies in utilizing modern technologies to drive efficiency and enhance user experiences.
                    </Typography>
                </Box>
            </Container>
            {showArrow && (
                <Box 
                    sx={{ 
                        position: 'absolute', 
                        bottom: 16, 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        animation: 'blink 1.5s infinite' 
                    }}
                >
                    <KeyboardArrowDownIcon sx={{ fontSize: 48, color: 'white' }} />
                </Box>
            )}
            <style>
                {`
                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                `}
            </style>
        </Box>
    );
};

export default Introduction;
