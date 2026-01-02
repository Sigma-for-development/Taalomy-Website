import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Briefcase, MapPin, Users, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

interface JobPosition {
    id: string;
    title: string;
    type: string;
    location: string;
    department: string;
    description: string;
    requirements: string[];
}

const Career = () => {
    const { t } = useTranslation();

    // Safety check to ensure we get an array, fallback to empty array if translation fails
    const positions = (t('careers.open_positions', { returnObjects: true }) as JobPosition[]) || [];
    const hasPositions = Array.isArray(positions) && positions.length > 0;

    return (
        <div className="pt-32 pb-20 min-h-screen flex flex-col items-center">
            <SEO
                title={t('careers.title')}
                description={t('careers.subtitle')}
            />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {t('careers.title')}
                    </h1>
                    <p className="text-xl text-text-secondary">
                        {t('careers.subtitle')}
                    </p>
                </motion.div>

                {hasPositions ? (
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {positions.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
                            >
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Briefcase size={14} />
                                        {job.type}
                                    </span>
                                    <span className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <MapPin size={14} />
                                        {job.location}
                                    </span>
                                    <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Users size={14} />
                                        {job.department}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                    {job.title}
                                </h3>

                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    {job.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements:</h4>
                                    <ul className="space-y-2">
                                        {job.requirements.map((req, i) => (
                                            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href={`mailto:careers@taalomy.com?subject=Application for ${job.title} - [Your Name]`}
                                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors font-medium w-full justify-center md:w-auto"
                                >
                                    Apply via Email
                                    <ArrowRight size={18} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center bg-surface/30 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                            <Briefcase size={40} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            No Job Openings Currently
                        </h2>
                        <p className="text-text-secondary">
                            We currently have no job openings available. Please check back later.
                        </p>
                    </div>
                )}

                <div className="mt-20 max-w-2xl mx-auto text-center">
                    <div className="bg-surface/30 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <p className="text-text-secondary leading-relaxed">
                            {t('careers.future_opportunities').split('details')[0]}
                            <a href="mailto:careers@taalomy.com" className="text-primary hover:text-primary-dark transition-colors font-medium">
                                careers@taalomy.com
                            </a>
                            {t('careers.future_opportunities').split('details')[1]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
