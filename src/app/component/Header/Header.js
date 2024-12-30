"use client";

import Link from "next/link";
import { useState } from "react";
import "./Header.css";

export const metadata = {
  title: "Cresson Tech",
  description: "Solutions technologiques innovantes",
};

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="fr">
      <body>
        <header>
          <nav className="headerNav">
            <div className="hamburger" onClick={toggleMenu}>
              <span className={`line ${menuOpen ? "open" : ""}`}></span>
              <span className={`line ${menuOpen ? "open" : ""}`}></span>
              <span className={`line ${menuOpen ? "open" : ""}`}></span>
            </div>
            <div className={`menu ${menuOpen ? "menuOpen" : ""}`}>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Accueil
              </Link>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Service
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                À propos
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
