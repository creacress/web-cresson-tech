import styles from "../about.module.css";
import { FaLightbulb, FaHandshake, FaAward, FaUsers, FaLeaf } from "react-icons/fa";
import Footer from "../component/Footer/Footer";

export const metadata = {
  title: "À propos de Cresson Tech - Innovation technologique",
  description:
    "Découvrez Cresson Tech, une entreprise passionnée par l'innovation technologique. Nous aidons nos clients à exploiter l'intelligence artificielle pour transformer leurs entreprises.",
  openGraph: {
    title: "À propos de Cresson Tech",
    description:
      "Chez Cresson Tech, nous sommes passionnés par l'innovation technologique et aidons nos clients à tirer le meilleur parti de l'IA.",
    url: "https://cressontech.com/about",
    images: [
      {
        url: "/default-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Image représentant l'innovation chez Cresson Tech",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de Cresson Tech",
    description:
      "Chez Cresson Tech, nous transformons les entreprises grâce à l'innovation technologique.",
    images: ["/default-og-image.jpg"],
  },
};

export default function About() {
  return (
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

        {/* Section CTA */}
        
      <Footer/>
      </main>
    </div>
  );
}
