"use client";

import Link from "next/link";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="headerNav">
        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`line ${menuOpen ? "open" : ""}`}></span>
          <span className={`line ${menuOpen ? "open" : ""}`}></span>
          <span className={`line ${menuOpen ? "open" : ""}`}></span>
        </div>

        {/* Navigation menu */}
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
  );
}
