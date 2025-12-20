import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-20 max-w-4xl mx-auto ${isRTL ? "text-right" : "text-left"}`}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                        {t('about_us.title')}
                    </h1>
                    <div className="bg-surface/30 border border-white/5 rounded-2xl p-8 md:p-12">
                        <p className="text-text-secondary leading-relaxed whitespace-pre-line text-lg mb-6">
                            {t('about_us.content')}
                        </p>
                        <p className="text-text-secondary leading-relaxed whitespace-pre-line text-lg">
                            {t('about_us.mission')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
