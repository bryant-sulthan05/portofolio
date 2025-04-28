import React from 'react';
import { Box, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '2rem', textAlign: 'center' }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3
            }}>
                {[
                    { href: '#home', label: 'Home' },
                    { href: '#home', label: 'Introduction' },
                    { href: '#skills', label: 'Skills' },
                    { href: '#work-experience', label: 'Work Experience' },
                    { href: '#portofolio', label: 'Portofolio' }
                ].map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        sx={{
                            textDecoration: 'none',
                            color: '#EF7E56',
                            fontFamily: 'Numans',
                            fontSize: '16px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                fontWeight: 'bold',
                                color: '#f7fff7',
                            }
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Footer;
