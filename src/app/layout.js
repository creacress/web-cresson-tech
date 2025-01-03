import Header from "./component/Header/Header";
import "./globals.css";
import Script from "next/script"; // Import du composant Script de Next.js

export const metadata = {
  title: "WebCressonTech - Solutions technologiques innovantes en IA",
  description:
    "Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning proposées par WebCressonTech. Accélérez votre transformation digitale avec des outils IA adaptés.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Meta SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="intelligence artificielle, machine learning, deep learning, solutions IA, WebCressonTech" />
        <meta name="author" content="WebCressonTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Script Google Analytics */}
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
        
        {/* Header commun à toutes les pages */}
        <Header />
        
        {/* Contenu de la page */}
        {children}
      </body>
    </html>
  );
}
