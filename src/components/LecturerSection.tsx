import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Banknote, UserCheck, CalendarClock } from 'lucide-react';

const LecturerSection = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const features = t('lecturer_section.features', { returnObjects: true }) as Array<{ title: string; desc: string }>;

    return (
        <section className="py-24 bg-background" id="lecturers">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={isRTL ? "text-right" : "text-left"}
                    >
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">{t('downloads.lecturer_label')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('lecturer_section.title')}</h2>
                        <p className="text-text-secondary text-lg mb-8">{t('lecturer_section.subtitle')}</p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t('lecturer_section.verification.title')}</h3>
                                    <p className="text-text-secondary">{t('lecturer_section.verification.desc')}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                                    <Banknote size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t('lecturer_section.payments.title')}</h3>
                                    <p className="text-text-secondary">{t('lecturer_section.payments.desc')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mt-12 bg-surface/30 p-6 rounded-2xl border border-white/5">
                            {features.map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex items-center gap-2 text-white font-bold">
                                        {idx === 0 ? <UserCheck size={18} /> : <CalendarClock size={18} />}
                                        {item.title}
                                    </div>
                                    <p className="text-text-secondary text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Placeholder for Lecturer Dashboard UI */}
                        <div className="relative z-10 bg-surface border border-white/10 rounded-3xl p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h4 className="text-white font-bold">Dashboard</h4>
                                    <p className="text-text-secondary text-sm">Welcome back, Dr. Ahmed</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/10" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-primary/20 p-4 rounded-xl border border-primary/30">
                                    <p className="text-primary text-xs mb-1">Total Earnings</p>
                                    <p className="text-2xl font-bold text-white">$4,250</p>
                                </div>
                                <div className="bg-primary/20 p-4 rounded-xl border border-primary/30">
                                    <p className="text-primary-light text-xs mb-1">Upcoming Classes</p>
                                    <p className="text-2xl font-bold text-white">12</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-white/5" />
                                        <div className="flex-1">
                                            <div className="h-3 w-24 bg-white/20 rounded mb-2" />
                                            <div className="h-2 w-16 bg-white/10 rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LecturerSection;
