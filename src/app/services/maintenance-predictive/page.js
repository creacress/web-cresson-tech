import styles from '../../maitenance-pre.module.css';

export default function MaintenancePredictive() {
  return (
    <div className={styles.page}>
      <div className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Maintenance Prédictive</h1>

        {/* Contexte */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contexte</h2>
          <p className={styles.sectionText}>
            La maintenance prédictive utilise l'intelligence artificielle pour analyser en temps réel les données des équipements. Elle permet d'anticiper les pannes avant qu'elles ne se produisent, réduisant ainsi les coûts et les interruptions imprévues.
          </p>
          <p className={`${styles.sectionText} ${styles.contextHighlight}`}>
            Avant l’implémentation de la maintenance prédictive, les entreprises font face à plusieurs problématiques :
          </p>
          <ul className={styles.sectionList}>
            <li><strong>Manque de prévisibilité :</strong> Les pannes surviennent souvent de manière inattendue.</li>
            <li><strong>Coûts élevés :</strong> Les interruptions non planifiées augmentent les dépenses.</li>
            <li><strong>Perte de productivité :</strong> Les équipements en panne ralentissent les opérations.</li>
          </ul>
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
          <a href="/contact" className={styles.contextCTA}>
            Contactez-nous dès aujourd'hui !
          </a>
        </section>
      </div>
    </div>
  );
}
