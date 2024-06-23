import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { LinkedIn, GitHub, Twitter, Mail } from '@mui/icons-material';

const Footer: React.FC = () => {
    const socials = [
        { name: 'LinkedIn', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/isuru117' },
        { name: 'GitHub', icon: <GitHub />, link: 'https://github.com/isuru117' },
        { name: 'Twitter', icon: <Twitter />, link: 'https://twitter.com/isuru117' },
        { name: 'Mail', icon: <Mail />, link: 'mailto:isuruedirisinghe80@gmail.com' },
    ];

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'black',
                color: 'white',
                padding: '20px 0',
                marginTop: 'auto',
                textAlign: 'center'
            }}
        >
            <Container>
                <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                    Connect with me:
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: '10px' }}>
                    {socials.map((social, index) => (
                        <Link
                            key={index}
                            href={social.link}
                            sx={{
                                color: 'white',
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: '#FFD700'
                                }
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {React.cloneElement(social.icon, { fontSize: 'large' })}
                        </Link>
                    ))}
                </Box>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Isuru Edirisinghe. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
