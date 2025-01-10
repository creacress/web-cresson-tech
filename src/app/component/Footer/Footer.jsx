"use client";

import styles from "../../styles/home.module.css";
import { useRouter } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  const router = useRouter();

  // Fonction pour suivre les clics sur les liens
  const handleLinkClick = (label, path) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "footer_link_click", {
        event_category: "Navigation",
        event_label: label,
      });
    }
    router.push(path);
  };

  return (
    <footer className={styles.footer} aria-label="Pied de page WebCressonTech">
      <div className={styles.footerContent}>
        {/* Section supérieure */}
        <div className={styles.footerTop}>
          {/* Description de l'entreprise */}
          <div className={styles.footerSection}>
            <h3>WebCressonTech</h3>
            <p>Expert en IA</p>
            <p>
              Nous sommes concepteurs et développeurs d’intelligences artificielles sur mesure.
            </p>
          </div>

          {/* Message d'encouragement */}
          <div className={styles.footerSection}>
            <h3>La seule limite est celle que vous ne franchissez pas !</h3>
            <p>Nous vous accompagnons dans vos projets.</p>
            <div className={styles.ctaLinks}>
              <a
                href="/contact"
                className={styles.primaryCta}
                onClick={() => handleLinkClick("Contacter un expert", "/contact")}
                aria-label="Contacter un expert IA"
              >
                Contacter un expert
              </a>
              <a
                href="https://www.malt.fr/profile/alexiscresson"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.maltButton}
                onClick={() => handleLinkClick("Profil Malt", "https://www.malt.fr/profile/alexiscresson")}
                aria-label="Voir le profil Malt d'Alexis Cresson"
              >
                Malt
              </a>
            </div>
          </div>

          {/* Coordonnées */}
          <address className={styles.footerSection}>
            <p>
              <a
                href="mailto:alexis@webcresson.com"
                className={styles.enhancedLink}
                onClick={() => handleLinkClick("Email - Alexis Cresson", "mailto:alexis@webcresson.com")}
                aria-label="Envoyer un email à alexis@webcresson.com"
              >
                <i className="fas fa-envelope"></i> alexis@webcresson.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/alexis-cresson/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.enhancedLink}
                onClick={() => handleLinkClick("Profil LinkedIn - Alexis Cresson", "https://www.linkedin.com/in/alexis-cresson/")}
                aria-label="Voir le profil LinkedIn d'Alexis Cresson"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </p>
          </address>
        </div>

        {/* Section inférieure */}
        <div className={styles.footerBottom}>
          <nav className={styles.footerLinks} aria-label="Liens de navigation du pied de page">
            <a href="/about" onClick={() => handleLinkClick("Accueil", "/about")}>Accueil</a>
            <a href="/services" onClick={() => handleLinkClick("L’agence IA", "/services")}>L’agence IA</a>
            <a href="/contact" onClick={() => handleLinkClick("Contact", "/contact")}>Contact</a>
            <a href="/TermsOfSale" onClick={() => handleLinkClick("Conditions de ventes", "/TermsOfSale")}>Conditions de ventes</a>
            <a href="/LegalMentions" onClick={() => handleLinkClick("Mentions légales", "/LegalMentions")}>Mentions légales</a>
          </nav>
          <p>© {currentYear} WebCressonTech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
