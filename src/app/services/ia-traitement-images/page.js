"use client"; // Activer l'interactivité côté client

import Footer from "@/app/component/Footer/Footer";
import styles from "../../maitenance-pre.module.css"; // Import du CSS centralisé
import Head from "next/head"; // Import pour les métadonnées
import Script from "next/script"; // Import pour les données structurées JSON-LD

export default function IATraitementImagePage() {
    // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // Fonction pour suivre les clics sur le CTA
    const handleCtaClick = () => {
        if (typeof window !== "undefined") {
            window.gtag("event", "cta_click", {
                event_category: "Interaction",
                event_label: "Contactez-nous IA Traitement d'Images",
            });
        }
    };

    return (
        <>
            {/* SEO avec next/head */}
            <Head>
                <title>IA pour le Traitement d'Images - Transformez vos visuels en opportunités</title>
                <meta
                    name="description"
                    content="Découvrez nos solutions de traitement d'images par intelligence artificielle pour automatiser, analyser et exploiter vos données visuelles efficacement."
                />
                <meta
                    property="og:title"
                    content="IA pour le Traitement d'Images - Transformez vos visuels en opportunités"
                />
                <meta
                    property="og:description"
                    content="L'IA révolutionne le traitement d'images grâce à des algorithmes avancés pour la reconnaissance, l'amélioration et l'analyse des visuels."
                />
                <meta property="og:url" content="https://webcresson.com/services/ia-traitement-images" />
                <meta property="og:image" content="/default-og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="IA pour le Traitement d'Images - Transformez vos visuels en opportunités"
                />
                <meta
                    name="twitter:description"
                    content="Automatisez vos processus et analysez vos images ou vidéos avec précision grâce à nos solutions IA spécialisées."
                />
                <meta name="twitter:image" content="/default-og-image.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Données structurées JSON-LD */}
            <Script type="application/ld+json" strategy="afterInteractive">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "IA pour le Traitement d'Images",
                        "description": "Découvrez nos solutions de traitement d'images par intelligence artificielle pour automatiser, analyser et exploiter vos données visuelles efficacement.",
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
                        "category": "Traitement d'Images par Intelligence Artificielle",
                        "areaServed": "Global",
                        "url": "https://webcresson.com/services/ia-traitement-images"
                    }
                `}
            </Script>

            <div className={styles.page}>
                <div className={styles.mainContent}>
                    <h1 className={styles.mainTitle}>IA pour le Traitement d'Images</h1>

                    {/* Contexte */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Contexte</h2>
                        <p className={styles.sectionText}>
                            Le traitement d'images par intelligence artificielle révolutionne de nombreux secteurs tels que la santé, la sécurité, le commerce et bien d'autres. En combinant l'analyse visuelle et l'apprentissage profond, nos solutions transforment vos images en informations exploitables et automatisent des tâches complexes.
                        </p>
                        <p className={styles.sectionText}>
                            Voici quelques-unes des applications concrètes du traitement d'images par IA :
                        </p>
                        <ul className={styles.sectionList}>
                            <li><strong>Reconnaissance d’objets :</strong> Détection précise d'objets dans des images ou vidéos.</li>
                            <li><strong>Classification d'images :</strong> Organisation automatique des visuels par catégories.</li>
                            <li><strong>Amélioration d'images :</strong> Augmentation de la qualité, réduction du bruit et amélioration de la résolution.</li>
                            <li><strong>Analyse de vidéos :</strong> Surveillance et suivi en temps réel pour divers usages.</li>
                        </ul>
                    </section>

                    {/* Défis */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Défis</h2>
                        <ul className={styles.sectionList}>
                            <li><strong>Qualité des données :</strong> Images floues, bruitées ou à faible résolution.</li>
                            <li><strong>Volume important :</strong> Traitement d'énormes volumes d'images en un temps réduit.</li>
                            <li><strong>Précision :</strong> Nécessité de modèles performants pour des résultats fiables.</li>
                            <li><strong>Temps réel :</strong> Réponse rapide pour des applications critiques comme la sécurité.</li>
                        </ul>
                    </section>

                    {/* Solutions apportées */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Solutions apportées</h2>
                        <p className={styles.sectionText}>
                            Nos solutions de traitement d'images utilisent des algorithmes de pointe pour répondre à vos besoins spécifiques :
                        </p>
                        <ul className={styles.sectionList}>
                            <li>Détection automatique d’objets ou d’anomalies dans des images ou vidéos.</li>
                            <li>Analyse des images médicales pour détecter des pathologies avec précision.</li>
                            <li>Création de modèles personnalisés pour la reconnaissance faciale, la lecture de plaques d’immatriculation ou d'autres tâches spécialisées.</li>
                            <li>Amélioration de la qualité des visuels pour une meilleure interprétation.</li>
                        </ul>
                    </section>

                    {/* Résultats */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
                        <ul className={styles.sectionList}>
                            <li><strong>Gain de temps :</strong> Automatisation des processus, réduisant les délais de traitement.</li>
                            <li><strong>Précision accrue :</strong> Analyse visuelle fiable et élimination des erreurs humaines.</li>
                            <li><strong>Valeur ajoutée :</strong> Transforme des données visuelles brutes en insights exploitables.</li>
                            <li><strong>Scalabilité :</strong> Capacité à gérer un volume croissant d'images ou de vidéos.</li>
                        </ul>
                    </section>

                    {/* Conclusion */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Conclusion</h2>
                        <p className={styles.sectionText}>
                            Le traitement d'images par IA vous offre des possibilités infinies pour améliorer vos opérations et obtenir un avantage concurrentiel. Contactez-nous pour explorer comment nos solutions peuvent répondre à vos besoins uniques.
                        </p>
                        <a
                            href="/contact"
                            className={styles.contextCTA}
                            onClick={handleCtaClick}
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
