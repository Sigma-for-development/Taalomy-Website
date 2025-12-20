import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, CreditCard, Video, TrendingUp } from 'lucide-react';

const StudentSection = () => {
    const { t } = useTranslation();
    const features = t('student_section.features', { returnObjects: true }) as Array<{ title: string; desc: string }>;

    const icons = [BookOpen, CreditCard, Video, TrendingUp];

    return (
        <section className="py-24 bg-surface/20" id="students">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">{t('downloads.student_label')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">{t('student_section.title')}</h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('student_section.subtitle')}</p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-background border border-text-primary/5 p-8 rounded-2xl hover:border-primary/30 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-4">{feature.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StudentSection;
