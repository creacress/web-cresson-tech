"use client"; // Indique que ce composant est rendu côté client

import styles from "./home.module.css";
import Footer from "./component/Footer/Footer";
import CookieModal from "./component/CookieModal/CookieModal";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Image from "next/image";

export default function Home() {
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

  const handleClickEvent = (label) => {
    if (typeof window !== "undefined") {
      window.gtag("event", "button_click", {
        event_category: "User Interaction",
        event_label: label,
      });
    }
    router.push("/services");
  };

  return (
    <div className={styles.page}>
      <Script type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Accueil - WebCressonTech",
            "description": "WebCressonTech aide les entreprises à relever les défis de l'intelligence artificielle avec des solutions sur mesure : gestion des données, infrastructures modernes et outils IA.",
            "url": "https://www.webcresson.com",
            "publisher": {
              "@type": "Organization",
              "name": "WebCressonTech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.webcresson.com/Logo_webcressontech.webp"
              }
            },
            "inLanguage": "fr"
          }
        `}
      </Script>

      <main className={styles.mainContent}>
        {/* Section Hero */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle_h1}>
            Votre expert en intelligence artificielle
          </h1>
          <p className={styles.heroText}>
            WebCressonTech vous accompagne dans vos projets IA en offrant une
            expertise complète : gestion de données, infrastructures modernes
            et solutions sur mesure adaptées à vos besoins.
          </p>
        </section>

        {/* Section Services */}
        <section className={styles.services}>
          <h2 className={styles.servicesTitle}>Nos services IA</h2>
          <p className={styles.servicesText}>
            Conception et développement de solutions IA avancées. La
            transformation numérique est essentielle pour les entreprises
            modernes. Notre équipe vous aide à intégrer des solutions IA qui
            transforment vos défis en opportunités.
          </p>
          <ul className={styles.servicesList}>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>
                Développement sur solutions IA existantes
              </span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>
                Création d’intelligence artificielle sur mesure
              </span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Audit et conseil en stratégie IA</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Machine Learning et Deep Learning</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Intégration SAAS avec IA</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>
                Maintenance et évolution des solutions IA
              </span>
            </li>
          </ul>
          <button
            className={styles.ctaButton}
            onClick={() => handleClickEvent("CTA Button - Nos services")}
          >
            Découvrir nos services
          </button>
        </section>

        {/* Section Projet IA */}
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>
            Un projet d’intelligence artificielle ?
          </h2>
          <p className={styles.heroText}>
            Nous maîtrisons les outils et technologies de l’intelligence
            artificielle : Machine Learning, Deep Learning, Vision par
            Ordinateur, Traitement de Langage Naturel (NLP), Automatisation des
            Processus...
          </p>
          <div className={styles.threeColumns}>
            <div className={styles.column}>
              <Image
                src="/pexels-fauxels-3183150.webp"
                alt="Discussion sur le projet IA"
                className={styles.columnImage}
                width={300}
                height={200}
              />
              <h3 className={`${styles.columnTitle} ${styles.gradientText}`}>
                Analyse & Discussion
              </h3>
              <p className={styles.columnText}>
                Identifions ensemble vos besoins pour concevoir une solution
                adaptée.
              </p>
            </div>
            <div className={styles.column}>
              <Image
                src="/pexels-kevin-ku-92347-577585.webp"
                alt="Création d'une solution IA personnalisée"
                className={styles.columnImage}
                width={300}
                height={200}
              />
              <h3 className={`${styles.columnTitle} ${styles.gradientText}`}>
                Création & Développement
              </h3>
              <p className={styles.columnText}>
                Exploitez vos données avec des solutions IA personnalisées et
                fiables.
              </p>
            </div>
            <div className={styles.column}>
              <Image
                src="/google-deepmind-tikhtH3QRSQ-unsplash.webp"
                alt="Transmission et formation sur une solution IA"
                className={styles.columnImage}
                width={300}
                height={200}
              />
              <h3 className={`${styles.columnTitle} ${styles.gradientText}`}>
                Formation & Transmission
              </h3>
              <p className={styles.columnText}>
                Adoptez facilement la solution grâce à nos conseils et
                formations.
              </p>
            </div>
          </div>
        </section>

        {/* Section Pourquoi nous choisir */}
        <section className={styles.whyChooseUs}>
          <h2 className={styles.sectionTitle}>Pourquoi choisir WebCressonTech ?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Expertise certifiée</h3>
              <p className={styles.featureText}>
                Une équipe expérimentée en IA et nouvelles technologies.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Solutions innovantes</h3>
              <p className={styles.featureText}>
                Utilisation des technologies les plus avancées.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Résultats concrets</h3>
              <p className={styles.featureText}>
                Un accompagnement jusqu’à la réussite de vos projets.
              </p>
            </div>
          </div>
          <CookieModal />
        </section>

        <Footer />
      </main>
    </div>
  );
}
