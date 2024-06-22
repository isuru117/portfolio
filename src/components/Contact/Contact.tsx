import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    };

    return (
        <Container id="contact">
            <Typography variant="h2" className="section-heading"  gutterBottom>
                Contact
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default Contact;
