import React, { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImage from '../assets/images/no background text/textlogo-nobk.png';

type LanguageContextType = {
    switchLanguage: (lang: string) => void;
    isTransitioning: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { i18n } = useTranslation();
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Set initial direction and title based on detected language
    React.useEffect(() => {
        const lang = i18n.language;
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = lang;
        document.title = lang === 'ar' ? 'تعلمي' : 'Taalomy';
    }, [i18n.language]);

    const switchLanguage = async (lang: string) => {
        if (lang === i18n.language) return;
        setIsTransitioning(true);

        // Wait for the enter animation to complete
        await new Promise(resolve => setTimeout(resolve, 600));

        // Change the language
        await i18n.changeLanguage(lang);

        // Update direction immediately to ensure layout is ready before revealing
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = lang;

        // Update document title
        document.title = lang === 'ar' ? 'تعلمي' : 'Taalomy';

        // Small delay to allow React to finish rendering the new layout
        await new Promise(resolve => setTimeout(resolve, 100));

        // Start exit animation
        setIsTransitioning(false);
    };

    return (
        <LanguageContext.Provider value={{ switchLanguage, isTransitioning }}>
            {children}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] bg-background flex items-center justify-center flex-col gap-6"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <img src={LogoImage} alt="Taalomy Logo" className="w-64 h-auto" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
