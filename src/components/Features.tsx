import { motion } from 'framer-motion';
import { Calendar, MessageCircle, BarChart2, DollarSign, Shield, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const features = [
        {
            icon: <Calendar className="w-6 h-6 text-blue-400" />,
            title: t('features.list.0.title'),
            description: t('features.list.0.description')
        },
        {
            icon: <DollarSign className="w-6 h-6 text-green-400" />,
            title: t('features.list.1.title'),
            description: t('features.list.1.description')
        },
        {
            icon: <MessageCircle className="w-6 h-6 text-primary-light" />,
            title: t('features.list.2.title'),
            description: t('features.list.2.description')
        },
        {
            icon: <BarChart2 className="w-6 h-6 text-orange-400" />,
            title: t('features.list.3.title'),
            description: t('features.list.3.description')
        },
        {
            icon: <Shield className="w-6 h-6 text-red-400" />,
            title: t('features.list.4.title'),
            description: t('features.list.4.description')
        },
        {
            icon: <Users className="w-6 h-6 text-teal-400" />,
            title: t('features.list.5.title'),
            description: t('features.list.5.description')
        }
    ];

    return (
        <section id="features" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        {t('features.title')}
                    </motion.h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/50 transition-colors group ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
