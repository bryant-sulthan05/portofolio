import React from 'react'
// mui.component
import { Avatar, Typography, Button } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
// images
import profile from '../img/profile.jpg';
// icons
import { BsDownload } from 'react-icons/bs'

const Home = () => {
    return (
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item md={12} sx={{ marginTop: { xs: '6.5rem', md: '8rem' }, marginBottom: '3rem' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item size={{ xs: 12, md: 3 }} sx={{
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
                                    fontFamily: 'Bungee Inline',
                                    fontWeight: 'bold',
                                    color: '#305973'
                                }}>
                                    Bryant Sulthan Nugroho
                                </Typography>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '6px'
                            }}>
                                <hr style={{
                                    border: 'none',
                                    height: '4px',
                                    width: '50%',
                                    backgroundColor: '#EF7E56'
                                }} />
                            </div>
                            <div className="content" style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Typography variant='subtitle' gutterBottom noWrap sx={{
                                    marginTop: '5px',
                                    color: '#305973',
                                    fontFamily: 'Numans'
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
                                        background: '#EF7E56',
                                        color: '#305973',
                                        fontWeight: 'bold',
                                        fontFamily: 'Bungee Inline',
                                        border: '2px solid #305973',
                                        borderRadius: '8px',
                                        '&:hover': {
                                            background: '#305973',
                                            color: '#EF7E56',
                                            border: '2px solid #EF7E56'
                                        }
                                    }}><BsDownload style={{
                                        strokeWidth: 1.5
                                    }} />&nbsp;&nbsp;&nbsp;Download</Button>
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }} sx={{
                            display: { xs: 'none', md: 'grid' }
                        }}>
                            <div className="content" style={{
                                marginTop: '2rem'
                            }}>
                                <Typography variant='h5' gutterBottom noWrap sx={{
                                    fontWeight: 'bold',
                                    color: '#305973',
                                    fontFamily: 'bungee inline',
                                }}>
                                    About Me
                                </Typography>
                                <Typography variant="h1" color="initial"
                                    sx={{
                                        mb: '1.5rem',
                                        borderBottom: '.3rem solid #EF7E56',
                                        borderRadius: '5rem',
                                        width: '18%',
                                    }}>
                                </Typography>
                                <Typography variant='body1' gutterBottom sx={{
                                    fontFamily: 'Numans',
                                    textAlign: 'justify',
                                    color: '#305973'
                                }}>
                                    Saya Bryant Sulthan Nugroho. Saya mahasiswa Universitas Gunadarma, Fakultas Teknologi Industri, Program Studi Informatika. Saya memiliki minat pada bidang programming terutama pada bagian backend. Saya mudah beradaptasi dan memiliki rasa penasaran yang tinggi terhadap hal baru dan menarik, terutama di bidang teknologi.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 9 }} sx={{
                            display: { xs: 'grid', md: 'none' },
                        }}>
                            <div className="content">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Typography variant='h6' gutterBottom noWrap sx={{
                                        color: '#EF7E56',
                                        fontFamily: 'bungee inline',
                                    }}>
                                        About Me
                                    </Typography>
                                </div>
                                <Typography variant='body1' gutterBottom sx={{
                                    fontFamily: 'Numans',
                                    textAlign: 'center',
                                    color: '#305973'
                                }}>
                                    Saya Bryant Sulthan Nugroho. Saya mahasiswa Universitas Gunadarma, Fakultas Teknologi Industri, Program Studi Informatika. Saya memiliki minat pada bidang programming terutama pada bagian backend. Saya mudah beradaptasi dan memiliki rasa penasaran yang tinggi terhadap hal baru dan menarik, terutama di bidang teknologi.
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
                                            background: '#EF7E56',
                                            color: '#305973',
                                            fontFamily: 'Bungee Inline',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                background: '#305973',
                                                color: '#EF7E56',
                                                border: '1px solid #305973'
                                            }
                                        }}><BsDownload style={{ strokeWidth: 1.5 }}></BsDownload>&nbsp;&nbsp;&nbsp;Download</Button>
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