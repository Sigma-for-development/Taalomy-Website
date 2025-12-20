import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AppDownloads from '../components/AppDownloads';
import HowItWorks from '../components/HowItWorks';
import StudentSection from '../components/StudentSection';
import LecturerSection from '../components/LecturerSection';
import FAQ from '../components/FAQ';
import SupportSection from '../components/SupportSection';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            // Optional: Clear state to prevent scrolling on subsequent renders if needed, 
            // but react-router state persists on refresh, so it might be fine or we might want to clear it.
            // For now, let's leave it as is.
            window.history.replaceState({}, document.title)
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <HowItWorks />
            <AppDownloads />
            <StudentSection />
            <LecturerSection />
            <FAQ />
            <SupportSection />
        </main>
    );
};

export default Home;
