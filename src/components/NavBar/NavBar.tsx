import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText, Divider, Hidden, Button, ListItemButton, styled } from '@mui/material';
import { Link as ScrollLink, scroller } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
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

    const scrollToSection = (sectionId: string) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -50
        });
    };

    const ForkButton = styled('a')({
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        backgroundColor: '#333',
        padding: '6px 12px',
        borderRadius: '4px',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '24px',
        '&:hover': {
            width: '140px',
            backgroundColor: '#555',
        },
        '& .fork-text': {
            display: 'none',
            opacity: 0,
            transition: 'opacity 0.3s, margin-left 0.3s ease',
            marginLeft: '0px',
        },
        '&:hover .fork-text': {
            display: 'inline',
            opacity: 1,
            marginLeft: '8px',
        },
    });

    return (
        <AppBar position="fixed" className="navbar"
            sx={{
                boxShadow: 'none',
                background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                transition: 'background-color 0.3s ease',
                paddingBottom: '5px',
            }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Isuru Edirisinghe
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
                    <Button color="inherit" component={ScrollLinkWrapper} onClick={() => scrollToSection('home')} to="home" >
                        Home
                    </Button>
                    <Button color="inherit" component={ScrollLinkWrapper} onClick={() => scrollToSection('about')} to="about">
                        About
                    </Button>
                    <Button color="inherit" component={ScrollLinkWrapper} onClick={() => scrollToSection('experience')} to="experience">
                        Experience
                    </Button>
                    <Button color="inherit" component={ScrollLinkWrapper} onClick={() => scrollToSection('contact')} to="contact">
                        Contact
                    </Button>
                    <ForkButton
                        href="https://github.com/isuru117/portfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon />
                        <span className="fork-text">Fork on GitHub</span>
                    </ForkButton>
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
                        <ListItemButton component={ScrollLinkWrapper} to="home" smooth duration={500} onClick={toggleDrawer(false)}>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                        <ListItemButton component={ScrollLinkWrapper} to="about" smooth duration={500} onClick={toggleDrawer(false)}>
                            <ListItemText primary="About" />
                        </ListItemButton>
                        <ListItemButton component={ScrollLinkWrapper} to="experience" smooth duration={500} onClick={toggleDrawer(false)}>
                            <ListItemText primary="Experience" />
                        </ListItemButton>
                        <ListItemButton component={ScrollLinkWrapper} to="contact" smooth duration={500} onClick={toggleDrawer(false)}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </List>
                    <Divider />
                </div>
            </Drawer>
        </AppBar >
    );
};

export default NavBar;
