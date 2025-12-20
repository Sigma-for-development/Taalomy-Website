import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface LegalPageProps {
    translationKey: string;
}

const LegalPage = ({ translationKey }: LegalPageProps) => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={isRTL ? "text-right" : "text-left"}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        {t(`${translationKey}.title`)}
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <div className="bg-surface/30 border border-white/5 rounded-2xl p-8 mb-8">
                            <p className="text-text-secondary leading-relaxed whitespace-pre-line text-lg">
                                {t(`${translationKey}.content`)}
                            </p>
                        </div>

                        <div className="border-l-4 border-yellow-500 bg-yellow-500/5 p-6 rounded-r-xl">
                            <p className="text-yellow-200 text-sm font-medium">
                                {t('disclaimer')}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LegalPage;
