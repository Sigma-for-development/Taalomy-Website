import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { Hero, AppDownloads, HowItWorks, StudentSection, LecturerSection, FAQ, SupportSection } from '../components';

const Home = () => {
    const { t } = useTranslation();
    const location = useLocation();

    // FAQ Schema Generation
    const faqItems = (t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>) || [];
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            window.history.replaceState({}, document.title)
        }
    }, [location]);

    return (
        <main>
            <SEO
                title="Home"
                description="The #1 App for Universities in MENA. Connect with top lecturers, manage your schedule, and ace your exams."
                keywords="university app, student companion, lecturer booking, mena education, private tutoring, exam preparation"
                schema={JSON.stringify(faqSchema)}
            />
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
