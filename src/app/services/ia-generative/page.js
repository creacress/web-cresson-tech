"use client";
import Head from "next/head";
import Script from "next/script";
import Header from "@/app/component/Header/Header";
import Footer from "@/app/component/Footer/Footer";
import styles from "../../styles/maitenance-pre.module.css";

export default function IAGenerative() {
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
        <meta
          property="og:url"
          content="https://webcresson.com/services/ia-generative"
        />
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
        <link
          rel="canonical"
          href="https://webcresson.com/services/ia-generative"
        />
      </Head>

      <Script type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IA Générative",
            "description": "Découvrez comment l'IA Générative peut transformer vos processus de création en générant automatiquement des contenus adaptés à vos besoins.",
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
            "category": "Création de contenu avec Intelligence Artificielle",
            "areaServed": "Global",
            "url": "https://webcresson.com/services/ia-generative"
          }
        `}
      </Script>

      <Header />
      <main className={styles.page}>
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>IA Générative</h1>

          {/* Contexte */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contexte</h2>
            <p className={styles.sectionText}>
              L’IA Générative révolutionne la création de contenus en permettant aux entreprises de générer automatiquement des textes, images, vidéos...
            </p>
            <ul className={styles.sectionList}>
              <li>
                <strong>Qualité et cohérence :</strong> Production homogène répondant aux standards.
              </li>
              <li>
                <strong>Personnalisation :</strong> Adaptation aux besoins spécifiques.
              </li>
              <li>
                <strong>Contrôle et éthique :</strong> Gestion des biais pour des résultats fiables.
              </li>
            </ul>
          </section>

          {/* Défis */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Défis</h2>
            <ul className={styles.sectionList}>
              <li>
                <strong>Volume élevé :</strong> Génération rapide de nombreux contenus uniques.
              </li>
              <li>
                <strong>Optimisation :</strong> Réduire les coûts tout en augmentant la production.
              </li>
              <li>
                <strong>Conformité :</strong> Respect des règles de copyright et d’utilisation des données.
              </li>
            </ul>
          </section>

          {/* Solutions apportées */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Solutions apportées</h2>
            <p className={styles.sectionText}>
              Nos solutions d’IA Générative répondent aux besoins des entreprises avec efficacité et créativité :
            </p>
            <ul className={styles.sectionList}>
              <li>Création automatisée de contenus textuels (rapports, articles, e-mails).</li>
              <li>Génération d’images et de visuels adaptés à votre identité de marque.</li>
              <li>Personnalisation pour des campagnes marketing ciblées.</li>
              <li>Automatisation des tâches chronophages.</li>
            </ul>
          </section>

          {/* Résultats */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
            <ul className={styles.sectionList}>
              <li>
                <strong>Augmentation de la productivité :</strong> Création rapide et efficace de contenus.
              </li>
              <li>
                <strong>Réduction des coûts :</strong> Moins de ressources pour des résultats supérieurs.
              </li>
              <li>
                <strong>Qualité constante :</strong> Des résultats toujours alignés avec vos attentes.
              </li>
              <li>
                <strong>Innovation renforcée :</strong> Possibilités créatives inédites.
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Conclusion</h2>
            <p className={styles.sectionText}>
              L’IA Générative ouvre la voie à une nouvelle ère de création automatisée. Découvrez comment intégrer ces technologies dans votre organisation.
            </p>
            <a
              href="/contact"
              className={styles.contextCTA}
              onClick={() => handleCtaClick("Contactez-nous pour IA Générative")}
            >
              Contactez-nous dès aujourd'hui !
            </a>
          </section>

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
