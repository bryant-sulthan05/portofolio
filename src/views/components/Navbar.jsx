import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Navbar = () => {
    return (
        <AppBar sx={{
            background: '#305973',
            color: '#EF7E56',
            boxShadow: '0 0 8px #000'
        }}>
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Bungee Inline',
                            fontWeight: 'bold',
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bryant Sulthan Nugroho
                    </Typography>
                    <Typography
                        variant="overline"
                        noWrap
                        component="a"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'center',
                            flexGrow: 1,
                            fontFamily: 'Bungee inline',
                            fontWeight: 'bold',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bryant Sulthan Nugroho
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar