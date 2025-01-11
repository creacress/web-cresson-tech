"use client"; // Activer l'interactivité côté client

import Footer from "@/app/component/Footer/Footer";
import styles from "../../styles/maitenance-pre.module.css"; // Import des styles centralisés
import Script from "next/script"; // Gestion des données structurées JSON-LD
import Header from "@/app/component/Header/Header";

export default function MaintenancePredictive() {
    // Fonction pour suivre les clics sur le CTA
    const handleCtaClick = (label) => {
        if (typeof window !== "undefined") {
            window.gtag("event", "cta_click", {
                event_category: "Interaction",
                event_label: label,
            });
        }
    };

    // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            {/* SEO avec next/head */}
            <head>
                <title>Maintenance Prédictive - Transformez vos opérations avec l'IA</title>
                <meta
                    name="description"
                    content="Découvrez comment nos solutions de maintenance prédictive basées sur l'intelligence artificielle peuvent anticiper les pannes et optimiser vos opérations."
                />
                <meta
                    property="og:title"
                    content="Maintenance Prédictive - Transformez vos opérations avec l'IA"
                />
                <meta
                    property="og:description"
                    content="Avec l'intelligence artificielle, la maintenance prédictive permet de réduire les coûts et d'améliorer la productivité. Contactez-nous dès maintenant."
                />
                <meta property="og:url" content="https://webcresson.com/services/maintenance-predictive" />
                <meta property="og:image" content="/default-og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Maintenance Prédictive - Transformez vos opérations avec l'IA"
                />
                <meta
                    name="twitter:description"
                    content="Avec l'intelligence artificielle, la maintenance prédictive permet de réduire les coûts et d'améliorer la productivité. Contactez-nous dès maintenant."
                />
                <meta name="twitter:image" content="/default-og-image.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                {/* Données structurées JSON-LD */}
                <Script type="application/ld+json" strategy="afterInteractive">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Maintenance Prédictive",
                        "description": "Découvrez comment nos solutions de maintenance prédictive basées sur l'intelligence artificielle peuvent anticiper les pannes et optimiser vos opérations.",
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
                                    "category": "Solutions de maintenance prédictive par IA",
                                    "areaServed": "Global",
                                    "url": "https://webcresson.com/services/maintenance-predictive"
                                    }
                                    `}
                </Script>
                <Header />
                <div className={styles.page}>
                    <div className={styles.mainContent}>
                        <h1 className={styles.mainTitle}>Maintenance Prédictive</h1>

                        {/* Contexte */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Contexte</h2>
                            <p className={styles.sectionText}>
                                La maintenance prédictive utilise l'intelligence artificielle pour analyser en temps réel les données des équipements. Elle permet d'anticiper les pannes avant qu'elles ne se produisent, réduisant ainsi les coûts et les interruptions imprévues.
                            </p>
                            <div className={styles.sectionHighlight}>
                                <p>Avant l’implémentation de la maintenance prédictive, les entreprises font face à plusieurs problématiques :</p>
                                <ul className={styles.sectionList}>
                                    <li><strong>Manque de prévisibilité :</strong> Les pannes surviennent souvent de manière inattendue.</li>
                                    <li><strong>Coûts élevés :</strong> Les interruptions non planifiées augmentent les dépenses.</li>
                                    <li><strong>Perte de productivité :</strong> Les équipements en panne ralentissent les opérations.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Solutions apportées */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Solutions apportées</h2>
                            <p className={styles.sectionText}>
                                Avec nos solutions de maintenance prédictive, les entreprises peuvent :
                            </p>
                            <ul className={styles.sectionList}>
                                <li>Analyser les données des capteurs en temps réel.</li>
                                <li>Identifier les signaux précurseurs de pannes potentielles.</li>
                                <li>Planifier les interventions au moment opportun.</li>
                                <li>Optimiser la durée de vie des équipements.</li>
                            </ul>
                        </section>

                        {/* Résultats */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
                            <ul className={styles.sectionList}>
                                <li><strong>Réduction des coûts :</strong> Diminution des interventions imprévues.</li>
                                <li><strong>Amélioration de la productivité :</strong> Meilleure gestion des ressources.</li>
                                <li><strong>Fiabilité accrue :</strong> Les équipements fonctionnent de manière optimale.</li>
                                <li><strong>Satisfaction client :</strong> Des services plus fiables et rapides.</li>
                            </ul>
                        </section>

                        {/* Conclusion */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Conclusion</h2>
                            <p className={styles.sectionText}>
                                Adoptez la maintenance prédictive pour transformer vos opérations et garantir une efficacité optimale. Découvrez comment nos solutions peuvent aider votre entreprise à rester à la pointe de l'innovation.
                            </p>
                            <a
                                href="/contact"
                                className={styles.contextCTA}
                                onClick={() => handleCtaClick("Contactez-nous dès aujourd'hui")}
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
            </body>
        </>
    );
}
