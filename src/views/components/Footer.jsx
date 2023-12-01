import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { BsGithub, BsInstagram, BsNewspaper } from 'react-icons/bs'

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '2rem' }}>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={12} md={4}>
                    <Typography variant="body1" gutterBottom sx={{
                        color: '#4ecdc4',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        fontSize: '19px'
                    }}>Contact Me</Typography>
                    <Typography variant="body1" gutterBottom sx={{
                        color: '#F6F1E9',
                        mt: '1.2rem'
                    }}>bryantsulthan22@gmail.com</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom sx={{
                        color: '#4ecdc4',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold'
                    }}>Links</Typography>
                    <Typography variant="body1" gutterBottom sx={{
                        color: '#F6F1E9'
                    }}>
                        <a href="/" style={{ textDecoration: 'none', color: '#fff' }}><Typography variant='body2' gutterBottom>Home</Typography></a>
                        <a href="/" style={{ textDecoration: 'none', color: '#fff' }}><Typography variant='body2' gutterBottom>Introduction</Typography></a>
                        <a href="#skills" style={{ textDecoration: 'none', color: '#fff' }}><Typography variant='body2' gutterBottom>Skills</Typography></a>
                        <a href="#work-experience" style={{ textDecoration: 'none', color: '#fff' }}><Typography variant='body2' gutterBottom>Work Experience</Typography></a>
                        <a href="#portofolio" style={{ textDecoration: 'none', color: '#fff' }}><Typography variant='body2' gutterBottom>Portofolio</Typography></a>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom sx={{
                        color: '#4ecdc4',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold'
                    }}>More</Typography>
                    <Typography variant="body1" gutterBottom sx={{
                        color: '#F6F1E9'
                    }}>
                        <Typography variant='body1' gutterBottom sx={{
                            color: '#f7fff7'
                        }}>
                            <a href="https://github.com/bryant-sulthan05" id='git' style={{ textDecoration: 'none', color: '#fff' }}>
                                <BsGithub></BsGithub>&nbsp;Github
                            </a>
                        </Typography>
                        <Typography variant='body1' gutterBottom sx={{
                            color: '#f7fff7'
                        }}>
                            <a href="https://blog.bryantproject.my.id/" id='blog' style={{ textDecoration: 'none', color: '#fff' }}>
                                <BsNewspaper></BsNewspaper>&nbsp;Blog
                            </a>
                        </Typography>
                        <Typography variant='body1' gutterBottom sx={{
                            color: '#f7fff7'
                        }}>
                            <a href="https://instagram.com/bryant_7305?igshid=MzNlNGNkZWQ4Mg==" id='ig' style={{ textDecoration: 'none', color: '#fff' }}>
                                <BsInstagram></BsInstagram>&nbsp;Instagram
                            </a>
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Footer