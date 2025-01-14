import "./styles/globals.css";
import Script from "next/script";
import CanonicalLink from "../app/component/CanonicalLink/CanonicalLink";

// Définir les métadonnées par défaut
const defaultMeta = {
  title: "WebCressonTech - Solutions technologiques innovantes en IA",
  description:
    "Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning proposées par WebCressonTech. Accélérez votre transformation digitale avec des outils IA adaptés.",
  keywords: "intelligence artificielle, machine learning, deep learning, solutions IA",
  author: "WebCressonTech",
  image: "https://www.webcresson.com/Logo_webcressontech.webp",
  url: "https://www.webcresson.com",
};

export const metadata = defaultMeta;

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Meta SEO */}
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords} />
        <meta name="author" content={defaultMeta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Open Graph */}
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:image" content={defaultMeta.image} />
        <meta property="og:url" content={defaultMeta.url} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultMeta.title} />
        <meta name="twitter:description" content={defaultMeta.description} />
        <meta name="twitter:image" content={defaultMeta.image} />

        <link rel="icon" href="/favicon.ico" />

        {/* Données structurées JSON-LD */}
        <Script type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebCressonTech",
              "url": "https://www.webcresson.com",
              "logo": "https://www.webcresson.com/Logo_webcressontech.webp",
              "description": "Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning proposées par WebCressonTech.",
              "sameAs": [
                "https://www.linkedin.com/in/alexis-cresson/"
              ]
            }
          `}
        </Script>
        <CanonicalLink />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H206EG4TH7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H206EG4TH7');
          `}
        </Script>
        {/* Contenu */}
        {children}
      </body>
    </html>
  );
}
