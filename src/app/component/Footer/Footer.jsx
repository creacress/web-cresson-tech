import styles from "../../home.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    // Fonction pour suivre les clics sur les liens clés
    const handleLinkClick = (label) => {
        if (typeof window !== "undefined") {
            window.gtag("event", "footer_link_click", {
                event_category: "Navigation",
                event_label: label,
            });
        }
    };

    return (
        <footer className={styles.footer} aria-label="Pied de page WebCressonTech">
            <div className={styles.footerContent}>
                <div className={styles.footerTop}>
                    <div className={styles.footerSection}>
                        <h3>WebCressonTech</h3>
                        <p>Expert en IA</p>
                        <p>
                            Nous sommes concepteurs et développeurs d’intelligences artificielles sur mesure.
                        </p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>La seule limite est celle que vous ne franchissez pas !</h3>
                        <p>Nous vous accompagnons dans vos projets.</p>
                        <div className={styles.ctaLinks}>
                            <a
                                href="/contact"
                                className={styles.primaryCta}
                                onClick={() => handleLinkClick("Contacter un expert")}
                                aria-label="Contacter un expert IA"
                            >
                                Contacter un expert
                            </a>
                            <a
                                href="https://www.malt.fr/profile/alexiscresson"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.maltButton}
                                onClick={() => handleLinkClick("Profil Malt")}
                                aria-label="Voir le profil Malt d'Alexis Cresson"
                            >
                                Malt
                            </a>
                        </div>
                    </div>
                    <address className={styles.footerSection}>
                        <p>
                            <a
                                href="mailto:alexis@webcresson.com"
                                className={styles.enhancedLink}
                                onClick={() => handleLinkClick("Email - Alexis Cresson")}
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
                                onClick={() => handleLinkClick("Profil LinkedIn - Alexis Cresson")}
                                aria-label="Voir le profil LinkedIn d'Alexis Cresson"
                            >
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </p>
                    </address>
                </div>
                <div className={styles.footerBottom}>
                    <nav className={styles.footerLinks} aria-label="Liens de navigation du pied de page">
                        <a href="/about" onClick={() => handleLinkClick("Accueil")}>Accueil</a>
                        <a href="/services" onClick={() => handleLinkClick("L’agence IA")}>L’agence IA</a>
                        <a href="/contact" onClick={() => handleLinkClick("Contact")}>Contact</a>
                        <a href="/terms" onClick={() => handleLinkClick("Conditions de ventes")}>Conditions de ventes</a>
                        <a href="/privacy" onClick={() => handleLinkClick("Mentions légales")}>Mentions légales</a>
                    </nav>
                    <p>© 2024 WebCressonTech. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
