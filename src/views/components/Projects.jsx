import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BsGithub } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/bryant-sulthan05/repos', {
            headers: {
                Accept: 'application/vnd.github.mercy-preview+json'
            }
        })
            .then(response => {
                const portfolioRepos = response.data.filter(repo =>
                    repo.topics && repo.topics.includes('portofolio')
                );
                setRepos(portfolioRepos);
            })
            .catch(error => {
                console.error('Failed to fetch repos:', error);
            });
    }, []);


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    });
    return (
        <Box sx={{ flexGrow: 1, mt: '3rem', mb: '5rem' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='h5' gutterBottom sx={{
                    color: '#305973',
                    fontWeight: 'bold',
                    fontFamily: 'Bungee Inline',
                    mb: { xs: '.5rem', md: '1rem' }
                }}
                    data-aos="fade-up" data-aos-duration="1000"
                >
                    Portofolio
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
                    width: '10%',
                    backgroundColor: '#EF7E56'
                }} />
            </div>
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
                {repos.map((repo, index) => (
                    <Grid item xs={12} md={3} key={repo.id} data-aos="fade-up" data-aos-duration={1000 + index * 500}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="180"
                                image={`https://raw.githubusercontent.com/${repo.full_name}/main/thumbnail.png`}
                                alt={repo.name}
                                sx={{
                                    objectFit: 'cover',
                                    width: '100%'
                                }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://opengraph.githubassets.com/1/${repo.full_name}`;
                                }}
                            />
                            <CardContent sx={{ minHeight: 120 }}>
                                <Typography gutterBottom variant="h6" sx={{ fontFamily: 'Bungee Inline', color: '#EF7E56' }}>
                                    {repo.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#305973', fontFamily: 'Numans' }}>
                                    {repo.description || "No description provided."}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ margin: '5px' }}>
                                <Button
                                    size="small"
                                    href={repo.html_url}
                                    target="_blank"
                                    sx={{
                                        background: '#001220',
                                        '&:hover': {
                                            background: '#fff',
                                            color: '#001220'
                                        },
                                        color: '#fff',
                                        fontFamily: 'Numans',
                                        border: '2px solid #001220'
                                    }}
                                >
                                    Go To Github&nbsp;<BsGithub style={{ marginLeft: '3px', marginRight: '4px' }} />
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    )
}

export default Projects