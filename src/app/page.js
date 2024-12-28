import styles from "./home.module.css";

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
          <h2 className={styles.sectionTitle}>Nos solutions et expertises en intelligence artificielle (IA)</h2>
          <ul className={styles.servicesList}>
            <li>
              <h3 className={styles.serviceTitle}>Maintenance Prédictive</h3>
              <p className={styles.serviceText}>Automatisez vos processus de contrôle avec la RPA, exploitez vos données pour prédire les maintenances, et analysez-les en temps réel grâce à l'IA pour anticiper les problèmes et éviter les pannes.</p>
            </li>
            <li>
              <h3 className={styles.serviceTitle}>RPA et IA pour l'Automatisation des Processus</h3>
              <p className={styles.serviceText}>
                Optimisez vos opérations grâce à l'automatisation des processus, en combinant la puissance de la RPA et de l'IA. Ces solutions s'intègrent facilement à vos outils digitaux existants ou sont personnalisées pour répondre à vos besoins spécifiques.
              </p>
            </li>
            <li>
              <h3 className={styles.serviceTitle}>IA Générative</h3>
              <p className={styles.serviceText}>Exploitez l'intelligence artificielle générative, adaptée à vos besoins métiers, avec des solutions existantes ou sur mesure pour automatiser des tâches récurrentes comme la génération de documents, de contenus, de visuels, de textes ou encore la saisie de données.</p>
            </li>
            <li>
              <h3 className={styles.serviceTitle}>IA de traitement d'iamges</h3>
              <p className={styles.serviceText}>Qu'il s'agisse d'améliorer la qualité d'un visuel, de modifier automatiquement son format ou d'automatiser des tâches chronophages liées aux images, l'IA de traitement d'image offre un large éventail de possibilités pour optimiser vos usages métiers.</p>
            </li>
            <li>
              <h3 className={styles.serviceTitle}>IA sur mesure</h3>
              <p className={styles.serviceText}>Nous vous accompagnons dans tous vos projets d’IA, quels qu’ils soient. Notre expertise couvre une large gamme de technologies et de solutions pour répondre à vos besoins spécifiques.</p>
            </li>
            <li>
              <h3 className={styles.serviceTitle}>IA Administrative (OCR)</h3>
              <p className={styles.serviceText}>L'IA révolutionne le domaine administratif : classement intelligent, présaisie et saisie automatique, contrôle documentaire, et automatisation des processus. Grâce à l'OCR et à l'intelligence artificielle, tout devient possible pour optimiser vos tâches administratives.</p>
            </li>
            <li>
              <h3 className={styles.serviceTitle}>Pricing Dynamique et Analyse Avancée</h3>
              <p className={styles.serviceText}>
                Exploitez la puissance de l’intelligence artificielle pour analyser de vastes volumes de données et obtenir des insights stratégiques. Intégrez ces résultats directement dans vos processus et outils métiers. Nos solutions incluent l'IA d’analyse concurrentielle (pricing dynamique) et l'IA d’analyse sectorielle pour des domaines tels que les RH, les achats ou la comptabilité.
              </p>
            </li>

          </ul>
        </section>
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

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerTop}>
              <div className={styles.footerSection}>
                <h3>WebCressonTech</h3>
                <p>Experte en IA</p>
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
                  <a href="https://www.malt.fr" target="_blank" rel="noopener noreferrer" className={styles.secondaryCta}>
                    Malt
                  </a>
                </div>
              </div>
              <div className={styles.footerSection}>
                <p>
                  5, Rte de Marienthal - 67500 Haguenau
                  <br />
                  03 68 03 45 84
                  <br />
                  <a href="mailto:contact@digitalia.fr" className={styles.mailLink}>
                    contact@digitalia.fr
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <div className={styles.footerLinks}>
                <a href="/about">Accueil</a>
                <a href="/services">L’agence IA</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/terms">Conditions de ventes</a>
                <a href="/privacy">Mentions légales</a>
              </div>
              <p>© 2024 Digitalia. Tous droits réservés.</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
