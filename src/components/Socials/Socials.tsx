// src/components/Socials.tsx
import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';

const socials = [
    { name: 'LinkedIn', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/your-profile' },
    { name: 'GitHub', icon: <GitHub />, link: 'https://github.com/your-profile' },
    { name: 'Twitter', icon: <Twitter />, link: 'https://twitter.com/your-profile' },
];

const Socials: React.FC = () => {
    return (
        <Container id="socials">
            <Typography variant="h2" className="section-heading" gutterBottom>
                Socials
            </Typography>
            <List>
                {socials.map((social, index) => (
                    <ListItem button component="a" href={social.link} key={index}>
                        <ListItemIcon>{social.icon}</ListItemIcon>
                        <ListItemText primary={social.name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Socials;
