"use client";

import Header from "./component/Header/Header";
import "./styles/globals.css";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Head from "next/head";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webcresson.com";

  return (
    <html lang="fr">
      <Head>
        {/* Meta SEO */}
        <title>WebCressonTech - Solutions technologiques innovantes en IA</title>
        <meta
          name="description"
          content="Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning proposées par WebCressonTech. Accélérez votre transformation digitale avec des outils IA adaptés."
          
        />
        <meta name="author" content="WebCressonTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Open Graph */}
        <meta property="og:title" content="WebCressonTech - Solutions technologiques innovantes en IA" />
        <meta property="og:description" content="Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning." />
        <meta property="og:image" content="https://www.webcresson.com/Logo_webcressontech.webp" />
        <meta property="og:url" content="https://www.webcresson.com" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebCressonTech - Solutions technologiques innovantes en IA" />
        <meta name="twitter:description" content="Découvrez les solutions d'intelligence artificielle." />
        <meta name="twitter:image" content="https://www.webcresson.com/Logo_webcressontech.webp" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={`${baseUrl}${pathname}`} />

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
      </Head>
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

        {/* Header */}
        <Header />

        {/* Contenu */}
        {children}
      </body>
    </html>
  );
}
