import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Globe, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import LogoImage from '../assets/images/no background text/textlogo-nobk.png';
import LogoImageLight from '../assets/images/no background text/textlogo-lightbk.png';

const Navbar = () => {
    // ... existing hooks
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const { switchLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const isRTL = i18n.language === 'ar';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        switchLanguage(isRTL ? 'en' : 'ar');
    };

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: t('navbar.features'), href: '#features' },
        { name: t('navbar.lecturers'), href: '#lecturers' },
        { name: t('navbar.students'), href: '#students' },
        { name: t('navbar.support'), href: '#support' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/80 backdrop-blur-lg border-b border-text-primary/10 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <img src={theme === 'dark' ? LogoImage : LogoImageLight} alt="Taalomy Logo" className="h-8 md:h-10 w-auto" />
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                            }}
                            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium tracking-wider"
                        >
                            {item.name}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-text-primary/5 text-text-secondary hover:text-primary transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                    >
                        <Globe size={18} />
                        <span className="text-sm font-medium uppercase">{isRTL ? 'English' : 'العربية'}</span>
                    </button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-colors"
                    >
                        <Download size={18} />
                        <span>{t('navbar.download_app')}</span>
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-text-primary/10"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-text-secondary hover:text-primary py-2 font-medium"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center justify-between border-t border-text-primary/5 pt-4 mt-2">
                                <button
                                    onClick={() => {
                                        toggleLanguage();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-text-secondary hover:text-primary py-2"
                                >
                                    <Globe size={18} />
                                    <span className="font-medium">{isRTL ? 'English' : 'العربية'}</span>
                                </button>
                                <button
                                    onClick={() => {
                                        toggleTheme();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="p-2 rounded-full hover:bg-text-primary/5 text-text-secondary hover:text-primary transition-colors"
                                >
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                            </div>
                            <button
                                onClick={() => {
                                    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                                    setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold w-full"
                            >
                                <Download size={18} />
                                <span>{t('navbar.download_app')}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
