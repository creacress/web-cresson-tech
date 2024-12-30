"use client"; // Activer l'interactivité côté client
import Footer from "@/app/component/Footer/Footer";
import styles from "../../rpa-ia.module.css";

export default function IAAdministrativePage() {
    return (
        <div className={styles.page}>
            <div className={styles.mainContent}>
                <h1 className={styles.mainTitle}>IA Administrative (OCR)</h1>

                {/* Contexte */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Contexte</h2>
                    <p className={styles.sectionText}>
                        Les entreprises sont confrontées à une gestion administrative complexe et chronophage. L’intelligence artificielle, combinée à la reconnaissance optique de caractères (OCR), permet d’automatiser les tâches liées à la gestion documentaire et à la saisie de données. Ces technologies modernisent les processus administratifs en réduisant les erreurs et en accélérant le traitement des informations.
                    </p>
                    <p className={`${styles.sectionText} ${styles.contextHighlight}`}>
                        Voici les défis rencontrés dans la gestion administrative traditionnelle :
                    </p>
                    <ul className={styles.sectionList}>
                        <li><strong>Traitement manuel des documents :</strong> Long et sujet à des erreurs humaines.</li>
                        <li><strong>Volume élevé de données :</strong> Des centaines, voire des milliers de documents à traiter quotidiennement.</li>
                        <li><strong>Conformité :</strong> Nécessité de respecter des réglementations strictes.</li>
                    </ul>
                </section>

                {/* Défis */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Défis</h2>
                    <ul className={styles.sectionList}>
                        <li><strong>Extraction précise :</strong> Identifier les informations critiques dans des documents variés (PDF, images, scans).</li>
                        <li><strong>Classification automatique :</strong> Trier et organiser les documents en catégories spécifiques.</li>
                        <li><strong>Gestion des anomalies :</strong> Détecter et corriger les erreurs dans les données extraites.</li>
                        <li><strong>Respect des normes :</strong> Assurer la conformité réglementaire dans le traitement des données.</li>
                    </ul>
                </section>

                {/* Solutions apportées */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Solutions apportées</h2>
                    <p className={styles.sectionText}>
                        Nos solutions basées sur l’OCR et l’intelligence artificielle offrent des outils performants pour simplifier vos processus administratifs :
                    </p>
                    <ul className={styles.sectionList}>
                        <li>Extraction automatisée des données clés à partir de factures, contrats, et autres documents.</li>
                        <li>Classification intelligente des documents pour une organisation optimale.</li>
                        <li>Détection et résolution d’anomalies dans les données extraites.</li>
                        <li>Archivage automatisé et accessible grâce à des bases de données modernes.</li>
                    </ul>
                </section>

                {/* Résultats */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Résultats obtenus</h2>
                    <ul className={styles.sectionList}>
                        <li><strong>Réduction du temps de traitement :</strong> Automatisation des tâches administratives fastidieuses.</li>
                        <li><strong>Précision accrue :</strong> Extraction fiable des informations critiques.</li>
                        <li><strong>Conformité améliorée :</strong> Respect des réglementations grâce à des processus standardisés.</li>
                        <li><strong>Amélioration de la productivité :</strong> Réaffectation des ressources à des tâches à forte valeur ajoutée.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Conclusion</h2>
                    <p className={styles.sectionText}>
                        Avec nos solutions d’IA et d’OCR, modernisez vos processus administratifs et gagnez en efficacité. Découvrez comment nos technologies peuvent transformer la gestion documentaire et offrir un avantage stratégique à votre entreprise.
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
