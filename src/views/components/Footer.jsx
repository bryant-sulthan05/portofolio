import React from 'react';
import { Box, Link } from '@mui/material';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '2rem', textAlign: 'center' }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 3,
                mb: 2
            }}>
                <Link href="https://github.com/bryant-sulthan05" target="_blank" sx={{ color: '#fff', fontSize: '24px' }}>
                    <BsGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/bryant-sulthan-nugroho-46b81927a/" target="_blank" sx={{ color: '#fff', fontSize: '24px' }}>
                    <BsLinkedin />
                </Link>
                <Link href="https://www.instagram.com/b_ryn_t/" target="_blank" sx={{ color: '#fff', fontSize: '24px' }}>
                    <BsInstagram />
                </Link>
            </Box>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3
            }}>
                <Link href="/" sx={{
                    textDecoration: 'none',
                    color: '#fff',
                    fontFamily: 'Numans',
                    fontSize: '16px'
                }}>
                    Home
                </Link>
                <Link href="/" sx={{
                    textDecoration: 'none',
                    color: '#fff',
                    fontFamily: 'Numans',
                    fontSize: '16px'
                }}>
                    Introduction
                </Link>
                <Link href="#skills" sx={{
                    textDecoration: 'none',
                    color: '#fff',
                    fontFamily: 'Numans',
                    fontSize: '16px'
                }}>
                    Skills
                </Link>
                <Link href="#work-experience" sx={{
                    textDecoration: 'none',
                    color: '#fff',
                    fontFamily: 'Numans',
                    fontSize: '16px'
                }}>
                    Work Experience
                </Link>
                <Link href="#portofolio" sx={{
                    textDecoration: 'none',
                    color: '#fff',
                    fontFamily: 'Numans',
                    fontSize: '16px'
                }}>
                    Portofolio
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
