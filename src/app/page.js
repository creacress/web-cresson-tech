"use client"; // Indique que ce composant est rendu côté client

import styles from "./home.module.css";
import Footer from "./component/Footer/Footer";
import CookieModal from "./component/CookieModal/CookieModal";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Pour optimiser les images

export default function Home() {
  const router = useRouter();

  // Initialisation de Google Analytics
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

  // Gestion des clics pour les événements
  const handleClickEvent = (label) => {
    if (typeof window !== "undefined") {
      window.gtag("event", "button_click", {
        event_category: "User Interaction",
        event_label: label,
      });
    }
    // Redirection vers la page Services
    router.push("/services");
  };

  return (
    <div className={styles.page}>
      <main className={styles.mainContent}>
        {/* Section Hero */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle_h1}>
            Agence experte en Intelligence Artificielle
          </h1>
          <p className={styles.heroText}>
            Nous aidons les entreprises à relever les défis de l'intelligence
            artificielle, de la gestion des données aux infrastructures, en passant
            par des solutions IA existantes ou entièrement sur mesure.
          </p>
        </section>

        {/* Section Services */}
        <section className={styles.services}>
          <h2 className={styles.servicesTitle}>
            Conception et développement d’Intelligence Artificielle.
          </h2>
          <p className={styles.servicesText}>
            La transformation numérique est un sujet au cœur des préoccupations des
            entreprises. WebCressonTech vous accompagne sur les challenges IA.
          </p>
          <ul className={styles.servicesList}>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>
                Développement sur solutions IA existantes
              </span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>
                Développement intelligence artificielle sur-mesure
              </span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Conseil et diagnostic IA</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>Machine et Deep Learning</span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>
                SAAS et Intelligence Artificielle intégrées
              </span>
            </li>
            <li className={styles.serviceItem}>
              <span className={styles.highlight}>
                Maintenance et évolution sur IA existantes
              </span>
            </li>
          </ul>
          <button
            className={styles.ctaButton}
            onClick={() => handleClickEvent("CTA Button - Nos études de cas")}
          >
            Nos services
          </button>
        </section>

        {/* Section Projet IA */}
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>
            Un projet de développement d'intelligence artificielle ?
          </h2>
          <p className={styles.heroText}>
            Notre agence IA maîtrise les différents outils de l’intelligence
            artificielle : Machine learning, Deep learning, Computer vision,
            Traitement de langage, Automatisation de tâches… Nous vous accompagnons
            dans votre projet d’IA pour vous préparer à l’avenir et anticiper les
            impacts de l’intelligence artificielle au sein de votre organisation.
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
                Discussion
              </h3>
              <p className={styles.columnText}>
                Nous échangeons sur votre projet IA et vous conseillons pour
                trouver une solution adaptable ou sur mesure.
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
                Création
              </h3>
              <p className={styles.columnText}>
                Nous traitons toutes vos données et développons une intelligence
                artificielle sur mesure. Données fiables et exploitables requises.
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
                Transmission
              </h3>
              <p className={styles.columnText}>
                Nous vous partageons la solution IA tout en assurant une bonne
                prise en main de votre côté. IA as a Service (AIaaS) possible.
              </p>
            </div>
          </div>
        </section>

        {/* Section Pourquoi nous choisir */}
        <section className={styles.whyChooseUs}>
          <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Expertise</h3>
              <p className={styles.featureText}>
                Une équipe de professionnels expérimentés dans le domaine
                technologique.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Innovation</h3>
              <p className={styles.featureText}>
                Des solutions modernes basées sur les dernières technologies.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Résultats</h3>
              <p className={styles.featureText}>
                Un accompagnement garanti vers la réussite de vos projets.
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
