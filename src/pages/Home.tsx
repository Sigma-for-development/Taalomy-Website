import Hero from '../components/Hero';
import AppDownloads from '../components/AppDownloads';
import HowItWorks from '../components/HowItWorks';
import StudentSection from '../components/StudentSection';
import LecturerSection from '../components/LecturerSection';
import FAQ from '../components/FAQ';
import SupportSection from '../components/SupportSection';

const Home = () => {
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
