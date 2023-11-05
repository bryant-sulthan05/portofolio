import React from 'react'
// mui.component
import { Avatar, Typography, Button } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
// images
import profile from '../img/profile.jpg';
// icons
import { BsDownload } from 'react-icons/bs'

const Home = () => {
    return (
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item md={12} sx={{ marginTop: { xs: '6.5rem', md: '8rem' }, marginBottom: '3rem' }}>
                <Box>
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item xs={12} md={3} sx={{
                            display: 'grid'
                        }}>
                            <div className="content" style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Avatar sx={{ width: 200, height: 200, boxShadow: '0 0 5px #001220' }} alt='profile' src={profile}></Avatar>
                            </div>
                            <div className="content" style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Typography variant='h6' gutterBottom noWrap sx={{
                                    marginTop: '2vh',
                                    fontFamily: 'Poppins',
                                    fontWeight: 'bold'
                                }}>
                                    Bryant Sulthan Nugroho
                                </Typography>
                            </div>
                            <div className="content" style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Typography variant='subtitle' gutterBottom noWrap sx={{
                                    marginTop: '5px',
                                    color: '#292f36'
                                }}>
                                    Programmer <strong>|</strong> Backend Developer
                                </Typography>
                            </div>
                            <div className="cv" style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Typography variant='subtitle' gutterBottom noWrap sx={{
                                    marginTop: '1.5rem',
                                    display: { xs: 'none', md: 'flex' }
                                }}>
                                    <Button href="CV_Bryant.pdf" download sx={{
                                        background: '#292f36',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            background: '#fff',
                                            color: '#292f36',
                                            border: '1px solid #292f36'
                                        }
                                    }}><BsDownload></BsDownload>&nbsp;Download</Button>
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{
                            display: { xs: 'none', md: 'grid' }
                        }}>
                            <div className="content">
                                <Typography variant='h5' gutterBottom noWrap sx={{
                                    fontWeight: 'bold',
                                    color: '#292f36',
                                    fontFamily: 'Poppins'
                                }}>
                                    About Me
                                </Typography>
                                <Typography variant="h1" color="initial"
                                    sx={{
                                        mb: '1.5rem',
                                        borderBottom: '.3rem solid #fff',
                                        borderRadius: '5rem',
                                        width: '18%',
                                    }}>
                                </Typography>
                                <Typography variant='body1' gutterBottom sx={{
                                    fontFamily: 'Poppins'
                                }}>
                                    Hello, my name is Bryant Sulthan Nugroho. I am from Cileungsi, Bogor. I'm a student from Gunadarma University, Depok. I'm interest in digital things like backend developer, and robotics.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={9} sx={{
                            display: { xs: 'grid', md: 'none' },
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant="h1" color="initial"
                                    sx={{
                                        mb: '1.5rem',
                                        borderBottom: '.3rem solid #fff',
                                        borderRadius: '5rem',
                                        width: '50%',
                                    }}>
                                </Typography>
                            </div>
                            <div className="content">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Typography variant='h5' gutterBottom noWrap sx={{
                                        fontWeight: 'bold',
                                        color: '#292f36',
                                        fontFamily: 'Poppins'
                                    }}>
                                        About Me
                                    </Typography>
                                </div>
                                <Typography variant='body1' gutterBottom sx={{
                                    fontFamily: 'Poppins',
                                    textAlign: 'center',
                                }}>
                                    Hello, my name is Bryant Sulthan Nugroho. I am from Cileungsi, Bogor. I'm a student from Gunadarma University, Depok. I'm interest in digital things like backend developer, and robotics.
                                </Typography>
                                <div className="cv" style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Typography variant='subtitle' gutterBottom noWrap sx={{
                                        marginTop: '1.5rem',
                                        display: { xs: 'flex', md: 'none' }
                                    }}>
                                        <Button href="CV_Bryant.pdf" download sx={{
                                            background: '#292f36',
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                background: '#fff',
                                                color: '#292f36',
                                                border: '1px solid #292f36'
                                            }
                                        }}><BsDownload></BsDownload>&nbsp;Download</Button>
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home