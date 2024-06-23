import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    };

    return (
        <Container id="contact">
            <Typography variant="h2" className="section-heading" gutterBottom>
                Contact
            </Typography>
            <Typography variant="h5" component="h1" sx={{ textAlign: 'center', paddingTop: '30px' }}>
                Have a Question or a Project in Mind? Let's Chat!
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '30vh',
                    marginTop: '20px'
                }}
            >
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        size="small" // Reduce the size of the text fields
                    />
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="small" // Reduce the size of the text fields
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: "20px" }}>
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Contact;
