"use client";

import styles from "../about.module.css";
import { FaLightbulb, FaHandshake, FaAward, FaUsers, FaLeaf } from "react-icons/fa";
import Footer from "../component/Footer/Footer";
import Head from "next/head"; // Import de Head pour les métadonnées dynamiques

export default function About() {
  return (
    <>
      {/* Balises SEO */}
      <Head>
        <title>À propos de Cresson Tech - Innovation technologique</title>
        <meta
          name="description"
          content="Découvrez Cresson Tech, une entreprise passionnée par l'innovation technologique. Nous aidons nos clients à exploiter l'intelligence artificielle pour transformer leurs entreprises."
        />
        <meta property="og:title" content="À propos de Cresson Tech" />
        <meta
          property="og:description"
          content="Chez Cresson Tech, nous sommes passionnés par l'innovation technologique et aidons nos clients à tirer le meilleur parti de l'IA."
        />
        <meta property="og:url" content="https://cressontech.com/about" />
        <meta
          property="og:image"
          content="/default-og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À propos de Cresson Tech" />
        <meta
          name="twitter:description"
          content="Chez Cresson Tech, nous transformons les entreprises grâce à l'innovation technologique."
        />
        <meta name="twitter:image" content="/default-og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.page}>
        <main className={styles.mainContent}>
          {/* Section Introduction */}
          <section className={styles.hero}>
            <h1>À propos de Cresson Tech</h1>
            <p className={styles.heroText}>
              Chez Cresson Tech, nous sommes passionnés par l'innovation technologique. 
              Notre mission est d'aider nos clients à tirer le meilleur parti de l'intelligence artificielle 
              et des technologies avancées pour transformer leurs entreprises.
            </p>
          </section>

          {/* Section Valeurs */}
          <section className={styles.values}>
            <h2>Nos Valeurs</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <FaLightbulb className={styles.icon} />
                <h3>Innovation et Créativité</h3>
                <p>Nous repoussons constamment les limites pour proposer des solutions uniques et innovantes.</p>
              </div>
              <div className={styles.valueCard}>
                <FaHandshake className={styles.icon} />
                <h3>Engagement envers nos Clients</h3>
                <p>Vos défis sont notre priorité, et nous travaillons en étroite collaboration pour les relever.</p>
              </div>
              <div className={styles.valueCard}>
                <FaAward className={styles.icon} />
                <h3>Excellence Technique</h3>
                <p>Nous maîtrisons les dernières technologies pour garantir des résultats exceptionnels.</p>
              </div>
              <div className={styles.valueCard}>
                <FaUsers className={styles.icon} />
                <h3>Collaboration</h3>
                <p>Unir nos forces pour atteindre des objectifs ambitieux est au cœur de nos valeurs.</p>
              </div>
              <div className={styles.valueCard}>
                <FaLeaf className={styles.icon} />
                <h3>Durabilité</h3>
                <p>Nous concevons des solutions respectueuses de l'environnement et durables dans le temps.</p>
              </div>
            </div>
          </section>

          {/* Section Équipe */}
          <section className={styles.team}>
            <h2>L'équipe</h2>
            <p className={styles.heroText}>
              Une équipe multidisciplinaire, composée d'experts en développement, data science et automatisation, 
              prête à relever vos défis technologiques.
            </p>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}
