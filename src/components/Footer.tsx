import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LogoImage from '../assets/images/no background text/textlogo-nobk.png';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <footer className="bg-background border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className={`grid md:grid-cols-4 gap-12 mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-4">
                            <img src={LogoImage} alt="Taalomy Logo" className="h-8 md:h-10 w-auto" />
                        </div>
                        <p className="text-text-secondary max-w-sm">
                            {t('footer.brand_desc')}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">{t('footer.platform')}</h4>
                        <ul className="space-y-4">
                            {[
                                { label: t('footer.links.features'), href: '/#features' },
                                { label: t('footer.links.lecturers'), href: '/#for-lecturers' },
                                { label: t('footer.links.students'), href: '/#features' },
                                { label: t('footer.links.pricing'), href: '/#features' },
                                { label: t('footer.links.security'), href: '/#features' }
                            ].map(item => (
                                <li key={item.label}>
                                    {item.href.startsWith('/#') ? (
                                        <a href={item.href} className="text-text-secondary hover:text-primary transition-colors">{item.label}</a>
                                    ) : (
                                        <Link to={item.href} className="text-text-secondary hover:text-primary transition-colors">{item.label}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">{t('footer.company')}</h4>
                        <ul className="space-y-4">
                            {[
                                { label: t('footer.links.about'), href: '/about' },
                                { label: t('footer.links.careers'), href: '/about' },
                                { label: t('footer.links.contact'), href: '/contact' },
                                { label: t('footer.links.privacy'), href: '/privacy' }
                            ].map(item => (
                                <li key={item.label}>
                                    <Link to={item.href} className="text-text-secondary hover:text-primary transition-colors">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-4 text-sm px-1">
                            <Link to="/refund" className="text-text-muted hover:text-white transition-colors">{t('refund_policy.title')}</Link>
                            <Link to="/exchange" className="text-text-muted hover:text-white transition-colors">{t('exchange_policy.title')}</Link>
                            <Link to="/shipping" className="text-text-muted hover:text-white transition-colors">{t('shipping_policy.title')}</Link>
                            <Link to="/delivery" className="text-text-muted hover:text-white transition-colors">{t('delivery_policy.title')}</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        {t('footer.copyright')}
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-text-muted hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-text-muted hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-text-muted hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-text-muted hover:text-white transition-colors"><Github size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
