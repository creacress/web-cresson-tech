"use client"; // Activer l'interactivité côté client
import Footer from "@/app/component/Footer/Footer";
import styles from "../../rpa-ia.module.css";

export default function IATraitementImagePage() {
    return (
        <div className={styles.page}>
            <div className={styles.mainContent}>
                <h1 className={styles.mainTitle}>IA pour le Traitement d'Images</h1>

                {/* Contexte */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Contexte</h2>
                    <p className={styles.sectionText}>
                        Le traitement d'images par intelligence artificielle révolutionne de nombreux secteurs tels que la santé, la sécurité, le commerce et bien d'autres. En combinant l'analyse visuelle et l'apprentissage profond, nos solutions transforment vos images en informations exploitables et automatisent des tâches complexes.
                    </p>
                    <p className={`${styles.sectionText} ${styles.contextHighlight}`}>
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
                    <a href="/contact" className={styles.contextCTA}>
                        Contactez-nous dès aujourd'hui !
                    </a>
                </section>
                <Footer />
            </div>
        </div>
    );
}
