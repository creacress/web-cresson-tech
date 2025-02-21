import "./styles/globals.css";
import Script from "next/script";
import CanonicalLink from "../app/component/CanonicalLink/CanonicalLink";

export const metadata = {
  title: "WebCressonTech - Solutions technologiques innovantes en IA",
  description:
    "Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning proposées par WebCressonTech. Accélérez votre transformation digitale avec des outils IA adaptés.",
  keywords: "intelligence artificielle, machine learning, deep learning, solutions IA",
  authors: [{ name: "WebCressonTech" }],
  openGraph: {
    title: "WebCressonTech - Solutions technologiques innovantes en IA",
    description:
      "Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning proposées par WebCressonTech. Accélérez votre transformation digitale avec des outils IA adaptés.",
    url: "https://www.webcresson.com",
    images: [{ url: "https://www.webcresson.com/Logo_webcressontech.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCressonTech - Solutions technologiques innovantes en IA",
    description:
      "Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning proposées par WebCressonTech.",
    images: ["https://www.webcresson.com/Logo_webcressontech.webp"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Meta Robots pour forcer l'indexation */}
        <meta name="robots" content="index, follow" />
        {/* Tu peux déplacer ton CanonicalLink ici si nécessaire */}
        <CanonicalLink />
      </head>
      <body>
        {/* JSON-LD pour les données structurées */}
        <Script type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebCressonTech",
              "url": "https://www.webcresson.com",
              "logo": "https://www.webcresson.com/Logo_webcressontech.webp",
              "description": "Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning proposées par WebCressonTech.",
              "sameAs": ["https://www.linkedin.com/in/alexis-cresson/"]
            }
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H206EG4TH7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H206EG4TH7');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
