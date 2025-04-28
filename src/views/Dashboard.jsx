import React, { useEffect } from 'react'
import Layout from './layout/Layout'
import { Container, Typography } from '@mui/material'
import FullWidthTabs from './components/MenuTab'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsMenu = React.lazy(() => import('./components/SkillsMenu'));
const WorkExperience = React.lazy(() => import('./components/WorkExperience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Footer = React.lazy(() => import('./components/Footer'));
const Home = React.lazy(() => import('./components/Home'));

const Dashboard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    });
    const currentYear = new Date().getFullYear();
    return (
        <Layout>
            {/* About ME */}
            <section id='home' style={{
                background: '#F7F6E7'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <Home></Home>
                </Container>
            </section>

            {/* Menu */}
            <section style={{
                background: '#305973'
            }}
            >
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <FullWidthTabs></FullWidthTabs>
                </Container>
            </section>

            {/* Skills */}
            <section id="skills" style={{
                background: '#F6F1E9',
            }}>
                <Container maxWidth="lg" sx={{ padding: { xs: '1.5rem', md: '5rem' } }}>
                    <SkillsMenu></SkillsMenu>
                </Container>
            </section>

            {/* Work Experience */}
            <section id="work-experience" style={{
                background: '#292f36',
            }}>
                <Container maxWidth="lg" sx={{ padding: { xs: '1.5rem', md: '5rem' } }}>
                    <WorkExperience></WorkExperience>
                </Container>
            </section>

            {/* Portofolio */}
            <section id="portofolio" style={{
                background: '#F6F1E9',
            }}>
                <Container maxWidth="lg" sx={{ padding: { xs: '1rem', md: '5rem' } }}>
                    <Projects></Projects>
                </Container>
            </section>

            {/* Footer */}
            <section style={{
                background: '#292f36',
                borderBottom: '2px solid #f7fff7'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <Footer></Footer>
                </Container>
            </section>
            <section style={{
                background: '#292f36'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='body2' sx={{ color: '#f7fff7', fontFamily: 'Poppins' }}>
                        &copy; <span style={{ color: '#EF7E56', fontFamily: 'Bungee inline' }}>{currentYear}</span> <span style={{ fontFamily: 'Numans' }}>Bryant Sulthan Nugroho</span>
                    </Typography>
                </Container>
            </section>
        </Layout >
    )
}

export default Dashboard