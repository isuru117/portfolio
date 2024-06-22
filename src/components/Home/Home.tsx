import React, { useState, useEffect } from 'react';
import { Box, Container, List, ListItem, ListItemIcon, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as ScrollLink, scroller } from 'react-scroll';
import myImage from '../../assets/images/isuru.png';
import backgroundImage from '../../assets/images/bridge.jpg';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';

const Home: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [showArrow, setShowArrow] = useState(true);

    const socials = [
        { name: 'LinkedIn', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/isuru117' },
        { name: 'GitHub', icon: <GitHub />, link: 'https://github.com/isuru117/' },
        { name: 'Twitter', icon: <Twitter />, link: 'https://twitter.com/isuru117' },
    ];

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

    const scrollToSection = (sectionId: string) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -50
        });
    };

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
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
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
                    <Box
                        component="img"
                        src={myImage}
                        alt="Introduction"
                        sx={{
                            width: { xs: '35vh', md: '40vh' },
                            height: { xs: '35vh', md: '40vh' },
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '5px solid transparent',
                            backgroundColor: 'rgba(253,250,114, 0.8)',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        padding: 1,
                        order: isMobile ? 1 : 0
                    }}
                >
                    <Typography variant="body1" component="p" sx={{ textAlign: 'left', marginBottom: 2 }}>
                        Hey there! My name is Isuru Edirisinghe
                    </Typography>
                    <Typography variant="h4" component="h1" sx={{ textAlign: 'left' }}>
                        I’m a Full Stack Software Engineer, specialized in development of web applications using React, .NET, Node.js & more
                    </Typography>
                    <List sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        {socials.map((social, index) => (
                            <ListItem
                                key={index}
                                component="a"
                                href={social.link}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: { xs: '60px', md: '80px' },
                                    height: { xs: '60px', md: '80px' },
                                    borderRadius: '8px',
                                    transition: 'background-color 0.3s, transform 0.3s',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        transform: 'scale(1.2)',
                                        backgroundColor: 'white',
                                        '& .MuiListItemIcon-root': {
                                            color: 'black',
                                        },
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: 'white',
                                        minWidth: 'auto',
                                        fontSize: { xs: '40px', md: '50px' },
                                    }}
                                >
                                    {React.cloneElement(social.icon, {
                                        style: { fontSize: 'inherit' },
                                    })}
                                </ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Container>
            {showArrow && (
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        cursor: 'pointer',
                        textAlign: 'center',
                    }}
                >
                    <ScrollLink onClick={() => scrollToSection('experience')} to="experience">
                        <Typography
                            sx={{
                                color: 'white',
                                marginBottom: 1
                            }}
                        >
                            More About Me
                        </Typography>

                        <KeyboardArrowDownIcon
                            sx={{
                                fontSize: 48,
                                color: 'white',
                                animation: 'blink 1.5s infinite',
                            }}
                        />
                    </ScrollLink>
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

export default Home;
