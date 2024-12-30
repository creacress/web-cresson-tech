"use client"; // Activer l'interactivité côté client
import Footer from "@/app/component/Footer/Footer";
import styles from "../../archeologie-ia.module.css";


export default function ArcheologiePage() {
    return (
        <div className={styles.page}>
            <div className={styles.mainContent}>
                <h1 className={styles.mainTitle}>IA pour l'Archéologie</h1>

                {/* Contexte */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Contexte</h2>
                    <p className={styles.sectionText}>
                        L’archéologie moderne fait face à des défis majeurs avec des données volumineuses issues de technologies comme le LiDAR et les relevés géographiques. L’intelligence artificielle permet de transformer ces données en informations exploitables pour accélérer les découvertes et optimiser les recherches.
                    </p>
                    <p className={`${styles.sectionText} ${styles.contextHighlight}`}>
                        Avant l'intégration de l’IA, les processus d’analyse géospatiale étaient limités par :
                    </p>
                    <ul className={styles.sectionList}>
                        <li><strong>Volume massif de données :</strong> Les relevés géospatiaux génèrent des millions de points qu’il est difficile d’analyser manuellement.</li>
                        <li><strong>Temps d’analyse prolongé :</strong> Identifier des zones d’intérêt ou des anomalies nécessite un effort considérable.</li>
                        <li><strong>Manque de précision :</strong> L’identification manuelle est souvent sujette à des biais humains.</li>
                    </ul>
                </section>

                {/* Défis */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Défis</h2>
                    <ul className={styles.sectionList}>
                        <li><strong>Analyse de données 3D :</strong> Interprétation des données LiDAR complexes.</li>
                        <li><strong>Détection automatique :</strong> Identifier des structures cachées ou des zones d’intérêt.</li>
                        <li><strong>Visualisation :</strong> Modélisation intuitive des découvertes pour faciliter l’interprétation.</li>
                        <li><strong>Traitement rapide :</strong> Réduction du délai entre acquisition des données et résultats exploitables.</li>
                    </ul>
                </section>

                {/* Solutions apportées */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Solutions apportées</h2>
                    <p className={styles.sectionText}>
                        Nos solutions exploitent l’intelligence artificielle pour révolutionner les méthodes archéologiques :
                    </p>
                    <ul className={styles.sectionList}>
                        <li>Clustering et analyse automatique des points géospatiaux pour détecter des structures cachées.</li>
                        <li>Création de modèles 3D à partir de données brutes.</li>
                        <li>Visualisation interactive des résultats avec des outils modernes.</li>
                        <li>Segmentation avancée des relevés pour cibler des zones spécifiques.</li>
                    </ul>
                </section>

                {/* Résultats */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
                    <ul className={styles.sectionList}>
                        <li><strong>Découvertes accélérées :</strong> Réduction du temps nécessaire pour identifier des sites d’intérêt.</li>
                        <li><strong>Précision accrue :</strong> Analyse automatisée éliminant les biais humains.</li>
                        <li><strong>Exploration augmentée :</strong> Détection de structures souvent invisibles avec des méthodes traditionnelles.</li>
                        <li><strong>Support décisionnel :</strong> Résultats exploitables pour guider les campagnes sur le terrain.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Conclusion</h2>
                    <p className={styles.sectionText}>
                        L’IA révolutionne l’archéologie en transformant des données brutes en découvertes. Rejoignez-nous pour intégrer ces technologies à vos projets et accélérer l’exploration de notre passé.
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
