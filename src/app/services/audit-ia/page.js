"use client";
import Head from "next/head";
import Script from "next/script";
import Header from "@/app/component/Header/Header";
import Footer from "@/app/component/Footer/Footer";
import styles from "../../styles/maitenance-pre.module.css";

export default function AuditIAPage() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
      <Head>
        <title>Audit IA - Optimisez vos stratégies d'intelligence artificielle</title>
        <meta
          name="description"
          content="Découvrez nos services d'audit en IA pour évaluer et optimiser vos stratégies technologiques. Identifiez vos forces et vos axes d'amélioration."
        />
        <meta
          property="og:title"
          content="Audit IA - Optimisez vos stratégies d'intelligence artificielle"
        />
        <meta
          property="og:description"
          content="Avec notre service d'audit en IA, identifiez les opportunités et améliorez l'efficacité de vos initiatives d'intelligence artificielle."
        />
        <meta
          property="og:url"
          content="https://webcresson.com/services/audit-ia"
        />
        <meta property="og:image" content="/default-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Audit IA - Optimisez vos stratégies d'intelligence artificielle"
        />
        <meta
          name="twitter:description"
          content="Identifiez vos opportunités technologiques avec notre expertise en audit d'intelligence artificielle."
        />
        <meta name="twitter:image" content="/default-og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://webcresson.com/services/audit-ia" />
      </Head>

      <Script type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Audit IA",
            "description": "Découvrez nos services d'audit en IA pour évaluer et optimiser vos stratégies technologiques. Identifiez vos forces et vos axes d'amélioration.",
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
            "category": "Audit et Stratégie IA",
            "areaServed": "Global",
            "url": "https://webcresson.com/services/audit-ia"
          }
        `}
      </Script>

      <Header />
      <main className={styles.page}>
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>Audit IA</h1>

          {/* Contexte */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contexte</h2>
            <p className={styles.sectionText}>
              Les entreprises investissent de plus en plus dans l’intelligence artificielle. Cependant, de nombreuses initiatives échouent à atteindre leurs objectifs en raison d'une planification inadéquate ou d'un manque d'expertise technique. Notre service d'audit en IA vise à évaluer vos stratégies actuelles et à identifier les opportunités d'amélioration.
            </p>
          </section>

          {/* Défis */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Défis</h2>
            <ul className={styles.sectionList}>
              <li>
                <strong>Alignement stratégique :</strong> Assurer que l'IA soutient vos objectifs d'affaires.
              </li>
              <li>
                <strong>Évaluation des données :</strong> Garantir que vos données sont prêtes pour des solutions IA efficaces.
              </li>
              <li>
                <strong>Optimisation des algorithmes :</strong> Identifier les inefficacités dans vos modèles IA existants.
              </li>
              <li>
                <strong>Conformité réglementaire :</strong> Veiller à ce que vos projets respectent les normes en vigueur.
              </li>
            </ul>
          </section>

          {/* Solutions apportées */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Solutions apportées</h2>
            <p className={styles.sectionText}>
              Grâce à notre expertise, nous vous aidons à maximiser la valeur de vos initiatives en IA :
            </p>
            <ul className={styles.sectionList}>
              <li>Analyse complète de vos processus et de vos données.</li>
              <li>Identification des opportunités de gains d’efficacité.</li>
              <li>Recommandations stratégiques adaptées à votre secteur.</li>
              <li>Optimisation des modèles IA pour des performances accrues.</li>
            </ul>
          </section>

          {/* Résultats */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
            <ul className={styles.sectionList}>
              <li>
                <strong>Performance accrue :</strong> Maximisation de l’impact de vos solutions IA.
              </li>
              <li>
                <strong>Réduction des risques :</strong> Alignement stratégique et conformité renforcée.
              </li>
              <li>
                <strong>Décisions éclairées :</strong> Données et modèles optimisés pour soutenir vos objectifs d'affaires.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Améliorez vos projets IA dès aujourd'hui</h2>
            <p className={styles.sectionText}>
              Faites appel à nos experts pour un audit complet de vos initiatives en intelligence artificielle.
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
        </div>
      </main>
      <Footer />
    </>
  );
}
