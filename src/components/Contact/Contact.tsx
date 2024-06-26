import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { submitContactForm } from '../../services/ApiService';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const submitted = await submitContactForm(name, email, message);

        if (submitted) {
            setName('');
            setEmail('');
        } else {
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <Container id="contact">
            <Typography variant="h2" className="section-heading" gutterBottom>
                Contact
            </Typography>
            <Typography variant="h5" component="h1" sx={{ textAlign: 'center', paddingTop: '30px', marginBottom: '80px' }}>
                Have a Question or a Project in Mind? Let's Chat!
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '30vh',
                    marginTop: '40px'
                }}
            >
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        size="small"
                        required
                    />
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="small"
                        required
                    />
                    <TextField
                        label="Message"
                        fullWidth
                        multiline
                        margin="normal"
                        value={message}
                        minRows={4}
                        onChange={(e) => setMessage(e.target.value)}
                        size="small"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }}>
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Contact;