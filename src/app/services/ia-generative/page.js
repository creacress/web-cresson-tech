"use client"; // Activer l'interactivité côté client

import Footer from "@/app/component/Footer/Footer";
import styles from "../../maitenance-pre.module.css"; // Import du CSS centralisé
import Head from "next/head"; // Import pour la gestion des métadonnées

export default function IAGenerative() {
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
        <title>IA Générative - Boostez votre créativité et votre productivité</title>
        <meta
          name="description"
          content="Découvrez comment l'IA Générative peut transformer vos processus de création en générant automatiquement des contenus adaptés à vos besoins."
        />
        <meta
          property="og:title"
          content="IA Générative - Boostez votre créativité et votre productivité"
        />
        <meta
          property="og:description"
          content="L’IA Générative révolutionne la création de contenus : textes, images, vidéos, et plus. Découvrez nos solutions innovantes pour votre entreprise."
        />
        <meta property="og:url" content="https://cressontech.com/rpa-ia/generative" />
        <meta property="og:image" content="/default-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IA Générative - Boostez votre créativité et votre productivité"
        />
        <meta
          name="twitter:description"
          content="Nos solutions d'IA Générative vous permettent de créer automatiquement des contenus personnalisés, tout en respectant votre identité de marque."
        />
        <meta name="twitter:image" content="/default-og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.page}>
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>IA Générative</h1>

          {/* Contexte */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contexte</h2>
            <p className={styles.sectionText}>
              L’IA Générative révolutionne la création de contenus en permettant aux entreprises de générer automatiquement des textes, des images, des vidéos et bien plus encore. Ces solutions basées sur des modèles d’apprentissage profond sont idéales pour répondre aux besoins créatifs à grande échelle tout en maintenant une qualité exceptionnelle.
            </p>
            <ul className={styles.sectionList}>
              <li>
                <strong>Qualité et cohérence :</strong> Assurer une production homogène répondant aux standards de l’entreprise.
              </li>
              <li>
                <strong>Personnalisation :</strong> Adapter les contenus générés aux besoins spécifiques des utilisateurs ou des marchés cibles.
              </li>
              <li>
                <strong>Contrôle et éthique :</strong> Gérer les biais algorithmiques pour garantir des résultats fiables et inclusifs.
              </li>
            </ul>
          </section>

          {/* Défis */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Défis</h2>
            <ul className={styles.sectionList}>
              <li>
                <strong>Volume élevé de contenus :</strong> Générer rapidement un grand nombre de créations uniques.
              </li>
              <li>
                <strong>Optimisation des ressources :</strong> Réduire les coûts tout en augmentant la production.
              </li>
              <li>
                <strong>Conformité réglementaire :</strong> Respecter les règles de copyright et d’utilisation des données.
              </li>
            </ul>
          </section>

          {/* Solutions apportées */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Solutions apportées</h2>
            <p className={styles.sectionText}>
              Nos solutions d’IA Générative sont conçues pour répondre aux besoins des entreprises avec efficacité et créativité :
            </p>
            <ul className={styles.sectionList}>
              <li>Création automatisée de contenus textuels (rapports, articles, e-mails).</li>
              <li>Génération d’images et de visuels adaptés à votre identité de marque.</li>
              <li>Personnalisation des contenus pour des campagnes marketing ciblées.</li>
              <li>Automatisation des tâches chronophages comme la rédaction et l’édition.</li>
            </ul>
          </section>

          {/* Résultats */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
            <ul className={styles.sectionList}>
              <li>
                <strong>Augmentation de la productivité :</strong> Création rapide et efficace de contenus divers.
              </li>
              <li>
                <strong>Réduction des coûts :</strong> Moins de ressources nécessaires pour des résultats équivalents ou supérieurs.
              </li>
              <li>
                <strong>Qualité constante :</strong> Résultats toujours alignés avec les attentes de l’entreprise.
              </li>
              <li>
                <strong>Innovation renforcée :</strong> Accès à des possibilités créatives inédites.
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Conclusion</h2>
            <p className={styles.sectionText}>
              L’IA Générative ouvre la voie à une nouvelle ère de création automatisée, offrant aux entreprises des outils puissants pour transformer leurs processus et dépasser leurs objectifs. Découvrez comment intégrer ces technologies dans votre organisation.
            </p>
            <a
              href="/contact"
              className={styles.contextCTA}
              onClick={() => handleCtaClick("Contactez-nous dès aujourd'hui pour IA Générative")}
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
    </>
  );
}
