import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EarnMoney = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const benefits = t('earn_money.benefits', { returnObjects: true }) as string[];

    return (
        <section id="for-lecturers" className="py-20 bg-surface/30">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl opacity-20 blur-xl" />
                            <div className={`relative bg-background border border-text-primary/10 rounded-3xl p-8 overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <p className="text-text-secondary text-sm">{t('earn_money.total_earnings')}</p>
                                        <h4 className={`text-3xl font-bold text-text-primary ${isRTL ? 'text-right' : 'text-left'}`} dir="ltr">$4,250.00</h4>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { label: t('earn_money.cards.physics'), amount: "+$850.00", time: t('earn_money.cards.time_2h') },
                                        { label: t('earn_money.cards.algo'), amount: "+$620.00", time: t('earn_money.cards.time_5h') },
                                        { label: t('earn_money.cards.db'), amount: "+$450.00", time: t('earn_money.cards.time_1d') },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-white/5 transition-colors">
                                            <span className="text-green-400 font-bold" dir="ltr">{item.amount}</span>
                                            <div className="text-right">
                                                <p className="font-semibold text-text-primary">{item.label}</p>
                                                <p className="text-xs text-text-muted">{item.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`order-1 md:order-2 ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                            {t('earn_money.title_start')} <br />
                            <span className="text-primary">{t('earn_money.title_highlight')}</span>
                        </h2>
                        <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                            {t('earn_money.description')}
                        </p>

                        <div className="space-y-4">
                            {benefits.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-text-primary">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25">
                            {t('earn_money.cta')}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EarnMoney;
