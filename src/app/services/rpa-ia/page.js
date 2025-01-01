"use client"; // Activer l'interactivité côté client

import Footer from "@/app/component/Footer/Footer";
import styles from "../../rpa-ia.module.css";
import Head from "next/head"; // Import pour les métadonnées

export default function ServicePage() {
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
                <title>RPA (Robotic Process Automation) - Optimisez vos processus métiers</title>
                <meta
                    name="description"
                    content="Découvrez comment nos solutions RPA transforment vos processus en automatisant la gestion des données et en améliorant la qualité des opérations."
                />
                <meta property="og:title" content="RPA (Robotic Process Automation) - Optimisez vos processus métiers" />
                <meta
                    property="og:description"
                    content="Grâce à nos solutions RPA, modernisez vos processus, améliorez la précision et libérez vos équipes pour des tâches à forte valeur ajoutée."
                />
                <meta property="og:url" content="https://cressontech.com/rpa" />
                <meta property="og:image" content="/default-og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="RPA (Robotic Process Automation) - Optimisez vos processus métiers" />
                <meta
                    name="twitter:description"
                    content="Automatisez la gestion des données et optimisez vos processus avec nos solutions RPA. Augmentez la précision et la productivité dès aujourd'hui."
                />
                <meta name="twitter:image" content="/default-og-image.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className={styles.page}>
                <div className={styles.mainContent}>
                    <h1 className={styles.mainTitle}>RPA (Robotic Process Automation)</h1>

                    {/* Contexte */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Contexte</h2>
                        <p className={styles.sectionText}>
                            À La Poste, nous avons mis en place une solution innovante basée sur la RPA (Robotic Process Automation) pour optimiser la qualité des données internes. Cette solution a permis d’automatiser et de rationaliser le traitement d’un flux de données moyen de <strong>20 000 données par cycle</strong>, en améliorant significativement la précision et la rapidité des opérations.
                        </p>
                        <p className={`${styles.sectionText} ${styles.contextHighlight}`}>
                            Avant l’implémentation de la RPA, les processus internes rencontraient plusieurs défis majeurs :
                        </p>
                        <ul className={styles.sectionList}>
                            <li><strong>Volumes de données importants :</strong> La gestion manuelle d’un tel volume engendrait une charge de travail conséquente pour les équipes.</li>
                            <li><strong>Erreurs humaines :</strong> La saisie et le contrôle manuel des données étaient sources d’inexactitudes, impactant la qualité globale des informations.</li>
                            <li><strong>Délais de traitement prolongés :</strong> Les processus manuels nécessitaient des temps d’exécution élevés, ralentissant les opérations et la prise de décision.</li>
                        </ul>
                        <p className={styles.sectionText}>
                            Grâce à cette automatisation, nous avons non seulement amélioré la qualité des données internes, mais également libéré les équipes pour des tâches à plus forte valeur ajoutée. Cette solution représente un levier clé pour moderniser et renforcer l’efficacité opérationnelle dans un environnement exigeant.
                        </p>
                        <a
                            href="/contact"
                            className={styles.contextCTA}
                            onClick={() => handleCtaClick("Contactez-nous pour en savoir plus")}
                        >
                            Contactez-nous pour en savoir plus
                        </a>
                    </section>

                    {/* Défis */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Défis</h2>
                        <ul className={styles.sectionList}>
                            <li><strong>Hétérogénéité des documents :</strong> Formats variés comme PDF, scans et images.</li>
                            <li><strong>Extraction des données :</strong> Extraction précise des champs critiques.</li>
                            <li><strong>Contrôle automatisé :</strong> Vérification de la conformité des documents.</li>
                            <li><strong>Flexibilité des processus :</strong> Adaptation aux évolutions réglementaires.</li>
                        </ul>
                    </section>

                    {/* Solutions apportées */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Solutions apportées</h2>
                        <p className={styles.sectionText}>
                            Nous avons conçu des solutions complètes et personnalisées pour répondre aux besoins des entreprises :
                        </p>
                        <ul className={styles.sectionList}>
                            <li>Reconnaissance de texte (OCR intelligent).</li>
                            <li>Extraction automatique des champs critiques comme les montants et les dates.</li>
                            <li>Vérification croisée pour valider les informations.</li>
                            <li>Automatisation des classements et archivages.</li>
                        </ul>
                    </section>

                    {/* Résultats */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
                        <ul className={styles.sectionList}>
                            <li><strong>Réduction des délais :</strong> Traitement plus rapide des dossiers.</li>
                            <li><strong>Amélioration de la précision :</strong> Moins d'erreurs grâce à l'automatisation.</li>
                            <li><strong>Augmentation de la productivité :</strong> Gestion simplifiée.</li>
                            <li><strong>Satisfaction client accrue :</strong> Résultats plus rapides et fiables.</li>
                        </ul>
                    </section>

                    {/* Conclusion */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Conclusion</h2>
                        <p className={styles.sectionText}>
                            Grâce à nos solutions, les entreprises peuvent moderniser leurs opérations, réduire les délais, et améliorer leur efficacité globale. Découvrez comment nos technologies peuvent transformer vos processus métiers.
                        </p>
                        <a
                            href="/contact"
                            className={styles.contextCTA}
                            onClick={() => handleCtaClick("Contactez-nous dès aujourd'hui")}
                        >
                            Contactez-nous dès aujourd'hui !
                        </a>
                    </section>
                    <Footer />
                </div>
            </div>
        </>
    );
}
