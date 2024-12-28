import Link from "next/link";
import "./Header.css";

export const metadata = {
  title: "Cresson Tech",
  description: "Solutions technologiques innovantes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <nav className="headerNav">
            <Link href="/">Accueil</Link>
            <Link href="/about">À propos</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
