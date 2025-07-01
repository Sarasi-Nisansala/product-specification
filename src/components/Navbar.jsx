import React, { useState } from 'react';
import {
    AppBar, Toolbar, IconButton, Typography, Box, Drawer,
    List, ListItem, ListItemButton, ListItemText, Collapse, Menu, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useNavigate} from "react-router-dom";

function Navbar({ navBarSections }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [openSubmenus, setOpenSubmenus] = useState({});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleHover = (event, item) => {
        setAnchorEl(event.currentTarget);
        setHoveredItem(item);
    };

    const handleItemClick = (section, scrollId = null) => {
        if (scrollId) {
            navigate(section.route, { state: { scrollToId: scrollId } });
        } else {
            navigate(section.route);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
        setHoveredItem(null);
    };

    const handleToggleSubmenu = (id) => {
        setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (isMobile) toggleDrawer();
        }
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#fff', zIndex: 999, width: '100%' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                    ABC Electronics
                </Typography>

                {/* Hamburger Icon */}
                    <IconButton edge="end" onClick={toggleDrawer} color="primary">
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
            </Toolbar>

            {/* Drawer for Mobile */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={toggleDrawer}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: { width: 260 }
                }}
            >
                <List>
                    {navBarSections.map((section) => (
                        <Box key={section.id}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => section.subItems ? handleToggleSubmenu(section.id) : section?.route ? handleItemClick(section) : scrollToSection(section.id)}>
                                    <ListItemText primary={section.label} />
                                    {section.subItems && <ArrowDropDownIcon />}
                                </ListItemButton>
                            </ListItem>
                            {section.subItems && (
                                <Collapse in={openSubmenus[section.id]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding sx={{ pl: 3 }}>
                                        {section.subItems.map((sub) => (
                                            <ListItemButton key={sub.id} onClick={() => {
                                                if (section.id === "supplyChain") {
                                                    handleItemClick(sub);
                                                }
                                                else if (sub?.route && section?.route) {
                                                    handleItemClick(section, sub.id); // Parent route, subsection id
                                                }
                                                else {
                                                    scrollToSection(sub.id);
                                                }
                                            }}>
                                                <ListItemText primary={sub.label} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </Box>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
}

export default Navbar;