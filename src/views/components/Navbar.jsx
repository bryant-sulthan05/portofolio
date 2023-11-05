import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Navbar = () => {
    return (
        <AppBar sx={{
            background: '#292f36',
            color: '#fff',
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
                            fontFamily: 'Poppins',
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
                            fontFamily: 'Poppins',
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