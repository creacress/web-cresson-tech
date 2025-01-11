"use client"; // Activer l'interactivité côté client

import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import styles from "../styles/ServicePage.module.css";
import Script from "next/script"; // Import pour les données structurées JSON-LD

export default function Service() {
  // Fonction pour suivre les clics sur les liens des services
  const handleLinkClick = (serviceTitle) => {
    if (typeof window !== "undefined") {
      window.gtag("event", "service_link_click", {
        event_category: "Navigation",
        event_label: serviceTitle,
      });
    }
  };

  return (
    <>
      <head>
        <title>Services - Expertise en Intelligence Artificielle | Web Cresson Tech</title>
        <meta
          name="description"
          content="Découvrez les solutions innovantes de Web Cresson Tech en intelligence artificielle. Nos expertises couvrent le traitement des données, la création de modèles d'IA et leur intégration pour transformer vos projets."
        />
        <meta property="og:title" content="Nos Services - Expertise en IA" />
        <meta
          property="og:description"
          content="Cresson Tech propose des solutions et expertises avancées en intelligence artificielle, incluant le traitement des données et l'intégration des modèles d'IA."
        />
        <meta property="og:url" content="https://webcresson.com/services" />
        <meta property="og:image" content="/default-services-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Expertise en IA | Cresson Tech" />
        <meta
          name="twitter:description"
          content="Découvrez comment Cresson Tech transforme vos projets grâce à des solutions en intelligence artificielle adaptées à vos besoins."
        />
        <meta name="twitter:image" content="/default-services-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>

        {/* Données structurées JSON-LD */}
        <Script type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Services en Intelligence Artificielle",
            "description":
              "Cresson Tech propose une large gamme de services en intelligence artificielle pour optimiser vos processus métiers et développer des solutions sur mesure.",
            "url": "https://webcresson.com/services",
            "itemListElement": servicesData.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              description: service.text,
              url: `https://webcresson.com/services${service.link}`,
            })),
          })}
        </Script>
<Header />
        <section className={styles.services}>
          <h1 className={styles.pageTitle}>
            Nos solutions et expertises en intelligence artificielle (IA)
          </h1>
          <p className={styles.pageDescription}>
            Chez Cresson Tech, nous proposons une large gamme de solutions basées sur l'IA,
            adaptées à vos besoins métiers et secteurs spécifiques.
          </p>
          <ul className={styles.servicesList}>
            {servicesData.map((service, index) => (
              <li className={styles.serviceCard} key={index}>
                <div className={styles.serviceHeader}>
                  <i className={`fas ${service.icon} ${styles.serviceIcon}`}></i>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
                <p className={styles.serviceText}>{service.text}</p>
                <a
                  href={service.link}
                  className={styles.cardButton}
                  onClick={() => handleLinkClick(service.title)}
                >
                  En savoir plus
                </a>
              </li>
            ))}
          </ul>
          <Footer />
        </section>
      </body>
    </>
  );
}

const servicesData = [
  {
    icon: "fa-tools",
    title: "Maintenance Prédictive",
    text: "Automatisez vos processus de contrôle avec la RPA, exploitez vos données pour prédire les maintenances, et analysez-les en temps réel grâce à l'IA pour anticiper les problèmes et éviter les pannes.",
    link: "/services/maintenance-predictive",
  },
  {
    icon: "fa-robot",
    title: "RPA et IA pour l'Automatisation des Processus",
    text: "Optimisez vos opérations grâce à l'automatisation des processus, en combinant la puissance de la RPA et de l'IA. Ces solutions s'intègrent facilement à vos outils digitaux existants ou sont personnalisées pour répondre à vos besoins spécifiques.",
    link: "/services/rpa-ia",
  },
  {
    icon: "fa-magic",
    title: "IA Générative",
    text: "Exploitez l'intelligence artificielle générative, adaptée à vos besoins métiers, avec des solutions existantes ou sur mesure pour automatiser des tâches récurrentes comme la génération de documents, de contenus, de visuels, de textes ou encore la saisie de données.",
    link: "/services/ia-generative",
  },
  {
    icon: "fa-compass",
    title: "IA pour l'Archéologie",
    text: "Utilisez l’intelligence artificielle pour analyser des données géospatiales et identifier des zones d’intérêt archéologique. Nos solutions permettent de traiter de grands volumes de données LiDAR ou géographiques pour détecter des structures cachées, modéliser des sites en 3D et optimiser les explorations. Intégrez ces outils dans vos projets pour des résultats innovants.",
    link: "/services/ia-archeologie",
  },
  {
    icon: "fa-image",
    title: "IA de traitement d'images",
    text: "Qu'il s'agisse d'améliorer la qualité d'un visuel, de modifier automatiquement son format ou d'automatiser des tâches chronophages liées aux images, l'IA de traitement d'image offre un large éventail de possibilités pour optimiser vos usages métiers.",
    link: "/services/ia-traitement-images",
  },
  {
    icon: "fa-cogs",
    title: "IA sur mesure",
    text: "Nous vous accompagnons dans tous vos projets d’IA, quels qu’ils soient. Notre expertise couvre une large gamme de technologies et de solutions pour répondre à vos besoins spécifiques.",
    link: "/services/ia-sur-mesure",
  },
  {
    icon: "fa-file-alt",
    title: "IA Administrative (OCR)",
    text: "L'IA révolutionne le domaine administratif : classement intelligent, présaisie et saisie automatique, contrôle documentaire, et automatisation des processus. Grâce à l'OCR et à l'intelligence artificielle, tout devient possible pour optimiser vos tâches administratives.",
    link: "/services/ia-administrative",
  },
  {
    icon: "fa-chart-line",
    title: "Pricing Dynamique et Analyse Avancée",
    text: "Exploitez la puissance de l’intelligence artificielle pour analyser de vastes volumes de données et obtenir des insights stratégiques. Intégrez ces résultats directement dans vos processus et outils métiers. Nos solutions incluent l'IA d’analyse concurrentielle (pricing dynamique) et l'IA d’analyse sectorielle pour des domaines tels que les RH, les achats ou la comptabilité.",
    link: "/services/pricing-analyse-avancee",
  },
  {
    icon: "fa-search",
    title: "Audit IA",
    text: "Évaluez et optimisez vos stratégies IA avec notre expertise en audit. Nous vous aidons à identifier vos opportunités technologiques, à améliorer vos modèles existants, et à garantir la conformité réglementaire.",
    link: "/services/audit-ia",
  },
  {
    icon: "fa-plug",
    title: "Intégration SAAS avec IA",
    text: "Améliorez vos outils SAAS grâce à l’intégration de technologies d’intelligence artificielle pour des performances accrues et des fonctionnalités avancées adaptées à vos besoins métiers.",
    link: "/services/integration-saas-ia",
  },
];
