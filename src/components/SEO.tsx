import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';

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

    // Combine schemas
    const combinedSchema = schema
        ? JSON.stringify(organizationSchema) + '\n' + schema
        : JSON.stringify(organizationSchema);

    // Use the custom hook for document head management
    useDocumentHead({
        title: finalTitle,
        description: finalDescription,
        keywords,
        type,
        image,
        url: currentUrl,
        siteName: siteTitle,
        locale: i18n.language === 'ar' ? 'ar_AR' : 'en_US',
        lang: i18n.language,
        dir: i18n.language === 'ar' ? 'rtl' : 'ltr',
        schema: combinedSchema
    });

    // This component no longer renders anything - all work is done in the hook
    return null;
};

export default SEO;
