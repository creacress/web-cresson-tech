// Import styles
import styles from "./home.module.css";
import Footer from "./component/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.mainContent}>
        {/* Section Hero */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Agence experte en Intelligence Artificielle</h1>
          <p className={styles.heroText}>
            Nous aidons les entreprises à relever les défis de l'intelligence artificielle, de la gestion des données aux infrastructures, en passant par des solutions IA existantes ou entièrement sur mesure.
          </p>
        </section>

        {/* Section Services */}
        <section className={styles.services}>
          <h2 className={styles.servicesTitle}>Conception et développement d’Intelligence Artificielle.</h2>
          <p className={styles.servicesText}>
            La transformation numérique est un sujet au cœur des préoccupations des entreprises. Digitalia vous accompagne sur les challenges IA.
          </p>
          <ul className={styles.servicesList}>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Développement sur solutions IA existantes</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Développement intelligence artificielle sur-mesure</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Conseil et diagnostic IA</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Machine et Deep Learning</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>SAAS et Intelligence Artificielle intégrées</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Maintenance et évolution sur IA existantes</span>
            </li>
          </ul>
          <button className={styles.ctaButton}>Nos études de cas</button>
        </section>

        {/* Other Sections */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Un projet de développement d'intelligence artificielle ?</h1>
          <p className={styles.heroText}>
            Notre agence IA maîtrise les différents outils de l’intelligence artificielle : Machine learning, Deep learning, Computer vision, Traitement de langage, Automatisation de tâches… Nous vous accompagnons dans votre projet d’IA pour vous préparer à l’avenir et anticiper les impacts de l’intelligence artificielle au sein de votre organisation.
          </p>
          <div className={styles.threeColumns}>
            <div className={styles.column}>
              <img
                src="pexels-fauxels-3183150.jpg"
                alt="Discussion sur le projet IA"
                className={styles.columnImage}
              />
              <h3 className={`${styles.columnTitle} ${styles.gradientText}`}>Discussion</h3>
              <p className={styles.columnText}>
                Nous échangeons sur votre projet IA et vous conseillons pour trouver une solution adaptable ou sur mesure.
              </p>
            </div>
            <div className={styles.column}>
              <img
                src="pexels-kevin-ku-92347-577585.jpg"
                alt="Création d'une solution IA personnalisée"
                className={styles.columnImage}
              />
              <h3 className={`${styles.columnTitle} ${styles.gradientText}`}>Création</h3>
              <p className={styles.columnText}>
                Nous traitons toutes vos données et développons une intelligence artificielle sur mesure. Données fiables et exploitables requises.
              </p>
            </div>
            <div className={styles.column}>
              <img
                src="google-deepmind-tikhtH3QRSQ-unsplash.jpg"
                alt="Transmission et formation sur une solution IA"
                className={styles.columnImage}
              />
              <h3 className={`${styles.columnTitle} ${styles.gradientText}`}>Transmission</h3>
              <p className={styles.columnText}>
                Nous vous partageons la solution IA tout en assurant une bonne prise en main de votre côté. IA as a Service (AIaaS) possible.
              </p>
            </div>
          </div>
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
        <Footer />
      </main>
    </div>
  );
}
