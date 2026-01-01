import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { Hero, AppDownloads, HowItWorks, StudentSection, LecturerSection, FAQ, SupportSection } from '../components';

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
            <SEO />
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
