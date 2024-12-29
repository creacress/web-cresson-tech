import styles from '../../ServicePage.module.css';

export default function MaintenancePredictive() {
  return (
    <div className={styles.servicePage}>
      <h1 className={styles.pageTitle}>Maintenance Prédictive</h1>
      <p className={styles.pageDescription}>
        Automatisez vos processus de contrôle avec la RPA, exploitez vos données pour prédire les maintenances, et analysez-les en temps réel grâce à l'IA pour anticiper les problèmes et éviter les pannes.
      </p>
      <img
        src="/images/maintenance-predictive.jpg"
        alt="Maintenance Prédictive"
        className={styles.pageImage}
      />
      <p className={styles.pageContent}>
        Grâce à la maintenance prédictive, votre entreprise peut réduire considérablement les coûts liés aux interruptions imprévues et améliorer l'efficacité opérationnelle. L'IA permet d'anticiper les problèmes en analysant les données collectées sur vos équipements en temps réel.
      </p>
      <a href="/contact" className={styles.contactLink}>
        Contactez-nous pour en savoir plus
      </a>
    </div>
  );
}
