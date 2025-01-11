"use client"; // Activer l'interactivité côté client

import Footer from "@/app/component/Footer/Footer";
import styles from "../../styles/maitenance-pre.module.css"; // Import du CSS centralisé
import Script from "next/script"; // Import pour les données structurées JSON-LD
import Header from "@/app/component/Header/Header";

export default function IASurMesurePage() {
  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Fonction pour suivre les clics sur le CTA
  const handleCtaClick = () => {
    if (typeof window !== "undefined") {
      window.gtag("event", "cta_click", {
        event_category: "Interaction",
        event_label: "Contactez-nous IA Sur Mesure",
      });
    }
  };

  return (
    <>
      {/* SEO avec next/head */}
      <head>
        <title>IA Sur Mesure - Des solutions adaptées à vos besoins</title>
        <meta
          name="description"
          content="Découvrez nos solutions d'IA sur mesure, conçues pour répondre à vos défis spécifiques et optimiser vos processus métiers."
        />
        <meta
          property="og:title"
          content="IA Sur Mesure - Des solutions adaptées à vos besoins"
        />
        <meta
          property="og:description"
          content="Transformez vos données en opportunités avec nos solutions d'IA sur mesure. Automatisation, analyse prédictive et visualisation personnalisée."
        />
        <meta property="og:url" content="https://webcresson.com/services/ia-sur-mesure" />
        <meta property="og:image" content="/default-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IA Sur Mesure - Des solutions adaptées à vos besoins"
        />
        <meta
          name="twitter:description"
          content="Explorez comment l'IA sur mesure peut révolutionner vos processus et améliorer vos performances métier."
        />
        <meta name="twitter:image" content="/default-og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>

        {/* Données structurées JSON-LD */}
        <Script type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IA Sur Mesure",
            "description": "Découvrez nos solutions d'IA sur mesure, conçues pour répondre à vos défis spécifiques et optimiser vos processus métiers.",
            "provider": {
              "@type": "Organization",
              "name": "Cresson Tech",
              "url": "https://webcresson.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://webcresson.com/Logo_webcressontech.webp",
                "width": 250,
                "height": 100
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+33-7-66-02-96-32",
                  "contactType": "Customer Service",
                  "email": "contact@webcresson.com",
                  "availableLanguage": ["French", "English"]
                  }
                  },
                  "category": "Solutions d'Intelligence Artificielle sur mesure",
                  "areaServed": "Global",
            "url": "https://webcresson.com/services/ia-sur-mesure"
            }
            `}
        </Script>
        <Header />
        <div className={styles.page}>
          <div className={styles.mainContent}>
            <h1 className={styles.mainTitle}>IA Sur Mesure</h1>

            {/* Contexte */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Contexte</h2>
              <p className={styles.sectionText}>
                Chaque entreprise est unique et nécessite des solutions adaptées à ses besoins spécifiques. L’intelligence artificielle sur mesure offre une approche personnalisée, capable de répondre à des problématiques complexes tout en s’intégrant harmonieusement à vos processus existants.
              </p>
              <p className={styles.sectionText}>
                Nos solutions d'IA sur mesure visent à résoudre des défis tels que :
              </p>
              <ul className={styles.sectionList}>
                <li>
                  <strong>Optimisation des processus métiers :</strong> Automatisation et rationalisation des tâches répétitives.
                </li>
                <li>
                  <strong>Analyse prédictive :</strong> Anticiper les tendances grâce aux modèles personnalisés.
                </li>
                <li>
                  <strong>Amélioration de la prise de décision :</strong> Informations exploitables basées sur vos données spécifiques.
                </li>
              </ul>
            </section>

            {/* Défis */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Défis</h2>
              <ul className={styles.sectionList}>
                <li>
                  <strong>Hétérogénéité des données :</strong> Structurées, non structurées ou semi-structurées.
                </li>
                <li>
                  <strong>Intégration avec les systèmes existants :</strong> Compatibilité et migration sans interruption.
                </li>
                <li>
                  <strong>Scalabilité :</strong> Adaptabilité aux besoins croissants de l’entreprise.
                </li>
                <li>
                  <strong>Personnalisation :</strong> Répondre précisément aux besoins métiers.
                </li>
              </ul>
            </section>

            {/* Solutions apportées */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Solutions apportées</h2>
              <p className={styles.sectionText}>
                Nous proposons une gamme complète de services pour concevoir une IA sur mesure adaptée à vos objectifs :
              </p>
              <ul className={styles.sectionList}>
                <li>Développement de modèles d'apprentissage automatique adaptés à vos données.</li>
                <li>Optimisation des processus métiers par l’automatisation intelligente.</li>
                <li>Visualisation de données et tableaux de bord dynamiques pour un suivi précis.</li>
                <li>Formation et support pour une adoption réussie par vos équipes.</li>
              </ul>
            </section>

            {/* Résultats */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
              <ul className={styles.sectionList}>
                <li>
                  <strong>Gain de temps :</strong> Réduction des tâches manuelles grâce à l’automatisation.
                </li>
                <li>
                  <strong>Décisions éclairées :</strong> Résultats exploitables issus d’analyses avancées.
                </li>
                <li>
                  <strong>Flexibilité accrue :</strong> Solutions évolutives adaptées à vos besoins futurs.
                </li>
                <li>
                  <strong>Amélioration de la productivité :</strong> Des processus simplifiés et performants.
                </li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Conclusion</h2>
              <p className={styles.sectionText}>
                Nos solutions d’IA sur mesure transforment vos données en opportunités, vous offrant un avantage concurrentiel durable. Découvrez comment l’intelligence artificielle peut révolutionner vos activités.
              </p>
              <a
                href="/contact"
                className={styles.contextCTA}
                onClick={handleCtaClick}
              >
                Contactez-nous dès aujourd'hui !
              </a>
            </section>

            {/* Boutons supplémentaires */}
            <div className={styles.extraActions}>
              <button className={styles.scrollToTop} onClick={scrollToTop}>
                Remonter en haut
              </button>
              <a href="/services" className={styles.otherServices}>
                Voir d'autres services
              </a>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
