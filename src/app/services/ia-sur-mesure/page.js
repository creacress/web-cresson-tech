"use client"; // Activer l'interactivité côté client
import Footer from "@/app/component/Footer/Footer";
import styles from "../../rpa-ia.module.css";

export default function IASurMesurePage() {
    return (
        <div className={styles.page}>
            <div className={styles.mainContent}>
                <h1 className={styles.mainTitle}>IA Sur Mesure</h1>

                {/* Contexte */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Contexte</h2>
                    <p className={styles.sectionText}>
                        Chaque entreprise est unique et nécessite des solutions adaptées à ses besoins spécifiques. L’intelligence artificielle sur mesure offre une approche personnalisée, capable de répondre à des problématiques complexes tout en s’intégrant harmonieusement à vos processus existants.
                    </p>
                    <p className={`${styles.sectionText} ${styles.contextHighlight}`}>
                        Nos solutions d'IA sur mesure visent à résoudre des défis tels que :
                    </p>
                    <ul className={styles.sectionList}>
                        <li><strong>Optimisation des processus métiers :</strong> Automatisation et rationalisation des tâches répétitives.</li>
                        <li><strong>Analyse prédictive :</strong> Anticiper les tendances grâce aux modèles personnalisés.</li>
                        <li><strong>Amélioration de la prise de décision :</strong> Informations exploitables basées sur vos données spécifiques.</li>
                    </ul>
                </section>

                {/* Défis */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Défis</h2>
                    <ul className={styles.sectionList}>
                        <li><strong>Hétérogénéité des données :</strong> Structurées, non structurées ou semi-structurées.</li>
                        <li><strong>Intégration avec les systèmes existants :</strong> Compatibilité et migration sans interruption.</li>
                        <li><strong>Scalabilité :</strong> Adaptabilité aux besoins croissants de l’entreprise.</li>
                        <li><strong>Personnalisation :</strong> Répondre précisément aux besoins métiers.</li>
                    </ul>
                </section>

                {/* Solutions apportées */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Solutions apportées</h2>
                    <p className={styles.sectionText}>
                        Nous proposons une gamme complète de services pour concevoir une IA sur mesure adaptée à vos objectifs :
                    </p>
                    <ul className={styles.sectionList}>
                        <li>Développement de modèles d'apprentissage automatique adaptés à vos données.</li>
                        <li>Optimisation des processus métiers par l’automatisation intelligente.</li>
                        <li>Visualisation de données et tableaux de bord dynamiques pour un suivi précis.</li>
                        <li>Formation et support pour une adoption réussie par vos équipes.</li>
                    </ul>
                </section>

                {/* Résultats */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
                    <ul className={styles.sectionList}>
                        <li><strong>Gain de temps :</strong> Réduction des tâches manuelles grâce à l’automatisation.</li>
                        <li><strong>Décisions éclairées :</strong> Résultats exploitables issus d’analyses avancées.</li>
                        <li><strong>Flexibilité accrue :</strong> Solutions évolutives adaptées à vos besoins futurs.</li>
                        <li><strong>Amélioration de la productivité :</strong> Des processus simplifiés et performants.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Conclusion</h2>
                    <p className={styles.sectionText}>
                        Nos solutions d’IA sur mesure transforment vos données en opportunités, vous offrant un avantage concurrentiel durable. Découvrez comment l’intelligence artificielle peut révolutionner vos activités.
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
