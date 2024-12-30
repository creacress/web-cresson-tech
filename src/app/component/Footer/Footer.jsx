import styles from "../../home.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
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
                <h3>La seul limite est c'elle que vous franchisez pas ! </h3>
                <p>Nous vous accompagnons dans vos projets.</p>
                <div className={styles.ctaLinks}>
                  <a href="/contact" className={styles.primaryCta}>
                    Contacter un expert
                  </a>
                  <a href="https://www.malt.fr/profile/alexiscresson" target="_blank" rel="noopener noreferrer" className={styles.maltButton}>
                    Malt
                  </a>
                </div>
              </div>
              <div className={styles.footerSection}>
                <p>
                  <a href="mailto:alexis@webcresson.com" className={styles.enhancedLink}>
                    <i className="fas fa-envelope"></i> alexis@webcresson.com
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/alexis-cresson/" target="_blank" rel="noopener noreferrer" className={styles.enhancedLink}>
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </p>
              </div>

            </div>
            <div className={styles.footerBottom}>
              <div className={styles.footerLinks}>
                <a href="/about">Accueil</a>
                <a href="/services">L’agence IA</a>
                <a href="/contact">Contact</a>
                <a href="/terms">Conditions de ventes</a>
                <a href="/privacy">Mentions légales</a>
              </div>
              <p>© 2024 WebCressonTech. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
    )
}