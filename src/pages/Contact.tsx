import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

import SEO from '../components/SEO';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            <SEO
                title={t('contact_us.title')}
                description={t('contact_us.subtitle')}
            />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`grid md:grid-cols-2 gap-16 ${isRTL ? "text-right" : "text-left"}`}
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            {t('contact_us.title')}
                        </h1>
                        <p className="text-text-secondary text-lg mb-12">
                            {t('contact_us.subtitle')}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{t('contact_us.address_label')}</h3>
                                    <p className="text-text-secondary">{t('contact_us.address')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{t('contact_us.email_label')}</h3>
                                    <p className="text-text-secondary">support@taalomy.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{t('contact_us.phone_label')}</h3>
                                    <p className="text-text-secondary" dir="ltr">+20 100 000 0000</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 border-l-4 border-yellow-500 bg-yellow-500/5 p-6 rounded-r-xl">
                            <p className="text-yellow-700 dark:text-yellow-200 text-sm font-medium">
                                {t('disclaimer')}
                            </p>
                        </div>
                    </div>

                    <div className="bg-surface border border-gray-200 dark:border-white/5 rounded-3xl p-8 relative overflow-hidden">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-surface z-10 p-8 text-center"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                <p className="text-text-secondary">We'll get back to you shortly.</p>
                            </motion.div>
                        ) : null}

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('contact_us.form.title')}</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-text-secondary text-sm font-medium mb-2">{t('contact_us.form.name')}</label>
                                    <input required type="text" className="w-full bg-background/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-text-secondary text-sm font-medium mb-2">{t('contact_us.form.email')}</label>
                                    <input required type="email" className="w-full bg-background/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:outline-none transition-colors" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-text-secondary text-sm font-medium mb-2">{t('contact_us.form.subject')}</label>
                                <input required type="text" className="w-full bg-background/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:outline-none transition-colors" />
                            </div>

                            <div>
                                <label className="block text-text-secondary text-sm font-medium mb-2">{t('contact_us.form.message')}</label>
                                <textarea required rows={5} className="w-full bg-background/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:outline-none transition-colors" />
                            </div>

                            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                                {t('contact_us.form.submit')}
                                <Send size={18} className={isRTL ? "rotate-180" : ""} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
