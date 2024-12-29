"use client"; // Activer l'interactivité côté client
import Footer from "@/app/component/Footer/Footer";
import styles from "../../rpa-ia.module.css";

export default function ServicePage() {
    return (
        <div className={styles.page}>
            <div className={styles.mainContent}>
            <h1 class={styles.mainTitle}>IA Générative</h1>
                {/* Contexte */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Contexte</h2>
                    <p className={styles.sectionText}>
                        L’IA Générative révolutionne la création de contenus en permettant aux entreprises de générer automatiquement des textes, des images, des vidéos et bien plus encore. Ces solutions basées sur des modèles d’apprentissage profond sont idéales pour répondre aux besoins créatifs à grande échelle tout en maintenant une qualité exceptionnelle.
                    </p>
                    <p className={`${styles.sectionText} ${styles.contextHighlight}`}>
                        Cependant, l’intégration de l’IA Générative pose plusieurs défis majeurs :
                    </p>
                    <ul className={styles.sectionList}>
                        <li><strong>Qualité et cohérence :</strong> Assurer une production homogène répondant aux standards de l’entreprise.</li>
                        <li><strong>Personnalisation :</strong> Adapter les contenus générés aux besoins spécifiques des utilisateurs ou des marchés cibles.</li>
                        <li><strong>Contrôle et éthique :</strong> Gérer les biais algorithmiques pour garantir des résultats fiables et inclusifs.</li>
                    </ul>
                    <a href="/contact" className={styles.contextCTA}>
                        Contactez-nous pour découvrir nos solutions
                    </a>
                </section>

                {/* Défis */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Défis</h2>
                    <ul className={styles.sectionList}>
                        <li><strong>Volume élevé de contenus :</strong> Générer rapidement un grand nombre de créations uniques.</li>
                        <li><strong>Optimisation des ressources :</strong> Réduire les coûts tout en augmentant la production.</li>
                        <li><strong>Conformité réglementaire :</strong> Respecter les règles de copyright et d’utilisation des données.</li>
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
                        <li><strong>Augmentation de la productivité :</strong> Création rapide et efficace de contenus divers.</li>
                        <li><strong>Réduction des coûts :</strong> Moins de ressources nécessaires pour des résultats équivalents ou supérieurs.</li>
                        <li><strong>Qualité constante :</strong> Résultats toujours alignés avec les attentes de l’entreprise.</li>
                        <li><strong>Innovation renforcée :</strong> Accès à des possibilités créatives inédites.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Conclusion</h2>
                    <p className={styles.sectionText}>
                        L’IA Générative ouvre la voie à une nouvelle ère de création automatisée, offrant aux entreprises des outils puissants pour transformer leurs processus et dépasser leurs objectifs. Découvrez comment intégrer ces technologies dans votre organisation.
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
