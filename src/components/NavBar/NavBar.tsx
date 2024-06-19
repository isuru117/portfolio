import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText, Divider, Hidden, Button, ListItemButton } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
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

    const ScrollLinkWrapper = (props: any) => {
        return <ScrollLink {...props} />;
    };

    return (
        <AppBar position="sticky" className="navbar">
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
                    <Button color="inherit" component={ScrollLinkWrapper} to="introduction" smooth duration={500}>
                        Introduction
                    </Button>
                    <Button color="inherit" component={ScrollLinkWrapper} to="experience" smooth duration={500}>
                        Experience
                    </Button>
                    <Button color="inherit" component={ScrollLinkWrapper} to="socials" smooth duration={500}>
                        Socials
                    </Button>
                    <Button color="inherit" component={ScrollLinkWrapper} to="contact" smooth duration={500}>
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
                        <ListItemButton component={ScrollLinkWrapper} to="introduction" smooth duration={500} onClick={toggleDrawer(false)}>
                            <ListItemText primary="Introduction" />
                        </ListItemButton>
                        <ListItemButton component={ScrollLinkWrapper} to="experience" smooth duration={500} onClick={toggleDrawer(false)}>
                            <ListItemText primary="Experience" />
                        </ListItemButton>
                        <ListItemButton component={ScrollLinkWrapper} to="socials" smooth duration={500} onClick={toggleDrawer(false)}>
                            <ListItemText primary="Socials" />
                        </ListItemButton>
                        <ListItemButton component={ScrollLinkWrapper} to="contact" smooth duration={500} onClick={toggleDrawer(false)}>
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
