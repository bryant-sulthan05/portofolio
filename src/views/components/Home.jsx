import React from 'react'
// mui.component
import { Avatar, Typography, Button, Link } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
// images
import profile from '../img/profile.jpg';
// icons
import { BsArrowRight, BsDownload } from 'react-icons/bs'
import { BsGithub, BsInstagram, BsLinkedin, BsEnvelopeFill } from 'react-icons/bs';

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
                                    Tentang Saya
                                </Typography>
                                <Typography variant="h1" color="initial"
                                    sx={{
                                        mb: '1.5rem',
                                        borderBottom: '.3rem solid #EF7E56',
                                        borderRadius: '5rem',
                                        width: '28%',
                                    }}>
                                </Typography>
                                <Typography variant='body1' gutterBottom sx={{
                                    fontFamily: 'Numans',
                                    textAlign: 'justify',
                                    color: '#305973',
                                    mb: '1.5rem'
                                }}>
                                    Saya adalah seorang yang teliti dan memiliki rasa
                                    penasaran yang tinggi. Saya memiliki minat pada
                                    bidang programming terutama pada bagian
                                    backend, saya juga memiliki minat terhadap IoT.
                                    Saya dapat bekerja secara tim maupun secara
                                    individu. Saya juga dapat beradaptasi dengan hal
                                    baru sehingga saya dapat diandalkan.
                                </Typography>
                                <Typography variant='subtitle' sx={{
                                    fontWeight: 'bold',
                                    color: '#305973',
                                    fontFamily: 'bungee inline',
                                    fontSize: '18px'
                                }}>
                                    Kontak <BsArrowRight style={{ strokeWidth: 1.5 }} />
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    gap: 3,
                                    mb: 2,
                                    mt: '1rem'
                                }}>
                                    <Link href="https://github.com/bryant-sulthan05" target="_blank" sx={{
                                        color: 'grey', fontSize: '30px', '&:hover': {
                                            color: '#181717'
                                        }
                                    }}>
                                        <BsGithub />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/bryant-sulthan-nugroho-46b81927a/" target="_blank" sx={{
                                        color: 'grey', fontSize: '30px', '&:hover': {
                                            color: '#0D597F'
                                        }
                                    }}>
                                        <BsLinkedin />
                                    </Link>
                                    <Link href="https://www.instagram.com/b_ryn_t/" target="_blank" sx={{
                                        color: 'grey', fontSize: '30px', '&:hover': {
                                            color: '#FF0069'
                                        }
                                    }}>
                                        <BsInstagram />
                                    </Link>
                                    <Link href="mailto:bryantsulthan22@gmail.com" target="_blank" sx={{
                                        color: 'grey',
                                        fontSize: '30px',
                                        '&:hover': {
                                            color: '#EA4335'
                                        }
                                    }}>
                                        <BsEnvelopeFill />
                                    </Link>
                                </Box>
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
                                        Tentang Saya
                                    </Typography>
                                </div>
                                <Typography variant='body1' gutterBottom sx={{
                                    fontFamily: 'Numans',
                                    textAlign: 'center',
                                    color: '#305973'
                                }}>
                                    Saya adalah seorang yang teliti dan memiliki rasa
                                    penasaran yang tinggi. Saya memiliki minat pada
                                    bidang programming terutama pada bagian
                                    backend, saya juga memiliki minat terhadap IoT.
                                    Saya dapat bekerja secara tim maupun secara
                                    individu. Saya juga dapat beradaptasi dengan hal
                                    baru sehingga saya dapat diandalkan.
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
                                <div className="cv" style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Typography variant='subtitle' gutterBottom noWrap sx={{
                                        marginTop: '1.5rem',
                                        display: { xs: 'flex', md: 'none' }
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            gap: 3,
                                            mt: '1rem'
                                        }}>
                                            <Link href="https://github.com/bryant-sulthan05" target="_blank" sx={{
                                                color: 'grey', fontSize: '30px', '&:hover': {
                                                    color: '#181717'
                                                }
                                            }}>
                                                <BsGithub />
                                            </Link>
                                            <Link href="https://www.linkedin.com/in/bryant-sulthan-nugroho-46b81927a/" target="_blank" sx={{
                                                color: 'grey', fontSize: '30px', '&:hover': {
                                                    color: '#0D597F'
                                                }
                                            }}>
                                                <BsLinkedin />
                                            </Link>
                                            <Link href="https://www.instagram.com/b_ryn_t/" target="_blank" sx={{
                                                color: 'grey', fontSize: '30px', '&:hover': {
                                                    color: '#FF0069'
                                                }
                                            }}>
                                                <BsInstagram />
                                            </Link>
                                            <Link href="mailto:bryantsulthan22@gmail.com" target="_blank" sx={{
                                                color: 'grey',
                                                fontSize: '30px',
                                                '&:hover': {
                                                    color: '#EA4335'
                                                }
                                            }}>
                                                <BsEnvelopeFill />
                                            </Link>
                                        </Box>
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Grid >
        </Grid >
    )
}

export default Home