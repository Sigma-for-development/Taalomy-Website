import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { User, BookOpen, DollarSign, Search, CheckCircle, Calendar } from 'lucide-react';

const HowItWorks = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'student' | 'lecturer'>('student');

    const studentSteps = t('how_it_works.student_steps', { returnObjects: true }) as Array<{ title: string; desc: string }>;
    const lecturerSteps = t('how_it_works.lecturer_steps', { returnObjects: true }) as Array<{ title: string; desc: string }>;

    const icons = {
        student: [User, Search, Calendar, BookOpen],
        lecturer: [User, CheckCircle, Calendar, DollarSign]
    };

    const activeSteps = activeTab === 'student' ? studentSteps : lecturerSteps;
    const activeIcons = activeTab === 'student' ? icons.student : icons.lecturer;

    return (
        <section className="py-20 bg-surface/20" id="features">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('how_it_works.title')}</h2>
                    <p className="text-text-secondary text-lg mb-8">{t('how_it_works.subtitle')}</p>

                    <div className="bg-surface border border-white/10 p-1 rounded-xl inline-flex gap-2">
                        <button
                            onClick={() => setActiveTab('student')}
                            className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'student' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}`}
                        >
                            {t('how_it_works.toggle_student')}
                        </button>
                        <button
                            onClick={() => setActiveTab('lecturer')}
                            className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'lecturer' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}`}
                        >
                            {t('how_it_works.toggle_lecturer')}
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block" />

                    <div className="grid md:grid-cols-4 gap-8">
                        <AnimatePresence mode='wait'>
                            {activeSteps.map((step, index) => {
                                const Icon = activeIcons[index];
                                return (
                                    <motion.div
                                        key={`${activeTab}-${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative bg-background border border-white/10 p-6 rounded-2xl z-10 hover:border-primary/50 transition-colors"
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-6 bg-primary`}>
                                            <Icon size={20} />
                                        </div>
                                        <div className="text-5xl font-bold text-white/5 absolute top-4 right-4">{index + 1}</div>

                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-text-secondary text-sm">{step.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
