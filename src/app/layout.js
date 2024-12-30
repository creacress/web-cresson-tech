import Head from "next/head";
import Header from "./component/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Cresson Tech",
  description: "Solutions technologiques innovantes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        {/* Balises de base pour le SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/default-og-image.jpg" /> {/* Remplacez par une image par défaut */}
        <meta property="og:url" content="https://cressontech.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/default-og-image.jpg" />
        
        {/* Balises supplémentaires */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cressontech.com" />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
