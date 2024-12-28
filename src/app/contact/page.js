'use client';

import { useState } from "react";
import styles from "../contact.module.css";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour gérer l'envoi du formulaire (par exemple, API call)
    setIsSubmitted(true); // Affiche le message après l'envoi

    // Réinitialiser le formulaire
    event.target.reset();

    // Réinitialiser le message après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Section Header */}
        <section className={styles.hero}>
          <h1>Contactez-nous</h1>
          <p className={styles.heroText}>
            Nous serions ravis de discuter de vos projets et de répondre à vos questions. 
            Remplissez le formulaire ci-dessous ou contactez-nous directement via nos coordonnées.
          </p>
        </section>

        {/* Formulaire de contact */}
        <section className={styles.contactFormSection}>
          <h2>Formulaire de Contact</h2>
          {isSubmitted ? (
            <p className={styles.successMessage}>Merci ! Votre message a été envoyé.</p>
          ) : (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" required placeholder="Votre nom" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Votre email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Votre message"></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Envoyer</button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}
