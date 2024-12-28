import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.mainContent}>
        {/* Section Hero */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Bienvenue chez Cresson Tech</h1>
          <p className={styles.heroText}>
            Nous créons des solutions technologiques innovantes pour répondre à vos besoins en intelligence artificielle.
          </p>
        </section>

        {/* Section Services */}
        <section className={styles.services}>
          <h2 className={styles.sectionTitle}>Nos Services</h2>
          <ul className={styles.servicesList}>
            <li>
              <h3 className={styles.serviceTitle}>Développement d'applications IA</h3>
              <p className={styles.serviceText}>Des solutions sur mesure adaptées à vos besoins technologiques.</p>
            </li>
            <li>
              <h3 className={styles.serviceTitle}>Analyse de données avancée</h3>
              <p className={styles.serviceText}>Exploration et visualisation de données pour des décisions éclairées.</p>
            </li>
            <li>
              <h3 className={styles.serviceTitle}>Automatisation et intégration</h3>
              <p className={styles.serviceText}>Optimisation des processus pour gagner en efficacité et en performance.</p>
            </li>
          </ul>
        </section>

        {/* Section Pourquoi nous choisir */}
        <section className={styles.whyChooseUs}>
          <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Expertise</h3>
              <p className={styles.featureText}>
                Une équipe de professionnels expérimentés dans le domaine technologique.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Innovation</h3>
              <p className={styles.featureText}>
                Des solutions modernes basées sur les dernières technologies.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Résultats</h3>
              <p className={styles.featureText}>
                Un accompagnement garanti vers la réussite de vos projets.
              </p>
            </div>
          </div>
        </section>

      <div className={styles.ctas}>
        <a href="/contact" className={styles.primaryCta}>
          Nous Contacter
        </a>
        <a href="/about" className={styles.secondaryCta}>
          En savoir plus
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2024 Cresson Tech. Tous droits réservés.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
