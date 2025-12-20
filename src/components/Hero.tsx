import { motion } from 'framer-motion';
import { Smartphone, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={isRTL ? "text-right" : "text-left"}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        {t('hero.title_start')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light" >
                            {t('hero.title_end')}
                        </span>
                    </h1>
                    <p className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white text-background rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                        >
                            <Smartphone className="w-5 h-5" />
                            {t('hero.download_btn')}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('students')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-surface border border-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
                        >
                            {isRTL ? (
                                <>
                                    {t('hero.learn_more_btn')} <ArrowLeft className="w-5 h-5" />
                                </>
                            ) : (
                                <>
                                    {t('hero.learn_more_btn')} <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </motion.button>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden md:block"
                >
                    {/* Image will be inserted here */}
                    <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-surface/50 backdrop-blur-sm flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Placeholder for generated image */}
                        <img src="/taalomy_app_showcase.png" alt="App Interface" className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
