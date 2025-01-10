"use client"; // Activer l'interactivité côté client

import Footer from "@/app/component/Footer/Footer";
import styles from "../../styles/maitenance-pre.module.css"; // Import du CSS centralisé
import Head from "next/head"; // Import pour la gestion des métadonnées
import Script from "next/script"; // Pour les données structurées JSON-LD

export default function IAAdministrativePage() {
  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Fonction pour suivre les clics sur le CTA
  const handleCtaClick = (label) => {
    if (typeof window !== "undefined") {
      window.gtag("event", "cta_click", {
        event_category: "Interaction",
        event_label: label,
      });
    }
  };

  return (
    <>
      {/* SEO avec next/head */}
      <Head>
        <title>IA Administrative (OCR) - Simplifiez vos processus documentaires</title>
        <meta
          name="description"
          content="Découvrez nos solutions IA et OCR pour automatiser vos processus administratifs. Réduisez les erreurs, gagnez du temps et respectez les normes réglementaires."
        />
        <meta
          property="og:title"
          content="IA Administrative (OCR) - Simplifiez vos processus documentaires"
        />
        <meta
          property="og:description"
          content="Découvrez comment nos technologies IA et OCR transforment la gestion documentaire en automatisant les tâches administratives complexes."
        />
        <meta property="og:url" content="https://webcresson.com/services/ia-administrative" />
        <meta property="og:image" content="/default-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IA Administrative (OCR) - Simplifiez vos processus documentaires"
        />
        <meta
          name="twitter:description"
          content="Automatisez vos tâches administratives avec nos solutions IA et OCR : extraction de données, classification, conformité, et plus."
        />
        <meta name="twitter:image" content="/default-og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Données structurées JSON-LD */}
      <Script type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IA Administrative (OCR)",
            "description": "Découvrez nos solutions IA et OCR pour automatiser vos processus administratifs. Réduisez les erreurs, gagnez du temps et respectez les normes réglementaires.",
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
            "category": "OCR et Intelligence Artificielle",
            "areaServed": "Global",
            "url": "https://webcresson.com/services/ia-administrative"
          }
        `}
      </Script>

      <div className={styles.page}>
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>IA Administrative (OCR)</h1>

          {/* Contexte */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contexte</h2>
            <p className={styles.sectionText}>
              Les entreprises sont confrontées à une gestion administrative complexe et chronophage. L’intelligence artificielle, combinée à la reconnaissance optique de caractères (OCR), permet d’automatiser les tâches liées à la gestion documentaire et à la saisie de données. Ces technologies modernisent les processus administratifs en réduisant les erreurs et en accélérant le traitement des informations.
            </p>
            <ul className={styles.sectionList}>
              <li>
                <strong>Traitement manuel des documents :</strong> Long et sujet à des erreurs humaines.
              </li>
              <li>
                <strong>Volume élevé de données :</strong> Des centaines, voire des milliers de documents à traiter quotidiennement.
              </li>
              <li>
                <strong>Conformité :</strong> Nécessité de respecter des réglementations strictes.
              </li>
            </ul>
          </section>

          {/* Défis */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Défis</h2>
            <ul className={styles.sectionList}>
              <li>
                <strong>Extraction précise :</strong> Identifier les informations critiques dans des documents variés (PDF, images, scans).
              </li>
              <li>
                <strong>Classification automatique :</strong> Trier et organiser les documents en catégories spécifiques.
              </li>
              <li>
                <strong>Gestion des anomalies :</strong> Détecter et corriger les erreurs dans les données extraites.
              </li>
              <li>
                <strong>Respect des normes :</strong> Assurer la conformité réglementaire dans le traitement des données.
              </li>
            </ul>
          </section>

          {/* Solutions apportées */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Solutions apportées</h2>
            <p className={styles.sectionText}>
              Nos solutions basées sur l’OCR et l’intelligence artificielle offrent des outils performants pour simplifier vos processus administratifs :
            </p>
            <ul className={styles.sectionList}>
              <li>Extraction automatisée des données clés à partir de factures, contrats, et autres documents.</li>
              <li>Classification intelligente des documents pour une organisation optimale.</li>
              <li>Détection et résolution d’anomalies dans les données extraites.</li>
              <li>Archivage automatisé et accessible grâce à des bases de données modernes.</li>
            </ul>
          </section>

          {/* Résultats */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
            <ul className={styles.sectionList}>
              <li>
                <strong>Réduction du temps de traitement :</strong> Automatisation des tâches administratives fastidieuses.
              </li>
              <li>
                <strong>Précision accrue :</strong> Extraction fiable des informations critiques.
              </li>
              <li>
                <strong>Conformité améliorée :</strong> Respect des réglementations grâce à des processus standardisés.
              </li>
              <li>
                <strong>Amélioration de la productivité :</strong> Réaffectation des ressources à des tâches à forte valeur ajoutée.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Transformez vos processus dès aujourd'hui</h2>
            <p className={styles.sectionText}>
              Modernisez vos processus administratifs avec nos solutions d’IA et d’OCR. Gagnez en efficacité et réduisez vos coûts opérationnels.
            </p>
            <a
              href="/contact"
              className={styles.contextCTA}
              onClick={() => handleCtaClick("Contactez-nous dès aujourd'hui")}
            >
              Contactez-nous dès aujourd'hui !
            </a>
          </section>

          {/* Actions supplémentaires */}
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
    </>
  );
}
