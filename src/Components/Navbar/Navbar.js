import React from 'react'
import { AppBar, Typography, Toolbar, Button, Box } from '@mui/material';
import {useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/')
    }
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TODO App
                    </Typography>
                    <Button color="inherit" onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar