"use client";

import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa"; // Importer l'icône LinkedIn
import "../../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (label, href) => {
    if (typeof window !== "undefined") {
      window.gtag("event", "header_link_click", {
        event_category: "Navigation",
        event_label: label,
        event_action: href,
      });
    }
    setMenuOpen(false);
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

        {/* Logo centré */}
        <div className="logo">
          <Link href="/">
            <img src="Logo_webcressontech.webp" alt="Logo CressonTech" />
          </Link>
        </div>

        {/* Menu de navigation */}
        <div
          id="navigationMenu"
          className={`menu ${menuOpen ? "menuOpen" : ""}`}
          aria-hidden={!menuOpen}
        >
          <Link href="/" onClick={() => handleLinkClick("Accueil", "/")}>
            Accueil
          </Link>
          <Link href="/services" onClick={() => handleLinkClick("Services", "/services")}>
            Services
          </Link>
          <Link href="/about" onClick={() => handleLinkClick("À propos", "/about")}>
            À propos
          </Link>
          <Link href="/contact" onClick={() => handleLinkClick("Contact", "/contact")}>
            Contact
          </Link>
        </div>

        {/* Conteneur pour l'icône LinkedIn et le bouton */}
        <div className="ctaContainer">
          {/* Icône LinkedIn */}
          <div className="socialIcons">
            <a
              href="https://www.linkedin.com/in/votreprofil/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers LinkedIn"
            >
              <FaLinkedin size={50} />
            </a>
          </div>

          {/* Bouton Contacter un expert */}
          <a
            href="/contact"
            className="primaryCta"
            onClick={() => handleLinkClick("Contacter un expert", "/contact")}
            aria-label="Contacter un expert IA"
          >
            Contacter un expert
          </a>
        </div>
      </nav>
    </header>
  );
}
