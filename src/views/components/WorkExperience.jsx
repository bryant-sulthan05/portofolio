import React from 'react'
import { Box, Typography } from '@mui/material'

const WorkExperience = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '1rem', mb: '2rem' }}>
            <div id="work-experience" style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='h5' gutterBottom sx={{
                    color: '#f7fff7',
                    fontWeight: 'bold',
                    fontFamily: 'Poppins',
                    mb: { xs: '2rem', md: '1rem' }
                }}
                >
                    Work Experience
                </Typography>
            </div>
            <div id="experience2">
                <Typography variant='subtitle1' gutterBottom sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins',
                    color: '#4ecdc4'
                }}>
                    PT. Amanah Media Edukasi
                </Typography>
                <Typography variant='caption' gutterBottom sx={{
                    fontFamily: 'Poppins',
                    color: '#f7fff7'
                }}>
                    Desember 2021 - Maret 2022
                </Typography>
            </div>
            <div className="break">
                <Typography variant="h1" color="initial"
                    sx={{
                        mt: '.3rem',
                        mb: '.8rem',
                        borderBottom: '.3rem solid #fff',
                        borderRadius: '5rem',
                        width: { md: '15%', xs: '50%' },
                    }}>
                </Typography>
            </div>
            <div id="job-desk" style={{ marginTop: '.5rem' }}>
                <li style={{ fontWeight: 'bold', color: '#4ecdc4' }}>Fullstack</li>
                <Typography variant='body1' gutterBottom sx={{
                    fontFamily: 'Poppins',
                    ml: '1.3rem',
                    color: '#f7fff7'
                }}>
                    Had an internship at a tax consulting firm as a fullstack web developer. Creating a taxation private tutoring website, which aims to make it easier for people to learn taxation
                </Typography>
            </div>
        </Box>
    )
}

export default WorkExperience