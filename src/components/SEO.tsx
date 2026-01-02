import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    type?: 'website' | 'article';
    image?: string;
    schema?: string;
}

const SEO = ({
    title,
    description,
    keywords,
    type = 'website',
    image = 'https://taalomy.com/taalomy_app_showcase.png',
    schema
}: SEOProps) => {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const siteTitle = 'Taalomy';
    const siteUrl = 'https://taalomy.com';
    const currentUrl = `${siteUrl}${location.pathname}`;
    const defaultDescription = t('hero.description', 'Connect with top lecturers, manage your schedule, and ace your exams.');

    const finalTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - The #1 App for Universities`;
    const finalDescription = description || defaultDescription;

    // Organization Schema (Global)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Taalomy",
        "url": "https://taalomy.com",
        "logo": "https://taalomy.com/taalomy-icon.png",
        "sameAs": [
            "https://twitter.com/taalomy",
            "https://instagram.com/taalomy",
            "https://linkedin.com/company/taalomy"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+20-123-456-7890",
            "contactType": "customer service",
            "areaServed": ["EG", "SA", "AE"],
            "availableLanguage": ["en", "ar"]
        }
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={currentUrl} />
            <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_AR' : 'en_US'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            {schema && (
                <script type="application/ld+json">
                    {schema}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
