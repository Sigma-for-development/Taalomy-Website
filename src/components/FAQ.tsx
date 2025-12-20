import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>;

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                        <HelpCircle size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto">{t('faq.title')}</h2>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface/30 border border-white/5 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left gap-4 hover:bg-white/5 transition-colors"
                            >
                                <span className={`font-bold text-lg text-white ${isRTL ? "text-right" : "text-left"}`}>{item.q}</span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-primary text-white' : 'bg-white/10 text-text-secondary'}`}>
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className={`p-6 pt-0 text-text-secondary leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
