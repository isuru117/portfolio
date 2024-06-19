import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText, Divider, Hidden, ListItemButton, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';

const NavBar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Bio
                </Typography>
                {/* Hamburger Menu Icon for Mobile */}
                <Hidden mdUp>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                {/* Regular Navigation Links for Desktop */}
                <Hidden smDown>
                    <Button color="inherit" component={RouterLink} to="/">
                        Introduction
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/experience">
                        Experience
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/socials">
                        Socials
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/contact">
                        Contact
                    </Button>
                </Hidden>
            </Toolbar>
            {/* Drawer for Mobile */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                ModalProps={{ keepMounted: true }}
                className="drawer"
            >
                <div>
                    <List>
                        <ListItemButton component={RouterLink} to="/" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Introduction" />
                        </ListItemButton>
                        <ListItemButton component={RouterLink} to="/experience" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Experience" />
                        </ListItemButton>
                        <ListItemButton component={RouterLink} to="/socials" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Socials" />
                        </ListItemButton>
                        <ListItemButton component={RouterLink} to="/contact" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </List>
                    <Divider />
                </div>
            </Drawer>
        </AppBar>
    );
};

export default NavBar;