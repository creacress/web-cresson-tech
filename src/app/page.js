"use client";

import styles from "./styles/home.module.css";
import Footer from "./component/Footer/Footer";
import CookieModal from "./component/CookieModal/CookieModal";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Image from "next/image";
import Header from "./component/Header/Header";
import ComparisonSection from "./component/ComparisonSection/ComparisonSection";

const defaultMeta = {
  title: "WebCressonTech - Expert en IA et solutions technologiques",
  description:
    "WebCressonTech accompagne les entreprises dans leurs projets IA avec des solutions sur mesure : gestion des données, machine learning, et infrastructures modernes.",
  keywords: "intelligence artificielle, machine learning, deep learning, solutions IA, WebCressonTech",
  author: "WebCressonTech",
  image: "https://www.webcresson.com/Logo_webcressontech.webp",
  url: "https://www.webcresson.com",
};

export default function Home(meta) {
  const pageMeta = { ...defaultMeta, ...meta };
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-H206EG4TH7"); // Remplacez par votre propre ID Google Analytics
    }
  }, []);

  const handleClickEvent = (label, path) => {
    if (typeof window !== "undefined") {
      window.gtag("event", "button_click", {
        event_category: "User Interaction",
        event_label: label,
      });
    }
    router.push(path);
  };

  return (
    <>
      <head>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta name="keywords" content={pageMeta.keywords} />
        <meta name="author" content={pageMeta.author} />
        <meta property="og:title" content={pageMeta.title} />
        <meta property="og:description" content={pageMeta.description} />
        <meta property="og:image" content={pageMeta.image} />
        <meta property="og:url" content={pageMeta.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMeta.title} />
        <meta name="twitter:description" content={pageMeta.description} />
        <meta name="twitter:image" content={pageMeta.image} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={pageMeta.url} />
      </head>

      <body>

        {/* Données structurées JSON-LD */}
        <Script type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Accueil - WebCressonTech",
            "description": "WebCressonTech aide les entreprises à relever les défis de l'intelligence artificielle avec des solutions sur mesure.",
            "url": "https://www.webcresson.com",
            "publisher": {
              "@type": "Organization",
              "name": "WebCressonTech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.webcresson.com/Logo_webcressontech.webp"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Développement IA",
                  "description": "Optimisation et extension des solutions IA existantes pour répondre aux nouveaux défis."
                },
                {
                  "@type": "Service",
                  "name": "Création IA sur mesure",
                  "description": "Développement de solutions IA personnalisées adaptées à vos besoins."
                },
                {
                  "@type": "Service",
                  "name": "Audit et Conseil en IA",
                  "description": "Analyse approfondie et recommandations stratégiques."
                },
                {
                  "@type": "Service",
                  "name": "Machine Learning et Deep Learning",
                  "description": "Conception et déploiement de modèles avancés."
                },
                {
                  "@type": "Service",
                  "name": "Intégration SAAS avec IA",
                  "description": "Amélioration des solutions SAAS par l'intégration d'IA."
                },
                {
                  "@type": "Service",
                  "name": "Maintenance des Solutions IA",
                  "description": "Support continu pour garantir la performance et la pérennité."
                }
              ]
            }
          }
          `}
        </Script>

        <Header />
        <div className={styles.page}>
          <main className={styles.mainContent}>
            {/* Section Hero */}
            <section className={styles.hero}>
              <h1 className={styles.heroTitle}>
                WebCressonTech : Votre partenaire IA
              </h1>
              <p className={styles.heroText}>
                Offrez à votre entreprise un avantage compétitif grâce à des solutions innovantes en intelligence artificielle.
              </p>
              <button
                className={styles.ctaButton}
                onClick={() => handleClickEvent("CTA Button - Découvrir nos services", "/services")}
              >
                Découvrir nos services
              </button>
            </section>

            <ComparisonSection />

            {/* Section Services */}
            <section className={styles.services}>
              <h2 className={styles.sectionTitle}>Nos services IA</h2>
              <ul className={styles.servicesList}>
                <li className={styles.serviceItem}>
                  <Image
                    src="/Développement_IA.webp"
                    alt="Développement IA"
                    width={300}
                    height={300}
                    className={styles.serviceImage}
                    onClick={() => window.location.href = "/services"}
                  />
                  <div className={styles.serviceContent}>
                    <h3>Développement sur solutions IA existantes</h3>
                    <p>
                      Optimisation et extension des systèmes IA pour répondre aux nouveaux défis technologiques.
                    </p>
                  </div>
                </li>
                <li className={styles.serviceItem}>
                  <Image
                    src="/Création_IA_sur_mesure.webp"
                    alt="Création IA sur mesure"
                    width={300}
                    height={300}
                    className={styles.serviceImage}
                    onClick={() => window.location.href = "/services/ia-sur-mesure"}
                  />
                  <div className={styles.serviceContent}>
                    <h3>Création d’intelligence artificielle sur mesure</h3>
                    <p>
                      Développement de solutions IA personnalisées adaptées à vos besoins spécifiques.
                    </p>
                  </div>
                </li>
                <li className={styles.serviceItem}>
                  <Image
                    src="/Audit_IA.webp"
                    alt="Audit IA"
                    width={300}
                    height={300}
                    className={styles.serviceImage}
                    onClick={() => window.location.href = "/services/audit-ia"}
                  />
                  <div className={styles.serviceContent}>
                    <h3>Audit et conseil en stratégie IA</h3>
                    <p>
                      Analyse approfondie et recommandations pour réussir votre transformation numérique.
                    </p>
                  </div>
                </li>
                <li className={styles.serviceItem}>
                  <Image
                    src="/Machine_Learning.webp"
                    alt="Machine Learning"
                    width={300}
                    height={300}
                    className={styles.serviceImage}
                    onClick={() => window.location.href = "/services"}
                  />
                  <div className={styles.serviceContent}>
                    <h3>Machine Learning et Deep Learning</h3>
                    <p>
                      Conception et déploiement de modèles d’apprentissage automatique et profond.
                    </p>
                  </div>
                </li>
                <li className={styles.serviceItem}>
                  <Image
                    src="/Intégration_SAAS.webp"
                    alt="Intégration SAAS"
                    width={300}
                    height={300}
                    className={styles.serviceImage}
                    onClick={() => window.location.href = "/services/integration-saas-ia"}
                  />
                  <div className={styles.serviceContent}>
                    <h3>Intégration SAAS avec IA</h3>
                    <p>
                      Amélioration de vos solutions SAAS grâce à l’intégration de technologies d’intelligence artificielle.
                    </p>
                  </div>
                </li>
                <li className={styles.serviceItem}>
                  <Image
                    src="/Maintenance_IA.webp"
                    alt="Maintenance IA"
                    width={300}
                    height={300}
                    className={styles.serviceImage}
                    onClick={() => window.location.href = "/services/maintenance-predictive"}
                  />
                  <div className={styles.serviceContent}>
                    <h3>Maintenance et évolution des solutions IA</h3>
                    <p>
                      Support continu pour garantir la performance et la pérennité de vos solutions IA.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section Pourquoi nous choisir */}
            <section className={styles.whyChooseUs}>
              <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
              <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                  <h3>Expertise certifiée</h3>
                  <p>Une équipe expérimentée en IA et technologies avancées.</p>
                </div>
                <div className={styles.featureCard}>
                  <h3>Solutions innovantes</h3>
                  <p>Utilisation des outils les plus modernes.</p>
                </div>
                <div className={styles.featureCard}>
                  <h3>Accompagnement</h3>
                  <p>Support complet, de l'idée à la mise en production.</p>
                </div>
              </div>
            </section>

            <CookieModal />
            <Footer />
          </main>
        </div>
      </body>
    </>
  );
}
