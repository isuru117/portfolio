import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';

const socials = [
    { name: 'LinkedIn', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/isuru117' },
    { name: 'GitHub', icon: <GitHub />, link: 'https://github.com/isuru117/' },
    { name: 'Twitter', icon: <Twitter />, link: 'https://twitter.com/isuru117' },
];

const About: React.FC = () => {
    return (
        <Container id="about" sx={{ marginTop: 4 }}>
            <Typography
                variant="h2"
                className="section-heading"
                gutterBottom
                sx={{ textAlign: 'center', marginBottom: 4, color: 'primary.main' }}
            >
                Socials
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
                            borderRadius: '8px',
                            padding: '12px 24px',
                            transition: 'background-color 0.3s',
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            },
                        }}
                    >
                        <ListItemIcon sx={{ color: 'primary.main', minWidth: '40px' }}>
                            {social.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={social.name}
                            primaryTypographyProps={{ fontWeight: 'bold' }}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default About;
