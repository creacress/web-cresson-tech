"use client"; // Activer l'interactivité côté client

import Footer from "@/app/component/Footer/Footer";
import styles from "../../styles/maitenance-pre.module.css"; // Import du CSS centralisé
import Script from "next/script"; // Import pour les données structurées JSON-LD
import Header from "@/app/component/Header/Header";

export default function ArcheologiePage() {
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
        event_label: "Contactez-nous Archéologie",
      });
    }
  };

  return (
    <>
      {/* SEO avec next/head */}
      <head>
        <title>IA pour l'Archéologie - Révolutionnez l'exploration historique</title>
        <meta
          name="description"
          content="Découvrez comment l'IA et les données LiDAR transforment l'archéologie moderne. Accélérez vos découvertes et améliorez l'analyse géospatiale."
        />
        <meta
          property="og:title"
          content="IA pour l'Archéologie - Révolutionnez l'exploration historique"
        />
        <meta
          property="og:description"
          content="L'intelligence artificielle optimise les données géospatiales pour l'archéologie. Découvrez comment nos solutions accélèrent vos projets."
        />
        <meta property="og:url" content="https://webcresson.com/services/ia-archeologie" />
        <meta property="og:image" content="/default-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IA pour l'Archéologie - Révolutionnez l'exploration historique"
        />
        <meta
          name="twitter:description"
          content="Nos solutions IA pour l'archéologie transforment les données brutes en découvertes exploitables."
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
            "name": "IA pour l'Archéologie",
            "description": "Découvrez comment l'IA et les données LiDAR transforment l'archéologie moderne. Accélérez vos découvertes et améliorez l'analyse géospatiale.",
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
            "category": "Archéologie et Intelligence Artificielle",
            "areaServed": "Global",
            "url": "https://webcresson.com/services/ia-archeologie"
          }
        `}
        </Script>
        <Header />
        <div className={styles.page}>
          <div className={styles.mainContent}>
            <h1 className={styles.mainTitle}>IA pour l'Archéologie</h1>

            {/* Contexte */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Contexte</h2>
              <p className={styles.sectionText}>
                L’archéologie moderne fait face à des défis majeurs avec des données volumineuses issues de technologies comme le LiDAR et les relevés géographiques. L’intelligence artificielle permet de transformer ces données en informations exploitables pour accélérer les découvertes et optimiser les recherches.
              </p>
              <ul className={styles.sectionList}>
                <li>
                  <strong>Volume massif de données :</strong> Les relevés géospatiaux génèrent des millions de points qu’il est difficile d’analyser manuellement.
                </li>
                <li>
                  <strong>Temps d’analyse prolongé :</strong> Identifier des zones d’intérêt ou des anomalies nécessite un effort considérable.
                </li>
                <li>
                  <strong>Manque de précision :</strong> L’identification manuelle est souvent sujette à des biais humains.
                </li>
              </ul>
            </section>

            {/* Défis */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Défis</h2>
              <ul className={styles.sectionList}>
                <li>
                  <strong>Analyse de données 3D :</strong> Interprétation des données LiDAR complexes.
                </li>
                <li>
                  <strong>Détection automatique :</strong> Identifier des structures cachées ou des zones d’intérêt.
                </li>
                <li>
                  <strong>Visualisation :</strong> Modélisation intuitive des découvertes pour faciliter l’interprétation.
                </li>
                <li>
                  <strong>Traitement rapide :</strong> Réduction du délai entre acquisition des données et résultats exploitables.
                </li>
              </ul>
            </section>

            {/* Solutions apportées */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Solutions apportées</h2>
              <p className={styles.sectionText}>
                Nos solutions exploitent l’intelligence artificielle pour révolutionner les méthodes archéologiques :
              </p>
              <ul className={styles.sectionList}>
                <li>Clustering et analyse automatique des points géospatiaux pour détecter des structures cachées.</li>
                <li>Création de modèles 3D à partir de données brutes.</li>
                <li>Visualisation interactive des résultats avec des outils modernes.</li>
                <li>Segmentation avancée des relevés pour cibler des zones spécifiques.</li>
              </ul>
            </section>

            {/* Résultats */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
              <ul className={styles.sectionList}>
                <li>
                  <strong>Découvertes accélérées :</strong> Réduction du temps nécessaire pour identifier des sites d’intérêt.
                </li>
                <li>
                  <strong>Précision accrue :</strong> Analyse automatisée éliminant les biais humains.
                </li>
                <li>
                  <strong>Exploration augmentée :</strong> Détection de structures souvent invisibles avec des méthodes traditionnelles.
                </li>
                <li>
                  <strong>Support décisionnel :</strong> Résultats exploitables pour guider les campagnes sur le terrain.
                </li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Conclusion</h2>
              <p className={styles.sectionText}>
                L’IA révolutionne l’archéologie en transformant des données brutes en découvertes. Rejoignez-nous pour intégrer ces technologies à vos projets et accélérer l’exploration de notre passé.
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
