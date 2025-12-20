import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Headset, MessageCircle } from 'lucide-react';

const SupportSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-background" id="support">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-surface to-background border border-white/10 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
                            <Headset size={32} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('support_section.title')}</h2>
                        <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            {t('support_section.desc')}
                        </p>

                        <a
                            href="mailto:support@taalomy.com"
                            className="inline-flex bg-white text-background px-8 py-4 rounded-xl font-bold items-center justify-center gap-3 mx-auto hover:scale-105 transition-transform"
                        >
                            <MessageCircle size={20} />
                            {t('support_section.cta')}
                        </a>
                    </div>

                    {/* Gradient Effects */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/5 to-transparent -z-0" />
                </motion.div>
            </div>
        </section>
    );
};

export default SupportSection;
