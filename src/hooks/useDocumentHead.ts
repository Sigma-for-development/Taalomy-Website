import { useEffect } from 'react';

interface DocumentHeadOptions {
    title?: string;
    description?: string;
    keywords?: string;
    type?: 'website' | 'article';
    image?: string;
    url?: string;
    locale?: string;
    siteName?: string;
    schema?: string;
    lang?: string;
    dir?: 'ltr' | 'rtl';
}

/**
 * A React 19 compatible hook for managing document head metadata.
 * Replaces react-helmet-async without external dependencies.
 */
export const useDocumentHead = (options: DocumentHeadOptions) => {
    useEffect(() => {
        const {
            title,
            description,
            keywords,
            type = 'website',
            image,
            url,
            locale,
            siteName,
            schema,
            lang,
            dir
        } = options;

        // Set title
        if (title) {
            document.title = title;
        }

        // Set HTML lang and dir
        if (lang) {
            document.documentElement.lang = lang;
        }
        if (dir) {
            document.documentElement.dir = dir;
        }

        // Helper to set or update meta tag
        const setMeta = (selector: string, content: string, attribute = 'name') => {
            let meta = document.querySelector<HTMLMetaElement>(selector);
            if (!meta) {
                meta = document.createElement('meta');
                if (attribute === 'name') {
                    meta.name = selector.replace('meta[name="', '').replace('"]', '');
                } else if (attribute === 'property') {
                    meta.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
                }
                document.head.appendChild(meta);
            }
            meta.content = content;
        };

        // Standard meta tags
        if (description) {
            setMeta('meta[name="description"]', description);
        }
        if (keywords) {
            setMeta('meta[name="keywords"]', keywords);
        }

        // Open Graph tags
        if (type) {
            setMeta('meta[property="og:type"]', type, 'property');
        }
        if (url) {
            setMeta('meta[property="og:url"]', url, 'property');
        }
        if (title) {
            setMeta('meta[property="og:title"]', title, 'property');
        }
        if (description) {
            setMeta('meta[property="og:description"]', description, 'property');
        }
        if (image) {
            setMeta('meta[property="og:image"]', image, 'property');
        }
        if (siteName) {
            setMeta('meta[property="og:site_name"]', siteName, 'property');
        }
        if (locale) {
            setMeta('meta[property="og:locale"]', locale, 'property');
        }

        // Twitter tags
        setMeta('meta[name="twitter:card"]', 'summary_large_image');
        if (url) {
            setMeta('meta[name="twitter:url"]', url);
        }
        if (title) {
            setMeta('meta[name="twitter:title"]', title);
        }
        if (description) {
            setMeta('meta[name="twitter:description"]', description);
        }
        if (image) {
            setMeta('meta[name="twitter:image"]', image);
        }

        // Canonical URL
        if (url) {
            let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
            if (!link) {
                link = document.createElement('link');
                link.rel = 'canonical';
                document.head.appendChild(link);
            }
            link.href = url;
        }

        // Schema/JSON-LD
        if (schema) {
            let script = document.querySelector<HTMLScriptElement>('script[data-schema="page"]');
            if (!script) {
                script = document.createElement('script');
                script.type = 'application/ld+json';
                script.dataset.schema = 'page';
                document.head.appendChild(script);
            }
            script.textContent = schema;
        }
    }, [options]);
};

export default useDocumentHead;
