"use client";

import Link from "next/link";
import { useState } from "react";
import "../../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour suivre les clics sur les liens
  const handleLinkClick = (label) => {
    if (typeof window !== "undefined") {
      window.gtag("event", "header_link_click", {
        event_category: "Navigation",
        event_label: label,
      });
    }
    setMenuOpen(false); // Fermer le menu après un clic
  };

  return (
    <header aria-label="En-tête du site WebCressonTech">
      <nav className="headerNav">
        {/* Menu hamburger pour mobile */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="navigationMenu"
        >
          <span className={`line ${menuOpen ? "open" : ""}`}></span>
          <span className={`line ${menuOpen ? "open" : ""}`}></span>
          <span className={`line ${menuOpen ? "open" : ""}`}></span>
        </button>

        {/* Menu de navigation */}
        <div
          id="navigationMenu"
          className={`menu ${menuOpen ? "menuOpen" : ""}`}
          aria-hidden={!menuOpen}
        >
          <Link href="/" onClick={() => handleLinkClick("Accueil")}>
            Accueil
          </Link>
          <Link href="/services" onClick={() => handleLinkClick("Services")}>
            Services
          </Link>
          <Link href="/about" onClick={() => handleLinkClick("À propos")}>
            À propos
          </Link>
          <Link href="/contact" onClick={() => handleLinkClick("Contact")}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
