import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
    const { t } = useTranslation();

    const siteTitle = 'Taalomy';
    const defaultDescription = t('hero.description', 'Connect with top lecturers, manage your schedule, and ace your exams.');

    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const finalDescription = description || defaultDescription;

    return (
        <Helmet>
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />

            {/* Twitter */}
            <meta property="twitter:title" content={finalTitle} />
            <meta property="twitter:description" content={finalDescription} />
        </Helmet>
    );
};

export default SEO;
