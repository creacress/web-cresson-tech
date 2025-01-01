"use client"; // Activer l'interactivité côté client

import styles from '../../maitenance-pre.module.css';
import Head from 'next/head'; // Import pour les métadonnées

export default function MaintenancePredictive() {
  // Fonction pour suivre les clics sur le CTA
  const handleCtaClick = () => {
    if (typeof window !== "undefined") {
      window.gtag("event", "cta_click", {
        event_category: "Interaction",
        event_label: "Contactez-nous Maintenance Prédictive",
      });
    }
  };

  return (
    <>
      {/* SEO avec next/head */}
      <Head>
        <title>Maintenance Prédictive - Optimisez vos équipements</title>
        <meta
          name="description"
          content="Découvrez nos solutions de maintenance prédictive basées sur l'IA, qui permettent d'anticiper les pannes, réduire les coûts et améliorer la productivité."
        />
        <meta property="og:title" content="Maintenance Prédictive - Optimisez vos équipements" />
        <meta
          property="og:description"
          content="Nos solutions de maintenance prédictive utilisent l'intelligence artificielle pour analyser en temps réel les données des équipements et anticiper les pannes."
        />
        <meta property="og:url" content="https://cressontech.com/maintenance-predictive" />
        <meta property="og:image" content="/default-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maintenance Prédictive - Optimisez vos équipements" />
        <meta
          name="twitter:description"
          content="Anticipez les pannes, réduisez les interruptions imprévues et optimisez la durée de vie de vos équipements grâce à nos solutions de maintenance prédictive."
        />
        <meta name="twitter:image" content="/default-og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.page}>
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>Maintenance Prédictive</h1>

          {/* Contexte */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contexte</h2>
            <p className={styles.sectionText}>
              La maintenance prédictive utilise l'intelligence artificielle pour analyser en temps réel les données des équipements. Elle permet d'anticiper les pannes avant qu'elles ne se produisent, réduisant ainsi les coûts et les interruptions imprévues.
            </p>
            <p className={`${styles.sectionText} ${styles.contextHighlight}`}>
              Avant l’implémentation de la maintenance prédictive, les entreprises font face à plusieurs problématiques :
            </p>
            <ul className={styles.sectionList}>
              <li><strong>Manque de prévisibilité :</strong> Les pannes surviennent souvent de manière inattendue.</li>
              <li><strong>Coûts élevés :</strong> Les interruptions non planifiées augmentent les dépenses.</li>
              <li><strong>Perte de productivité :</strong> Les équipements en panne ralentissent les opérations.</li>
            </ul>
          </section>

          {/* Solutions apportées */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Solutions apportées</h2>
            <p className={styles.sectionText}>
              Avec nos solutions de maintenance prédictive, les entreprises peuvent :
            </p>
            <ul className={styles.sectionList}>
              <li>Analyser les données des capteurs en temps réel.</li>
              <li>Identifier les signaux précurseurs de pannes potentielles.</li>
              <li>Planifier les interventions au moment opportun.</li>
              <li>Optimiser la durée de vie des équipements.</li>
            </ul>
          </section>

          {/* Résultats */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
            <ul className={styles.sectionList}>
              <li><strong>Réduction des coûts :</strong> Diminution des interventions imprévues.</li>
              <li><strong>Amélioration de la productivité :</strong> Meilleure gestion des ressources.</li>
              <li><strong>Fiabilité accrue :</strong> Les équipements fonctionnent de manière optimale.</li>
              <li><strong>Satisfaction client :</strong> Des services plus fiables et rapides.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Conclusion</h2>
            <p className={styles.sectionText}>
              Adoptez la maintenance prédictive pour transformer vos opérations et garantir une efficacité optimale. Découvrez comment nos solutions peuvent aider votre entreprise à rester à la pointe de l'innovation.
            </p>
            <a
              href="/contact"
              className={styles.contextCTA}
              onClick={handleCtaClick}
            >
              Contactez-nous dès aujourd'hui !
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
