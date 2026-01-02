import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

const Career = () => {
    const { t } = useTranslation();
    // const isRTL = i18n.language === 'ar';

    return (
        <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center">
            <SEO
                title={t('careers.title')}
                description={t('careers.no_openings_desc')}
            />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="bg-surface/30 border border-white/10 rounded-3xl p-12 backdrop-blur-sm shadow-xl">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                            <Briefcase size={40} strokeWidth={1.5} />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('careers.no_openings_title')}
                        </h1>

                        <p className="text-text-secondary text-lg leading-relaxed mb-8">
                            {t('careers.no_openings_desc')}
                        </p>

                        <div className="bg-background/50 rounded-2xl p-6 border border-white/5">
                            <p className="text-text-secondary leading-relaxed">
                                {t('careers.future_opportunities').split('details')[0]}
                                <a href="mailto:careers@taalomy.com" className="text-primary hover:text-primary-dark transition-colors font-medium">
                                    careers@taalomy.com
                                </a>
                                {t('careers.future_opportunities').split('details')[1]}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Career;
