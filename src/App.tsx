import { useEffect, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, AnimatedBackground } from './components';
import { LanguageProvider, ThemeProvider } from './contexts';
import './i18n';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const LegalPage = lazy(() => import('./pages/Legal'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Career = lazy(() => import('./pages/Career'));
const NotFound = lazy(() => import('./pages/NotFound'));

// // Temporary component for testing error boundary
// const TestError = () => {
//   throw new Error("This is a test error to verify the Error Boundary.");
//   return null;
// };

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

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
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/careers" element={<Career />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/legal" element={<LegalPage translationKey="privacy_policy" />} />
                  <Route path="/privacy" element={<LegalPage translationKey="privacy_policy" />} />
                  <Route path="/refund" element={<LegalPage translationKey="refund_policy" />} />
                  <Route path="/exchange" element={<LegalPage translationKey="exchange_policy" />} />
                  <Route path="/shipping" element={<LegalPage translationKey="shipping_policy" />} />
                  <Route path="/delivery" element={<LegalPage translationKey="delivery_policy" />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Footer />
            </div>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
