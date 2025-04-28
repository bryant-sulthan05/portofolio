import React from 'react'
import { Box, Typography } from '@mui/material'

const WorkExperience = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '1rem', mb: '2rem' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='h5' gutterBottom sx={{
                    color: '#EF7E56',
                    fontWeight: 'bold',
                    fontFamily: 'Bungee Inline',
                    mb: { xs: '2rem', md: '1rem' }
                }}
                >
                    Pengalaman Kerja
                </Typography>
            </div>
            <div id="experience2">
                <Typography variant='subtitle1' gutterBottom sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Numans',
                    color: '#EF7E56',
                }}>
                    PT. Amanah Media Edukasi
                </Typography>
                <Typography variant='caption' gutterBottom sx={{
                    fontFamily: 'Numans',
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
                <li style={{ fontWeight: 'bold', color: '#EF7E56' }}>Web Developer</li>
                <Typography variant='body1' gutterBottom sx={{
                    fontFamily: 'Numans',
                    ml: '1.3rem',
                    color: '#f7fff7'
                }}>
                    Membuat website demo pembelajaran berbasis
                    video yang terdapat fitur berlangganan dan
                    artikel
                </Typography>
                <li style={{ fontWeight: 'bold', color: '#EF7E56', marginTop: '1.5rem' }}>Support Content Creation</li>
                <Typography variant='body1' gutterBottom sx={{
                    fontFamily: 'Numans',
                    ml: '1.3rem',
                    color: '#f7fff7'
                }}>
                    Membantu rekan tim dalam membuat video
                    promosi
                </Typography>
            </div>
        </Box>
    )
}

export default WorkExperience