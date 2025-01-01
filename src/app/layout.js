import Header from "./component/Header/Header";
import "./globals.css";
import Script from "next/script"; // Import du composant Script de Next.js

export const metadata = {
  title: "Cresson Tech",
  description: "Solutions technologiques innovantes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
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
