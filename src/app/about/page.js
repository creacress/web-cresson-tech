"use client";

import styles from "../styles/about.module.css";
import { FaLightbulb, FaHandshake, FaAward, FaUsers, FaLeaf } from "react-icons/fa";
import Footer from "../component/Footer/Footer";
import Script from "next/script"; // Pour ajouter des données structurées JSON-LD
import Header from "../component/Header/Header";
import Head from "next/head"; // Importer la balise Head de Next.js

const defaultMeta = {
  title: "WebCressonTech - Solutions technologiques innovantes en IA",
  description:
    "Découvrez les solutions d'intelligence artificielle, de machine learning et de deep learning proposées par WebCressonTech. Accélérez votre transformation digitale avec des outils IA adaptés.",
  keywords: "intelligence artificielle, machine learning, deep learning, solutions IA",
  author: "WebCressonTech",
  image: "https://www.webcresson.com/Logo_webcressontech.webp",
  url: "https://www.webcresson.com",
};

export default function About() {
  return (
    <>
      {/* Utilisation de next/head pour gérer les balises SEO */}
      <Head>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords} />
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:url" content={defaultMeta.url} />
        <meta property="og:image" content={defaultMeta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultMeta.title} />
        <meta name="twitter:description" content={defaultMeta.description} />
        <meta name="twitter:image" content={defaultMeta.image} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={defaultMeta.url} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Données structurées JSON-LD */}
      <Script type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "À propos de WebCressonTech",
          "description": "Découvrez WebCressonTech, une entreprise passionnée par l'innovation technologique et l'intelligence artificielle.",
          "url": "https://webcresson.com/about",
          "publisher": {
            "@type": "Organization",
            "name": "WebCressonTech",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.webcresson.com/Logo_webcressontech.webp",
              "width": 250,
              "height": 100
            }
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "WebCressonTech",
            "description": "Nous aidons nos clients à exploiter l'intelligence artificielle pour transformer leurs entreprises.",
            "foundingDate": "2020-01-01",
            "founders": [
              { "@type": "Person", "name": "CRESSON ALEXIS" }
            ],
            "sameAs": [
              "https://www.linkedin.com/in/alexis-cresson/"
            ]
          }
        }
        `}
      </Script>

      <Header />
      <div className={styles.page}>
        <main className={styles.mainContent}>
          {/* Section Introduction */}
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>À propos de WebCressonTech</h1>
            <p className={styles.heroText}>
              Chez WebCressonTech, nous sommes passionnés par l'innovation technologique.
              Notre mission est d'aider nos clients à tirer le meilleur parti de l'intelligence artificielle
              et des technologies avancées pour transformer leurs entreprises.
            </p>
          </section>

          {/* Section Valeurs */}
          <section className={styles.values}>
            <h2 className={styles.sectionTitle}>Nos Valeurs</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <FaLightbulb className={styles.icon} />
                <h3 className={styles.valueTitle}>Innovation et Créativité</h3>
                <p className={styles.valueText}>
                  Nous repoussons constamment les limites pour proposer des solutions uniques et innovantes.
                </p>
              </div>
              <div className={styles.valueCard}>
                <FaHandshake className={styles.icon} />
                <h3 className={styles.valueTitle}>Engagement envers nos Clients</h3>
                <p className={styles.valueText}>
                  Vos défis sont notre priorité, et nous travaillons en étroite collaboration pour les relever.
                </p>
              </div>
              <div className={styles.valueCard}>
                <FaAward className={styles.icon} />
                <h3 className={styles.valueTitle}>Excellence Technique</h3>
                <p className={styles.valueText}>
                  Nous maîtrisons les dernières technologies pour garantir des résultats exceptionnels.
                </p>
              </div>
              <div className={styles.valueCard}>
                <FaUsers className={styles.icon} />
                <h3 className={styles.valueTitle}>Collaboration</h3>
                <p className={styles.valueText}>
                  Unir nos forces pour atteindre des objectifs ambitieux est au cœur de nos valeurs.
                </p>
              </div>
              <div className={styles.valueCard}>
                <FaLeaf className={styles.icon} />
                <h3 className={styles.valueTitle}>Durabilité</h3>
                <p className={styles.valueText}>
                  Nous concevons des solutions respectueuses de l'environnement et durables dans le temps.
                </p>
              </div>
            </div>
          </section>

          {/* Section Équipe */}
          <section className={styles.team}>
            <h2 className={styles.sectionTitle}>L'équipe</h2>
            <p className={styles.teamText}>
              Une équipe multidisciplinaire, composée d'experts en développement, data science et automatisation,
              prête à relever vos défis technologiques.
            </p>
          </section>

          {/* Section Call-to-Action */}
          <section className={styles.ctas}>
            <a href="/contact" className={styles.primaryCta} title="Contactez-nous pour discuter de vos projets technologiques">
              Contactez-nous
            </a>
            <a href="/services" className={styles.secondaryCta} title="Découvrez nos services pour votre transformation digitale">
              Nos services
            </a>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}
