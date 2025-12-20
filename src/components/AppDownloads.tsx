import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Apple, Smartphone } from 'lucide-react';

const AppDownloads = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <section className="py-20 bg-background border-b border-white/5" id="download">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('downloads.title')}</h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('downloads.subtitle')}</p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center gap-12">
                    {/* Student Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 max-w-md mx-auto"
                    >
                        <div className="bg-surface/50 border border-white/5 p-8 rounded-3xl hover:bg-surface transition-colors">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary/80" />
                                {t('downloads.student_label')}
                            </h3>
                            <div className="flex flex-col gap-4">
                                <a href="#ios-student" className="flex items-center justify-center gap-3 bg-white text-background px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                                    <Apple className="w-6 h-6" />
                                    {t('downloads.app_store')}
                                </a>
                                <a href="#android-student" className="flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                                    <Smartphone className="w-6 h-6" />
                                    {t('downloads.google_play')}
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lecturer Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 max-w-md mx-auto"
                    >
                        <div className="bg-surface/50 border border-white/5 p-8 rounded-3xl hover:bg-surface transition-all shadow-xl hover:shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                {t('downloads.lecturer_label')}
                            </h3>
                            <div className="flex flex-col gap-4">
                                <a href="#ios-lecturer" className="flex items-center justify-center gap-3 bg-white text-background px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                                    <Apple className="w-6 h-6" />
                                    {t('downloads.app_store')}
                                </a>
                                <a href="#android-lecturer" className="flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                                    <Smartphone className="w-6 h-6" />
                                    {t('downloads.google_play')}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap justify-center gap-8 text-text-secondary"
                >
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium">{t('downloads.trusted_badges.ssl')}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-sm font-medium">{t('downloads.trusted_badges.verified')}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{t('downloads.trusted_badges.support')}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AppDownloads;
