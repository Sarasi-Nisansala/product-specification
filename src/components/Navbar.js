import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

function Navbar({ sections }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {sections.map((section) => (
                    <ListItem key={section.id} disablePadding>
                        <ListItemButton component={Link} to={section.id} smooth={true} duration={500}>
                            <ListItemText primary={section.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Product Details
                </Typography>
                {sections.map((section) => (
                    <Button key={section.id} color="inherit" component={Link} to={section.id} smooth={true} duration={500}>
                        {section.label}
                    </Button>
                ))}
            </Toolbar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {list('left')}
            </Drawer>
        </AppBar>
    );
}

export default Navbar;