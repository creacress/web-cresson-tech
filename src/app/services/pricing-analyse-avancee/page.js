"use client"; // Activer l'interactivité côté client
import Footer from "@/app/component/Footer/Footer";
import styles from "../../rpa-ia.module.css";

export default function PricingAnalyseAvanceePage() {
    return (
        <div className={styles.page}>
            <div className={styles.mainContent}>
                <h1 className={styles.mainTitle}>Pricing Dynamique et Analyse Avancée</h1>

                {/* Contexte */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Contexte</h2>
                    <p className={styles.sectionText}>
                        Dans un monde où les conditions du marché changent rapidement, l’optimisation des prix et l’analyse avancée des données sont des leviers essentiels pour maintenir un avantage concurrentiel. Grâce à l’intelligence artificielle, les entreprises peuvent ajuster leurs prix en temps réel et analyser des volumes de données massifs pour prendre des décisions stratégiques.
                    </p>
                    <p className={`${styles.sectionText} ${styles.contextHighlight}`}>
                        Voici quelques défis majeurs rencontrés dans la gestion traditionnelle des prix :
                    </p>
                    <ul className={styles.sectionList}>
                        <li><strong>Volatilité du marché :</strong> Les changements rapides des tendances rendent les prix fixes inefficaces.</li>
                        <li><strong>Analyse manuelle :</strong> Longue et peu précise pour traiter de gros volumes de données.</li>
                        <li><strong>Manque d'outils prédictifs :</strong> Absence de visibilité sur les tendances futures.</li>
                    </ul>
                </section>

                {/* Défis */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Défis</h2>
                    <ul className={styles.sectionList}>
                        <li><strong>Établir des prix compétitifs :</strong> Trouver le juste équilibre entre compétitivité et rentabilité.</li>
                        <li><strong>Analyse sectorielle :</strong> Identifier les opportunités et les menaces dans un marché spécifique.</li>
                        <li><strong>Volume de données :</strong> Traiter efficacement les données provenant de multiples sources.</li>
                        <li><strong>Précision prédictive :</strong> Anticiper les comportements des clients et l’évolution des tendances.</li>
                    </ul>
                </section>

                {/* Solutions apportées */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Solutions apportées</h2>
                    <p className={styles.sectionText}>
                        Nos solutions basées sur l’intelligence artificielle offrent des outils performants pour répondre à vos besoins spécifiques :
                    </p>
                    <ul className={styles.sectionList}>
                        <li>Modèles de pricing dynamique adaptés à votre secteur.</li>
                        <li>Analyse concurrentielle automatisée pour identifier vos forces et faiblesses.</li>
                        <li>Prédictions basées sur les comportements clients et les données historiques.</li>
                        <li>Visualisation des données pour des prises de décision rapides et éclairées.</li>
                    </ul>
                </section>

                {/* Résultats */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
                    <ul className={styles.sectionList}>
                        <li><strong>Augmentation des revenus :</strong> Optimisation des prix basée sur la demande et la concurrence.</li>
                        <li><strong>Décisions stratégiques éclairées :</strong> Analyse approfondie des données du marché.</li>
                        <li><strong>Réactivité accrue :</strong> Ajustements en temps réel grâce à des outils automatisés.</li>
                        <li><strong>Avantage concurrentiel :</strong> Positionnement optimal sur le marché.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Conclusion</h2>
                    <p className={styles.sectionText}>
                        Grâce à nos solutions avancées de pricing dynamique et d’analyse sectorielle, vous pouvez maximiser vos performances commerciales et rester compétitif dans un marché en constante évolution. Découvrez comment nos technologies peuvent transformer vos opérations.
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
