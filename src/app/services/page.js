import styles from "./home.module.css";


export default function Service() {
    return (
    <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Nos solutions et expertises en intelligence artificielle (IA)</h2>
        <ul className={styles.servicesList}>
          <li className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <i className="fas fa-tools"></i>
              <h3 className={styles.serviceTitle}>Maintenance Prédictive</h3>
            </div>
            <p className={styles.serviceText}>
              Automatisez vos processus de contrôle avec la RPA, exploitez vos données pour prédire les maintenances, et analysez-les en temps réel grâce à l'IA pour anticiper les problèmes et éviter les pannes.
            </p>
            <a href="/services/maintenance-predictive" className={styles.cardButton}>En savoir plus</a>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <i className="fas fa-robot"></i>
              <h3 className={styles.serviceTitle}>RPA et IA pour l'Automatisation des Processus</h3>
            </div>
            <p className={styles.serviceText}>
              Optimisez vos opérations grâce à l'automatisation des processus, en combinant la puissance de la RPA et de l'IA. Ces solutions s'intègrent facilement à vos outils digitaux existants ou sont personnalisées pour répondre à vos besoins spécifiques.
            </p>
            <a href="/services/rpa-ia" className={styles.cardButton}>En savoir plus</a>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <i className="fas fa-magic"></i>
              <h3 className={styles.serviceTitle}>IA Générative</h3>
            </div>
            <p className={styles.serviceText}>
              Exploitez l'intelligence artificielle générative, adaptée à vos besoins métiers, avec des solutions existantes ou sur mesure pour automatiser des tâches récurrentes comme la génération de documents, de contenus, de visuels, de textes ou encore la saisie de données.
            </p>
            <a href="/services/ia-generative" className={styles.cardButton}>En savoir plus</a>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <i className="fas fa-image"></i>
              <h3 className={styles.serviceTitle}>IA de traitement d'images</h3>
            </div>
            <p className={styles.serviceText}>
              Qu'il s'agisse d'améliorer la qualité d'un visuel, de modifier automatiquement son format ou d'automatiser des tâches chronophages liées aux images, l'IA de traitement d'image offre un large éventail de possibilités pour optimiser vos usages métiers.
            </p>
            <a href="/ia-traitement-images" className={styles.cardButton}>En savoir plus</a>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <i className="fas fa-cogs"></i>
              <h3 className={styles.serviceTitle}>IA sur mesure</h3>
            </div>
            <p className={styles.serviceText}>
              Nous vous accompagnons dans tous vos projets d’IA, quels qu’ils soient. Notre expertise couvre une large gamme de technologies et de solutions pour répondre à vos besoins spécifiques.
            </p>
            <a href="/ia-sur-mesure" className={styles.cardButton}>En savoir plus</a>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <i className="fas fa-file-alt"></i>
              <h3 className={styles.serviceTitle}>IA Administrative (OCR)</h3>
            </div>
            <p className={styles.serviceText}>
              L'IA révolutionne le domaine administratif : classement intelligent, présaisie et saisie automatique, contrôle documentaire, et automatisation des processus. Grâce à l'OCR et à l'intelligence artificielle, tout devient possible pour optimiser vos tâches administratives.
            </p>
            <a href="/ia-administrative" className={styles.cardButton}>En savoir plus</a>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <i className="fas fa-chart-line"></i>
              <h3 className={styles.serviceTitle}>Pricing Dynamique et Analyse Avancée</h3>
            </div>
            <p className={styles.serviceText}>
              Exploitez la puissance de l’intelligence artificielle pour analyser de vastes volumes de données et obtenir des insights stratégiques. Intégrez ces résultats directement dans vos processus et outils métiers. Nos solutions incluent l'IA d’analyse concurrentielle (pricing dynamique) et l'IA d’analyse sectorielle pour des domaines tels que les RH, les achats ou la comptabilité.
            </p>
            <a href="/pricing-analyse-avancee" className={styles.cardButton}>En savoir plus</a>
          </li>
        </ul>
      </section>
      )
}