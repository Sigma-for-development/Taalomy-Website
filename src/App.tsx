import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LegalPage from './pages/Legal';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AnimatedBackground from './components/AnimatedBackground';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './i18n';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-background text-text transition-colors duration-300 direction-control relative overflow-x-hidden" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <AnimatedBackground />
            <div className="relative z-10">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal" element={<LegalPage translationKey="privacy_policy" />} />
                <Route path="/privacy" element={<LegalPage translationKey="privacy_policy" />} />
                <Route path="/refund" element={<LegalPage translationKey="refund_policy" />} />
                <Route path="/exchange" element={<LegalPage translationKey="exchange_policy" />} />
                <Route path="/shipping" element={<LegalPage translationKey="shipping_policy" />} />
                <Route path="/delivery" element={<LegalPage translationKey="delivery_policy" />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
