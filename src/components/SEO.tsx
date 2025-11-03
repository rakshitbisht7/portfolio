import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogType?: string;
}

export function SEO({
  title = 'Rakshit Bisht - Full Stack Developer Portfolio',
  description = 'Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and experience in React, Node.js, TypeScript, and more.',
  keywords = 'Full Stack Developer, Web Developer, React, Node.js, TypeScript, JavaScript, Portfolio, Rakshit Bisht',
  author = 'Rakshit Bisht',
  ogType = 'website',
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', author);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('theme-color', '#0ea5e9');

    // Open Graph meta tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', window.location.href, true);

    // Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);

    // Additional SEO optimizations
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    if (!canonical.parentElement) {
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

  }, [title, description, keywords, author, ogType]);

  return null;
}
