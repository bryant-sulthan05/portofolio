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
    return (
        <Layout>
            {/* About ME */}
            <section style={{
                background: '#4ecdc4'
                // backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)`,
                // backgroundSize: '100%',
                // backgroundRepeat: 'no-repeat',
                // minHeight: '100%'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <Home></Home>
                </Container>
            </section>

            {/* Menu */}
            <section style={{
                background: '#292f36'
            }}
            >
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <FullWidthTabs></FullWidthTabs>
                </Container>
            </section>

            {/* Skills */}
            <section style={{
                background: '#F6F1E9'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <SkillsMenu></SkillsMenu>
                </Container>
            </section>

            {/* Work Experience */}
            <section style={{
                background: '#292f36'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }} data-aos="fade-up" data-aos-duration="1000">
                    <WorkExperience></WorkExperience>
                </Container>
            </section>

            {/* Portofolio */}
            <section style={{
                background: '#F6F1E9'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
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
                    <Typography variant='body2' sx={{ color: '#f7fff7', fontFamily: 'Poppins' }}>&copy; <span style={{ color: '#4ecdc4' }}>2023</span> Bryant Sulthan Nugroho</Typography>
                </Container>
            </section>
        </Layout >
    )
}

export default Dashboard